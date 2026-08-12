# 数字化平台落地｜网站源码

这是作品集案例的当前线上版源码，基于 React 19 + vinext + Vite + Cloudflare Worker 结构。页面是单路由、长页面、滚动叙事式作品集案例。

## 快速开始

要求 Node.js `>=22.13.0`。

```bash
npm install
npm run dev
```

本地开发时从 `app/page.tsx` 和 `app/globals.css` 开始阅读。构建和测试：

```bash
npm run build
node --test tests/rendered-html.test.mjs
# 或
npm test
```

## 当前版本

- 原项目最新提交：`8496d2f`
- 线上地址：[luna-digital-platform.fengluna.chatgpt.site](https://luna-digital-platform.fengluna.chatgpt.site/)
- Sites 项目配置：`.openai/hosting.json`
- 页面入口：`app/page.tsx`
- 样式入口：`app/globals.css`

## 构建形态

- `vite.config.ts` 加载 vinext、Sites 插件和 Cloudflare Vite 插件。
- `worker/index.ts` 是 Cloudflare Worker 入口。
- `db/schema.ts` 当前为空；没有业务数据库依赖。
- `public/` 中的图片会随站点一起发布。
- GitHub Pages 使用 `npm run build:github-pages` 生成 `dist/github-pages` 静态站点；仓库名默认是 `luna-digital-platform`，对应项目站点路径 `/luna-digital-platform`。

## GitHub Pages

将本目录推送到 GitHub 仓库后，在仓库的 `Settings → Pages` 中把发布来源设为 `GitHub Actions`。之后每次推送到 `main` 分支，`.github/workflows/deploy-pages.yml` 会自动构建并发布网站。

## 源码边界

页面当前是一个完整的单页故事，不要因为看到旧 CSS 规则或模板遗留目录就贸然“整理重构”。具体复刻规则、交互时间线和验收要求见 `AGENTS.md` 以及上一级 `../交接/`。
