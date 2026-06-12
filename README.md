# YANN — Personal Tech Blog

静态个人站：履历 · 手记 · 试验场。基于 Astro，可部署到 Cloudflare Pages（免费，国内外均可访问）。

## 本地开发

```bash
npm install
npm run dev
```

访问 http://localhost:4321

## 写文章

在 `src/content/blog/` 新建 `.md` 文件：

```yaml
---
title:
  zh: 中文标题
  en: English Title
description:
  zh: 摘要
  en: Summary
date: 2026-06-12
tags: [tag]
draft: false   # true = 隐藏
---

正文 Markdown...
```

删除文件 = 删除文章。

## 改项目 / 简历

- 履历数据：`src/data/resume.ts`
- 试验场项目：`src/data/projects.ts`
- 界面文案：`src/i18n/ui.ts`

## 线上地址

| 平台 | 地址 | 说明 |
|------|------|------|
| Cloudflare Pages（主） | https://yann-blog.pages.dev | 国内外访问稳定，推荐 |
| GitHub Pages（备） | https://c0d9nqa3.github.io/MyBlog | push 后自动部署 |

## 部署方式

### 方式 A：Cloudflare（推荐，已配置 GitHub Actions）

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → 右侧 **Account ID** 复制
2. [API Tokens](https://dash.cloudflare.com/profile/api-tokens) → Create → 模板 **Edit Cloudflare Workers**
3. GitHub 仓库 → Settings → Secrets → Actions，添加：
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
4. push 到 `main` 分支即自动部署

### 方式 B：本地一键部署

```bash
npx wrangler login          # 首次需浏览器授权
npm run deploy
```

### 方式 C：GitHub Pages

仓库 Settings → Pages → Build and deployment → Source 选 **GitHub Actions**，push 后自动上线。

## 访问量

首页使用[不蒜子](https://busuanzi.ibruce.info/)统计，部署后自动生效，无需配置。
