---
title:
  zh: 这个站点开始运转了
  en: This Site Is Live
description:
  zh: 从简历 PDF 和 GitHub 仓库出发，搭建一个可以长期维护的个人出口。
  en: Starting from a resume and GitHub repos — building a maintainable personal outlet.
date: 2026-06-12
tags: [meta, astro]
draft: false
---

## 为什么做这个站

模板博客够用了，但不够**真实**。我想有一个地方可以同时放：

- 航空装备与嵌入式方向的工程记录
- 个人项目的完整上下文（不只是 README 里那几行）
- 学习过程中的草稿和复盘

## 技术选型

- **Astro** — 静态生成，首屏快，Markdown 内容管理简单
- **Cloudflare Pages** — 免费托管，全球 CDN，国内访问相对稳定
- **不蒜子** — 静态站访问量统计，无需后端

## 怎么写文章

在 `src/content/blog/` 下新建 `.md` 文件，按 frontmatter 格式填写标题和描述（中英文各一份）。删除文件即删除文章。

```yaml
---
title:
  zh: 中文标题
  en: English Title
description:
  zh: 中文摘要
  en: English summary
date: 2026-06-12
tags: [tag1]
draft: false
---
```

把 `draft` 设为 `true` 可以隐藏文章。

## 下一步

- 给试验场项目补截图
- 持续更新预测性维护平台的技术手记
- 考虑接入 RSS
