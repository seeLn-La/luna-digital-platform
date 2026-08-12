import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the digital platform case study", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>数字化平台落地｜业务流程到管理视角<\/title>/i);
  assert.match(html, /把复杂业务问题/);
  assert.match(html, /id="complexity"/);
  assert.match(html, /id="digital-platform"/);
  assert.match(html, /id="process"/);
  assert.match(html, /id="platform"/);
  assert.match(html, /开始探索/);
  assert.match(html, /欢迎使用数字平台/);
  assert.match(html, /点击这里收起导航/);
  assert.match(html, /Switch to English/);
  assert.doesNotMatch(html, /Your site is taking shape|react-loading-skeleton|codex-preview/i);
  assert.doesNotMatch(html, /进入真实数字平台|id="transition"|transition-story|THE OUTCOME/);
});

test("keeps the six-stage process and ends at the interactive platform", async () => {
  const response = await render();
  const html = await response.text();

  for (const label of ["需求", "合同 / 订单", "执行 / 变更", "结算", "支付", "数据归档"]) {
    assert.match(html, new RegExp(label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  for (const label of ["平台总览", "业务办理", "费用确认", "欢迎使用数字平台"]) {
    assert.match(html, new RegExp(label));
  }
  assert.doesNotMatch(html, /FROM REQUEST TO PAYMENT|Data moves with the process\.|新建需求/);
});
