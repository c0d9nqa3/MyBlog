---
title:
  zh: YOLO 边缘部署：从训练到机载推理
  en: 'YOLO Edge Deployment: Training to Onboard Inference'
description:
  zh: 无人机目标检测项目中，模型选型、量化与 TensorRT 优化的实战经验。
  en: Model selection, quantization, and TensorRT tuning from a UAV detection project.
date: 2026-05-20
tags: [YOLO, Edge AI, Computer Vision]
draft: false
---

## 背景

无人机机载检测需要在 **30fps+** 和 **mAP 不崩盘** 之间找平衡。对比了 YOLOv8n/s 和 RT-DETRv2 几个变体。

## 选型结论

| 模型 | 帧率 (Jetson) | mAP | 备注 |
|------|--------------|-----|------|
| YOLOv8n | ~45fps | 够用 | 首选部署 |
| YOLOv8s | ~28fps | 更好 | 算力够时升级 |
| RT-DETRv2 | ~35fps | 均衡 | transformer 路线值得跟踪 |

## 优化路径

1. **导出 ONNX** — 统一中间格式
2. **TensorRT FP16** — 通常 1.5–2× 加速
3. **输入分辨率** — 640→512 是性价比最高的降档点
4. **批处理** — 机载场景 batch=1，别幻想

## 跟踪层

检测只是第一步。地图坐标系下的 **ByteTrack** 关联让轨迹更稳定，尤其在目标短暂遮挡时。

## 踩坑

- 训练集和部署场景的 **光照/高度分布** 不一致 → 域偏移
- NMS 阈值在边缘端和训练端要对齐
- 第一帧延迟（冷启动）容易被忽略
