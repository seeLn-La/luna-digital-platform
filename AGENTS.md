# 网站复刻规则

## 目标

复刻的是当前线上「数字化平台落地」案例，不是 vinext starter。页面要保留：

- 首屏锁定式 Hero 和“查看案例”进入案例的动作；
- 业务复杂度网络 → 数字平台入口 → 六阶段业务流程；
- 业务关系整理动画；
- 可交互数字平台工作台和数据看板；
- 真实项目成果 → AI 判断过渡 → Vibe Coding 付款审核体验；
- 总结页、邮箱、微信二维码和 GitHub 联系入口；
- 中文/英文切换，且语言选择保存到 `localStorage`。

## 修改入口

- `app/page.tsx`：页面结构、文案、数据、React 状态和交互。
- `app/globals.css`：全部视觉样式、动画、响应式布局和最终覆盖层。
- `app/layout.tsx`：标题、描述、Open Graph、Twitter Card 和 favicon。
- `public/`：页面实际使用的图片和图标。
- `.openai/hosting.json`：现有 Sites 项目绑定；只复用，不新建项目。

## 不要做的事

- 不要把页面改回 starter skeleton。
- 不要删除 `englishCopy`、`usePageLanguage`、`portfolio-language` 或英文布局补偿规则。
- 不要删除 CSS 中标记为 V3/V4/V5、Final、Revision 的覆盖层；后面的规则会覆盖前面的历史实现。
- 不要把 `project-photo.jpg`、`wechat-qr.jpg` 或 `og.png` 换成临时占位图。
- 不要把页面拆成新的路由，除非用户明确要求；当前交付是单页滚动叙事。
- 不要把 `node_modules`、`dist`、`.next` 或 `.wrangler` 当成需要提交的源码。

## 验证

```bash
npm install
npm run build
node --test tests/rendered-html.test.mjs
```

也可以直接运行 `npm test`，它会先构建再执行渲染测试。测试至少要确认：页面标题、`#complexity`、`#digital-platform`、`#process`、`#platform`、六个流程阶段、`#dashboard`、AI 审核入口和中文/英文切换都存在，且没有 starter 文案。

## 发布

发布前确认构建通过，再使用 Sites 复用 `网站/.openai/hosting.json` 中的项目。保存版本必须来自本次验证过的源码；不要用历史 `work/*.tar.gz` 作为当前版本。当前线上地址见上一级 `README.md`。
