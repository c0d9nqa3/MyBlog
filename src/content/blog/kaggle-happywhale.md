---
title:
  zh: Kaggle 银牌复盘：用度量学习识别鲸豚背鳍
  en: 'Kaggle Silver: Metric Learning for Whale & Dolphin ID'
description:
  zh: YOLOv5x6 + EfficientNet-B7 + DOLG 特征融合，KNN 排序，排名 23/1654 的全流程复盘。
  en: End-to-end walkthrough of a Kaggle Silver solution — YOLOv5x6 cropping, EfficientNet-B7 + DOLG fusion, and KNN ranking.
date: 2026-05-10
tags: [Kaggle, CV, EfficientNet, Metric Learning]
draft: false
---

## 背景

2022 年 4 月参加了 Kaggle [Happywhale and Dolphin Identification](https://www.kaggle.com/c/happy-whale-and-dolphin) 竞赛，最终排名 **23 / 1654**，拿下银牌。

核心任务是根据鲸豚背鳍的照片识别个体——近似于野生动物的「人脸识别」，但标注极度不均衡，且含大量噪音图片。

---

## 问题的难点

1. **类内差异大**：同一只海豚在不同光照、角度、磨损程度下，外观差异很大
2. **类间相似**：不同个体的背鳍形态近似，靠分类网络直接 softmax 不够用
3. **噪音标注**：训练集里有「new_individual」标签（第一次出现的个体），不能直接用
4. **长尾分布**：头部个体样本多，大量个体只有 1–3 张照片

所以这道题的正确解法不是分类，而是**度量学习（Metric Learning）**：学一个嵌入空间，让同一个体的向量尽可能近，不同个体的向量尽可能远。

---

## 流程拆解

### Step 1：ROI 定位——YOLOv5x6

直接喂原图会引入大量背景干扰。先用 YOLOv5x6 精确裁出背鳍区域，再把裁剪图送进嵌入网络。

效果：大幅减少背景噪音，让后续特征更聚焦在纹理和轮廓上。

### Step 2：特征提取——EfficientNet-B7 + DOLG

单一主干不够，选了两条路线做特征融合：

- **EfficientNet-B7**：提取全局语义特征，对背鳍整体形态敏感
- **DOLG（Deep Orthogonal Local and Global）**：同时捕获局部细节（缺口、疤痕、纹路）和全局结构

两路特征 concat 后，用 ArcFace loss 做度量学习训练。ArcFace 通过角度 margin 拉大类间距离，比普通 softmax 的嵌入空间质量高得多。

### Step 3：伪标签降噪

`new_individual` 样本不能直接用，但丢掉也浪费。做法：

1. 用训练好的模型对所有 `new_individual` 图片提取嵌入
2. 与已知个体做 KNN 匹配，距离足够近 → 打上伪标签
3. 距离超阈值 → 保留为「unseen」，加入测试时的候选池

这一步让模型在第二轮训练时见到了更多有效样本。

### Step 4：KNN 排序与 top-5 输出

最终推理不是分类，而是**检索**：

1. 提取测试图的嵌入向量
2. 在全量训练集嵌入库里做 KNN，按余弦距离排序
3. 取 top-5 作为候选个体输出

评估指标 MAP@5，所以召回前 5 比精确 top-1 更重要——这也是为什么 KNN 检索比直接分类更适合这个任务。

---

## 结果

| 指标 | 数值 |
|------|------|
| 最终准确率 | **83.2%** |
| 竞赛排名 | **23 / 1654** |
| 奖牌 | **Silver** |

---

## 最大的收获

度量学习在「小样本 + 开集识别」场景下远优于分类头。这个框架可以迁移到很多类似问题：工业零件缺陷识别、安防人脸、医学影像中的个体匹配。

ArcFace loss 的角度 margin 调参对最终性能影响显著，建议从 `m=0.3` 开始往上调，配合学习率 warmup 效果最好。
