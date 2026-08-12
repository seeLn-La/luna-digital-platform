import type { Metadata } from "next";
import "./globals.css";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const publicSiteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://luna-digital-platform.fengluna.chatgpt.site").replace(/\/$/, "");
const publicRootUrl = `${publicSiteUrl}${publicBasePath}`;

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "数字化平台落地｜业务流程到管理视角",
  description: "从真实业务、角色与流程汇聚，到统一数字平台和项目管理总览的交互式案例。",
  metadataBase: new URL(publicRootUrl),
  openGraph: {
    title: "数字化平台落地",
    description: "从业务过程到统一管理视角",
    type: "website",
    images: [{ url: `${publicRootUrl}/og.png`, width: 1792, height: 1024, alt: "数字化平台落地" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "数字化平台落地",
    description: "从业务过程到统一管理视角",
    images: [`${publicRootUrl}/og.png`],
  },
  icons: {
    icon: `${publicBasePath}/favicon.svg`,
    shortcut: `${publicBasePath}/favicon.svg`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
