"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";
import {
  BadgeCheck,
  BadgeDollarSign,
  Bot,
  Building2,
  Calculator,
  ChartNoAxesCombined,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  CircleUserRound,
  ClipboardCheck,
  ClipboardList,
  CreditCard,
  Eye,
  FileCheck2,
  FileText,
  FileUp,
  FolderKanban,
  Gem,
  Grid2X2,
  HelpCircle,
  Hourglass,
  Image as ImageIcon,
  Layers3,
  LayoutDashboard,
  ListChecks,
  LogOut,
  Megaphone,
  Mail,
  Menu,
  NotebookPen,
  PackageCheck,
  Paperclip,
  PanelLeftClose,
  PieChart,
  PlayCircle,
  ReceiptText,
  RefreshCw,
  Repeat2,
  Ruler,
  Scale,
  Search,
  Send,
  Settings,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Trophy,
  UserPlus,
  UserRound,
  Users,
  WalletCards,
  type LucideIcon,
} from "lucide-react";

type Language = "zh" | "en";

const publicAsset = (filename: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/${filename}`;

const englishCopy: Record<string, string> = {
  "业务现状": "Business Context",
  "流程重构": "Process Redesign",
  "数字平台": "Digital Platform",
  "数据看板": "Data Visualization",
  "数据可视化": "Data Visualization",
  "项目成果": "Project Impact",
  "总结": "Summary",
  "把复杂业务问题": "Turning complex business problems",
  "转化为数据驱动的": "into data-driven",
  "产品与决策工具": "products and decision tools",
  "从成本、结算与业务流程中的真实问题出发，": "Starting from real challenges in cost, settlement and business operations,",
  "通过数据分析、流程设计与数字化工具，": "I use data analysis, process design and digital tools",
  "提升业务透明度、效率与决策质量。": "to improve transparency, efficiency and decision quality.",
  "查看案例": "View Case Study",
  "经营分析": "Business Analytics",
  "同比增长": "YoY Growth",
  "异常交易预警": "Transaction Risk Alert",
  "流程阶段": "Process Stages",
  "业务需求": "Business Request",
  "流程梳理": "Process Mapping",
  "系统引擎": "System Engine",
  "结果交付": "Outcome Delivery",
  "关键指标": "Key Metrics",
  "一个多角色、": "A multi-role,",
  "多阶段的工程成本管理业务": "multi-stage project cost operation",
  "真实痛点：": "Real pain points:",
  "信息数据分散": "Fragmented information and data",
  "过程难以追踪": "Processes are hard to track",
  "风险不易察觉": "Risks are difficult to detect",
  "点击这里收起导航，查看完整工作区": "Collapse the navigation to view the full workspace",
  "点击“开始审核”，体验 AI 逐步读取、核验并生成结果": "Select Start Review to watch AI read, verify and generate the result step by step",
  "联系方式": "Contact",
  "有想聊的项目、机会或想法，欢迎联系我": "Have a project, opportunity or idea in mind? I’d be happy to hear from you.",
  "微信二维码": "WeChat QR code",
  "微信联系": "Connect on WeChat",
  "需求": "Request",
  "采购 / 询价": "Sourcing / Quotation",
  "询价 / 合同": "Quotation / Contract",
  "合同 / 订单": "Contract / Order",
  "执行 / 变更": "Execution / Change",
  "结算": "Settlement",
  "支付": "Payment",
  "数据 / 归档": "Data / Archive",
  "需求收集": "Request intake",
  "方案评估": "Solution review",
  "预算立项": "Budget approval",
  "供应商寻源": "Supplier sourcing",
  "询价 / 比价": "Quotation comparison",
  "报价对比": "Bid analysis",
  "合同签订": "Contract signing",
  "条款约定": "Terms confirmation",
  "订单下达": "Order release",
  "施工组织": "Work planning",
  "进度跟踪": "Progress tracking",
  "现场验证": "Site verification",
  "结算编制": "Settlement preparation",
  "审核 / 调整": "Review / adjustment",
  "复核确认": "Final confirmation",
  "付款申请": "Payment request",
  "付款审批": "Payment approval",
  "付款执行": "Payment execution",
  "资料收集": "Document collection",
  "分类归档": "Classified archiving",
  "备查管理": "Audit-ready records",
  "业务方": "Business",
  "采购": "Procurement",
  "供应商 / 工程": "Supplier / Engineering",
  "供应商": "Supplier",
  "工程方": "Engineering",
  "成本方": "Cost",
  "成本": "Cost",
  "财务方": "Finance",
  "财务": "Finance",
  "财务 / 成本": "Finance / Cost",
  "把分散的业务过程": "Connecting fragmented",
  "连接起来": "business processes",
  "从需求、合同、执行到结算，重新组织角色、流程与数据，": "From request and contract to execution and settlement, roles, processes and data are reorganized",
  "让它们在同一个数字平台中持续流动。": "so they can move continuously through one digital platform.",
  "开始探索": "Explore the Process",
  "业务进入系统，从需求开始": "The workflow begins with a business request",
  "提出需求，明确范围，形成业务起点。": "Define the need and scope to establish a clear starting point.",
  "采购过程形成询价与合同": "Procurement turns sourcing into a contract",
  "供应商、价格、条款和订单在同一条采购链路中被确认。": "Suppliers, pricing, terms and orders are confirmed in one procurement flow.",
  "业务进入执行，过程持续变化": "Execution begins and changes are continuously captured",
  "执行、反馈和变化持续发生，并被记录下来。": "Execution, feedback and changes are recorded as they happen.",
  "执行结果进入审核与结算": "Execution results move into review and settlement",
  "业务结果被确认，金额进入最终审核。": "Outcomes are confirmed and amounts enter final review.",
  "确认结果进入付款流程": "Confirmed results move into payment",
  "结算、已支付与质保金被核验，形成准确的付款申请。": "Settlement, prior payments and retention are verified to create an accurate payment request.",
  "完整数据沉淀为可追溯资产": "Complete data becomes a traceable business asset",
  "需求、合同、执行、结算与支付资料被统一归档和持续复用。": "Request, contract, execution, settlement and payment records are archived and reused together.",
  "新建业务需求": "New Business Request",
  "草稿": "Draft",
  "待提交": "Ready to Submit",
  "项目": "Project",
  "城市展厅改造": "City Showroom Renovation",
  "需求类型": "Request Type",
  "空间施工": "Interior Construction",
  "计划预算": "Planned Budget",
  "需求说明": "Request Description",
  "一层公共区域及主展区升级": "Upgrade of the ground-floor public and exhibition areas",
  "2 位协作人": "2 collaborators",
  "提交需求": "Submit Request",
  "合同与订单": "Contract & Order",
  "审批中": "In Review",
  "空间施工总包合同": "Interior Construction Contract",
  "合作方": "Partner",
  "境和空间工程有限公司": "Jinghe Space Engineering Co.",
  "执行周期": "Execution Period",
  "业务确认": "Business Review",
  "采购审批": "Procurement Approval",
  "合同生效": "Contract Active",
  "执行追踪": "Execution Tracking",
  "进行中": "In Progress",
  "整体进度": "Overall Progress",
  "现场交底": "Site Briefing",
  "基础施工": "Base Construction",
  "展陈安装": "Exhibition Installation",
  "已完成": "Completed",
  "完成": "Done",
  "变更记录 CHG-012": "Change Record CHG-012",
  "灯光系统范围调整 · + ¥ 86,400": "Lighting scope adjustment · + ¥86,400",
  "结算审核": "Settlement Review",
  "已确认": "Confirmed",
  "最终结算金额": "Final Settlement Amount",
  "工程量确认": "Quantity Confirmation",
  "变更金额审核": "Change Amount Review",
  "结算资料归档": "Settlement Archive",
  "已支付 72%": "72% Paid",
  "待审批": "Pending Approval",
  "本次应付金额": "Current Payable",
  "结算金额核验": "Settlement Amount Check",
  "历史付款核验": "Previous Payment Check",
  "质保金 ¥ 60,420": "Retention ¥60,420",
  "已通过": "Passed",
  "已预留": "Reserved",
  "财务审批": "Finance Approval",
  "提交付款": "Submit Payment",
  "数据归档": "Data Archive",
  "已归档": "Archived",
  "项目全周期档案": "Full Project Lifecycle Archive",
  "需求与合同资料": "Request & Contract Records",
  "执行与变更记录": "Execution & Change Records",
  "结算与支付凭证": "Settlement & Payment Records",
  "资料完整度": "Record Completeness",
  "平台总览": "Platform Overview",
  "工作台": "Workspace",
  "项目管理": "Project Management",
  "合同管理": "Contract Management",
  "成本管理": "Cost Management",
  "变更管理": "Change Management",
  "结算管理": "Settlement Management",
  "支付管理": "Payment Management",
  "供应商管理": "Supplier Management",
  "报表中心": "Reporting",
  "系统设置": "System Settings",
  "搜索菜单": "Search menu",
  "帮助中心": "Help Centre",
  "退出登录": "Sign Out",
  "点击这里收起导航，查看完整工作区": "Click here to collapse the navigation and view the full workspace",
  "欢迎使用数字平台": "Welcome to the Digital Platform",
  "高效协同，智能管理，让成本服务更简单": "Collaborate efficiently, manage intelligently and simplify cost operations.",
  "系统公告": "System Notice",
  "【新功能上线】合同履约看板已上线，支持实时查看合同执行进度与关键节点。": "[New] The contract performance board is live with real-time progress and milestone tracking.",
  "查看全部 ›": "View all ›",
  "成本测算": "Cost Planning",
  "工作核验": "Work Verification",
  "工作提效": "Productivity",
  "成本尽调": "Cost Due Diligence",
  "建造标准": "Build Standards",
  "隐藏验收": "Concealed Work Inspection",
  "材料点验": "Material Inspection",
  "品控查验": "Quality Inspection",
  "审核要点": "Review Checklist",
  "超级清单": "Master Checklist",
  "会议纪要": "Meeting Notes",
  "价值成本": "Value Costing",
  "业务办理": "Business Services",
  "授权书": "Authorization",
  "供应商入库": "Supplier Onboarding",
  "指令单": "Instruction Order",
  "联系单": "Contact Form",
  "变更费用确认": "Change Cost Confirmation",
  "变更完工确认": "Change Completion Confirmation",
  "费用确认": "Cost Confirmation",
  "PO订单流程": "PO Workflow",
  "新增单价": "New Unit Rate",
  "图纸转图": "Drawing Conversion",
  "结算申报（有QS）": "Settlement Submission (QS)",
  "结算申报（无QS）": "Settlement Submission (No QS)",
  "费用支付申请": "Cost Payment Request",
  "最近更新": "Recently Updated",
  "【系统升级通知】数字平台将于 2026-05-25 22:00～23:00 进行系统升级。": "[System upgrade] The platform will be upgraded from 22:00 to 23:00 on 25 May 2026.",
  "查看更多 ›": "View more ›",
  "预算金额": "Budget",
  "动态金额": "Current Forecast",
  "已支付金额": "Paid Amount",
  "剩余金额": "Remaining Amount",
  "较预算 -": "vs. budget —",
  "较预算 +5.7%": "vs. budget +5.7%",
  "支付率 62.8%": "62.8% paid",
  "待支付金额": "Pending payment",
  "各工程费用分布": "Cost Distribution by Work Package",
  "总动态金额": "Total Forecast",
  "装修工程": "Fit-out",
  "机电工程": "M&E",
  "弱电工程": "ELV",
  "家具工程": "Furniture",
  "其他": "Other",
  "变更 / 付款 / 结算进展": "Change / Payment / Settlement Progress",
  "变更进展": "Change Progress",
  "付款进展": "Payment Progress",
  "结算进展": "Settlement Progress",
  "变更 #018": "Change #018",
  "付款 #006": "Payment #006",
  "结算申报": "Settlement Submission",
  "已审批": "Approved",
  "发起中": "Initiating",
  "2 小时前": "2 hours ago",
  "1 天前": "1 day ago",
  "3 天前": "3 days ago",
  "查看全部 ⌄": "View all ⌄",
  "整体结算进度": "Overall Settlement Progress",
  "整体完成率": "Overall Completion",
  "提交结算": "Submit Settlement",
  "审核中": "Under Review",
  "财务复核": "Finance Review",
  "支付中": "Paying",
  "工程 / 组件": "Work Package",
  "应结算金额": "Settlement Due",
  "已结算金额": "Settled Amount",
  "当前阶段": "Current Stage",
  "操作": "Action",
  "查看详情": "View Details",
  "真实项目 · 真实结果": "Real Project · Real Outcomes",
  "某互联网大厂总部改造项目": "Headquarters Renovation for a Leading Tech Company",
  "大型改造 · 全周期成本管理": "Large-scale renovation · Full-cycle cost management",
  "从数字化平台": "From a digital platform",
  "到真实项目结果": "to measurable project outcomes",
  "项目概况": "Project Overview",
  "涉及多专业工程、多个供应商协同。项目执行过程中成本持续动态变化，管理链条长、数据量大、变更频繁。": "The project involved multiple disciplines and suppliers. Costs evolved continuously through a long management chain with high data volume and frequent changes.",
  "我的角色": "My Role",
  "负责项目成本管理，并参与数字化平台落地与业务流程推进": "Led project cost management while helping deliver the digital platform and operational process rollout.",
  "成本管控": "Cost Control",
  "流程数字化": "Process Digitisation",
  "平台落地": "Platform Delivery",
  "跨团队协同": "Cross-team Collaboration",
  "成本优化 12.8%": "12.8% Cost Optimisation",
  "累计节省约 2,400 万元": "Approx. ¥24M cumulative savings",
  "通过方案比选、动态成本追踪与过程管控实现": "Delivered through option analysis, dynamic cost tracking and process control.",
  "全过程在线化": "End-to-end Online Workflow",
  "需求、合同、变更、结算、支付全流程协同": "Requests, contracts, changes, settlements and payments managed in one flow.",
  "成本状态可视化": "Visible Cost Status",
  "动态成本与执行进度实时更新，风险提前发现": "Live cost and execution updates surface risks earlier.",
  "数字化平台让成本管理从“事后核算”变为“过程管控”，数据驱动决策，真正参与业务。": "The digital platform shifts cost management from after-the-fact accounting to active process control, making data part of business decisions.",
  "下一步：让部分判断自动发生": "Next: automate repeatable decisions",
  "当数据已经被结构化": "Once the data is structured",
  "下一步": "The next step",
  "是让判断自动发生": "is to automate decisions",
  "项目数据": "Project data",
  "规则校验": "Rule checks",
  "金额判断": "Amount review",
  "进入 AI 审核": "Enter AI review",
  "一句话，": "One instruction.",
  "完成一次付款审核": "One complete payment review.",
  "上传付款资料与系统截图，AI 自动完成核验、识别异常，并生成审核清单与审批意见。": "Upload payment documents and system screenshots. AI verifies the data, flags anomalies and generates a review checklist and approval note.",
  "高效准确": "Fast and Accurate",
  "自动核验多项关键信息": "Automatically verifies key information",
  "异常识别": "Anomaly Detection",
  "发现不一致时主动预警": "Flags inconsistencies proactively",
  "标准输出": "Standardised Output",
  "生成可直接使用的结果": "Produces results ready for use",
  "在线": "Online",
  "帮我审核这个 PO 的付款": "Review this PO payment for me",
  "好的，我将对您上传的资料进行审核。请上传以下资料：": "Certainly. I will review the uploaded materials. Please provide the following documents:",
  "支付申请.pdf": "Payment Request.pdf",
  "结算审定单.pdf": "Settlement Approval.pdf",
  "PO合同.pdf": "PO Contract.pdf",
  "竣工验收报告.pdf": "Completion Acceptance.pdf",
  "系统截图.png": "System Screenshot.png",
  "点击开始审核，查看 AI 如何完成付款核验": "Click Start Review to see how AI verifies the payment",
  "开始审核": "Start Review",
  "正在读取资料…": "Reading documents…",
  "资料已识别，正在进入判断": "Documents recognised. Starting analysis…",
  "输入您的指令…": "Enter your instruction…",
  "您的文件仅用于本次审核，不会被存储或用于训练模型": "Your files are used only for this review and are not stored or used for model training.",
  "AI 正在判断": "AI is reviewing",
  "读取资料、交叉核验、识别异常，让每一步判断逐渐变得清晰。": "Reading documents, cross-checking data and identifying anomalies step by step.",
  "等待开始": "Ready to start",
  "正在读取资料": "Reading documents",
  "资料识别": "Document Recognition",
  "编号核验": "Reference Validation",
  "付款计算": "Payment Calculation",
  "申请单、发票、结算审定单、送货单与 PO 合同": "Payment request, invoice, settlement approval, delivery note and PO contract",
  "支付申请、结算审定与 PO 合同编号完成交叉核验": "Payment request, settlement approval and PO contract references cross-checked",
  "结算金额 ¥1,208,400 / PO 金额 ¥1,280,000": "Settlement ¥1,208,400 / PO amount ¥1,280,000",
  "已支付 + 本次应付 + 质保金 = 结算金额": "Paid + current payment + retention = settlement amount",
  "5 / 5 已识别": "5 / 5 recognised",
  "编号一致": "References match",
  "未超 PO": "Within PO",
  "金额匹配": "Amounts match",
  "等待核验": "Waiting",
  "审核通过": "Review Passed",
  "已生成 Checklist 与审批意见": "Checklist and approval note generated",
  "查看结果 →": "View Results →",
  "AI 审核结果": "AI Review Results",
  "审核完成后，自动输出可直接用于审批流程的结果。": "When the review is complete, the system generates results ready for the approval workflow.",
  "自动生成": "Automatically Generated",
  "可靠可用": "Reliable and Ready",
  "付款审核 Checklist": "Payment Review Checklist",
  "检查项": "Check",
  "结果": "Result",
  "说明": "Notes",
  "资料完整性": "Document Completeness",
  "PO金额核验": "PO Amount Check",
  "接收金额": "Received Amount",
  "付款金额": "Payment Amount",
  "质保金核验": "Retention Check",
  "查看 Checklist →": "View Checklist →",
  "审批意见": "Approval Note",
  "同意付款：": "Approve payment:",
  "1. 已识别 5/5 份资料，完整度 100%；": "1. 5/5 documents identified; completeness 100%.",
  "2. 结算金额 ¥1,208,400，PO 金额 ¥1,280,000，未超 PO，剩余额度 ¥71,600；": "2. Settlement ¥1,208,400 vs PO ¥1,280,000; within PO with ¥71,600 remaining.",
  "3. 已支付 ¥870,048 + 本次应付 ¥277,932 + 质保金 ¥60,420 = ¥1,208,400，差额 ¥0；": "3. Paid ¥870,048 + current payment ¥277,932 + retention ¥60,420 = ¥1,208,400; variance ¥0.",
  "4. 编号、金额及资料交叉核验无异常，建议按流程提交审批。": "4. References, amounts and documents show no anomalies. Proceed to approval.",
  "已复制": "Copied",
  "审核已完成": "Review Complete",
  "结果可直接用于审批流程。": "The result is ready for the approval workflow.",
  "从业务问题出发": "From business problems",
  "到可运行的解决方案": "to operational solutions",
  "理解业务": "Understand the Business",
  "找到真正的问题": "Find the real problem",
  "重构流程": "Redesign the Process",
  "建立可执行的结构": "Build an executable structure",
  "数据判断": "Data-led Decisions",
  "让过程变得可见": "Make the process visible",
  "产品落地": "Deliver the Product",
  "把方法变成工具": "Turn methods into tools",
  "AI 延伸": "Extend with AI",
  "让部分判断自动发生": "Automate repeatable decisions",
  "联系方式": "Contact",
  "邮箱": "Email",
  "微信": "WeChat",
  "扫码添加微信": "Scan to connect on WeChat",
};

const translatableAttributes = ["aria-label", "placeholder", "title", "data-owner", "data-organized-title"] as const;

function translateCopy(value: string) {
  const leading = value.match(/^\s*/)?.[0] ?? "";
  const trailing = value.match(/\s*$/)?.[0] ?? "";
  const source = value.trim();
  const exact = englishCopy[source];
  if (exact) return `${leading}${exact}${trailing}`;
  if (source.startsWith("正在") && englishCopy[source.slice(2)]) return `${leading}Reviewing: ${englishCopy[source.slice(2)]}${trailing}`;
  return value;
}

function usePageLanguage(language: Language) {
  const originalsRef = useRef(new WeakMap<Text, string>());
  const translatedRef = useRef(new WeakMap<Text, string>());
  const attributeOriginalsRef = useRef(new WeakMap<Element, Map<string, string>>());
  const attributeTranslationsRef = useRef(new WeakMap<Element, Map<string, string>>());

  useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "zh-CN";
    document.title = language === "en" ? "Digital Platform Delivery | Business Process Case Study" : "数字化平台落地｜业务流程到管理视角";

    const translateNode = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const textNode = node as Text;
        if (textNode.parentElement?.closest("[data-no-translate]")) return;
        const current = textNode.nodeValue ?? "";
        const previousTranslation = translatedRef.current.get(textNode);
        if (language === "en") {
          if (current !== previousTranslation) originalsRef.current.set(textNode, current);
          const original = originalsRef.current.get(textNode) ?? current;
          const translated = translateCopy(original);
          translatedRef.current.set(textNode, translated);
          if (current !== translated) textNode.nodeValue = translated;
        } else {
          const original = originalsRef.current.get(textNode);
          translatedRef.current.delete(textNode);
          if (original !== undefined && current !== original) textNode.nodeValue = original;
        }
        return;
      }

      if (!(node instanceof Element)) return;
      if (node.closest("[data-no-translate]")) return;
      const originals = attributeOriginalsRef.current.get(node) ?? new Map<string, string>();
      const translations = attributeTranslationsRef.current.get(node) ?? new Map<string, string>();
      translatableAttributes.forEach((attribute) => {
        const current = node.getAttribute(attribute);
        if (current === null) return;
        if (language === "en") {
          if (current !== translations.get(attribute)) originals.set(attribute, current);
          const translated = translateCopy(originals.get(attribute) ?? current);
          translations.set(attribute, translated);
          if (current !== translated) node.setAttribute(attribute, translated);
        } else {
          const original = originals.get(attribute);
          translations.delete(attribute);
          if (original !== undefined && current !== original) node.setAttribute(attribute, original);
        }
      });
      attributeOriginalsRef.current.set(node, originals);
      attributeTranslationsRef.current.set(node, translations);
      node.childNodes.forEach(translateNode);
    };

    translateNode(document.body);
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "characterData") translateNode(mutation.target);
        else if (mutation.type === "attributes") translateNode(mutation.target);
        else mutation.addedNodes.forEach(translateNode);
      });
    });
    observer.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: [...translatableAttributes] });
    return () => observer.disconnect();
  }, [language]);
}

type ProcessStage = {
  kicker: string;
  title: string;
  description: string;
  color: string;
};

const processStages: ProcessStage[] = [
  {
    kicker: "需求",
    title: "业务进入系统，从需求开始",
    description: "提出需求，明确范围，形成业务起点。",
    color: "#ded8ff",
  },
  {
    kicker: "询价 / 合同",
    title: "采购过程形成询价与合同",
    description: "供应商、价格、条款和订单在同一条采购链路中被确认。",
    color: "#f7e7ad",
  },
  {
    kicker: "执行 / 变更",
    title: "业务进入执行，过程持续变化",
    description: "执行、反馈和变化持续发生，并被记录下来。",
    color: "#f7d2e4",
  },
  {
    kicker: "结算",
    title: "执行结果进入审核与结算",
    description: "业务结果被确认，金额进入最终审核。",
    color: "#cfeee3",
  },
  {
    kicker: "支付",
    title: "确认结果进入付款流程",
    description: "结算、已支付与质保金被核验，形成准确的付款申请。",
    color: "#d6e2ff",
  },
  {
    kicker: "数据 / 归档",
    title: "完整数据沉淀为可追溯资产",
    description: "需求、合同、执行、结算与支付资料被统一归档和持续复用。",
    color: "linear-gradient(135deg, #d6e2ff 0%, #d4f0e5 100%)",
  },
];

const complexityCards = [
  { title: "需求", points: ["需求收集", "方案评估", "预算立项"], tone: "violet", owner: "业务方" },
  { title: "采购 / 询价", organizedTitle: "询价 / 合同", points: ["供应商寻源", "询价 / 比价", "报价对比"], tone: "yellow", owner: "采购" },
  { title: "合同 / 订单", points: ["合同签订", "条款约定", "订单下达"], tone: "yellow", owner: "采购", mergeOnOrganize: true },
  { title: "执行 / 变更", points: ["施工组织", "进度跟踪", "现场验证"], tone: "rose", owner: "供应商 / 工程" },
  { title: "结算", points: ["结算编制", "审核 / 调整", "复核确认"], tone: "mint", owner: "成本" },
  { title: "支付", points: ["付款申请", "付款审批", "付款执行"], tone: "indigo", owner: "财务" },
  { title: "数据 / 归档", points: ["资料收集", "分类归档", "备查管理"], tone: "dual", owner: "财务 / 成本" },
];

const caseNavItems = [
  { label: "业务现状", href: "#complexity" },
  { label: "流程重构", href: "#process" },
  { label: "数字平台", href: "#platform" },
  { label: "数据可视化", href: "#dashboard" },
  { label: "项目成果", href: "#project-impact" },
  { label: "Vibe Coding", href: "#vibe-coding" },
  { label: "总结", href: "#closing" },
] as const;

function SiteNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("#complexity");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const readingLine = window.scrollY + window.innerHeight * .34;
      setVisible(window.scrollY > window.innerHeight * .72);
      let current = caseNavItems[0].href;
      caseNavItems.forEach((item) => {
        const node = document.querySelector(item.href) as HTMLElement | null;
        if (node && node.offsetTop <= readingLine) current = item.href;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`site-nav ${visible ? "is-visible" : ""}`} aria-label="主导航">
      <a href="#top" className="case-mark" onClick={() => setOpen(false)}>CASE STUDY</a>
      <div className={`chapter-links ${open ? "is-open" : ""}`}>
        {caseNavItems.map((item) => <a className={active === item.href ? "is-active" : ""} href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
      </div>
      <button className="chapter-menu" type="button" aria-expanded={open} aria-label={open ? "关闭章节导航" : "打开章节导航"} onClick={() => setOpen((value) => !value)}><Menu size={20} /></button>
    </nav>
  );
}

function LanguageToggle({ language, onToggle }: { language: Language; onToggle: () => void }) {
  const targetIsEnglish = language === "zh";
  return (
    <button
      className="language-toggle"
      data-no-translate
      type="button"
      onClick={onToggle}
      aria-label={targetIsEnglish ? "Switch to English" : "切换至中文"}
    >
      <b>{targetIsEnglish ? "EN" : "中"}</b>
      <span>{targetIsEnglish ? "English" : "中文"}</span>
    </button>
  );
}

function HomeFloatingCard({ kind, children }: { kind: string; children: React.ReactNode }) {
  return <div className={`hero-float-card hero-float-${kind}`}>{children}</div>;
}

function HeroVisualStage() {
  return (
    <div className="hero-visual-stage" aria-hidden="true">
      <div className="hero-float-wrap hero-float-wrap-analysis">
        <HomeFloatingCard kind="analysis">
          <b>经营分析</b><strong>+18.6%</strong><small>同比增长</small>
          <i>{[18, 29, 40, 53, 69, 86].map((height) => <em key={height} style={{ height: `${height}%` }} />)}</i>
        </HomeFloatingCard>
      </div>
      <div className="hero-float-wrap hero-float-wrap-risk">
        <HomeFloatingCard kind="risk">
          <b>Risk</b><strong>High</strong><i className="hero-risk-line" />
          <small>异常交易预警</small><span>23</span>
        </HomeFloatingCard>
      </div>
      <div className="hero-float-wrap hero-float-wrap-data">
        <HomeFloatingCard kind="data">
          <b>Data</b><strong>Live</strong>
          <i className="hero-data-dots">{Array.from({ length: 56 }, (_, index) => <em key={index} />)}</i>
        </HomeFloatingCard>
      </div>
      <div className="hero-float-wrap hero-float-wrap-process">
        <HomeFloatingCard kind="process">
          <b>流程阶段</b>
          {[["业务需求", "done"], ["流程梳理", "done"], ["系统引擎", "active"], ["结果交付", "waiting"]].map(([label, status], index) => <p className={`is-${status}`} key={label}><i>{index + 1}</i><span>{label}</span><em /></p>)}
        </HomeFloatingCard>
      </div>
      <div className="hero-float-wrap hero-float-wrap-rules">
        <HomeFloatingCard kind="rules">
          <b>Rules</b><strong>{`{ }`}</strong>
          <code>if amount &gt; threshold<br />and risk_score &gt; 0.7:<br />&nbsp; action = &quot;review&quot;</code>
          <small>•••</small>
        </HomeFloatingCard>
      </div>
      <div className="hero-float-wrap hero-float-wrap-toggle"><div className="hero-orbit-toggle"><span>☀</span><i><b /></i></div></div>
      <div className="hero-float-wrap hero-float-wrap-metric"><div className="hero-orbit-metric"><i>‹</i><span><b>12</b><small>关键指标</small></span><i>›</i></div></div>
      <span className="hero-orbit-cube hero-orbit-cube-violet" />
      <span className="hero-orbit-cube hero-orbit-cube-yellow" />
      <span className="hero-orbit-cube hero-orbit-cube-pink" />
    </div>
  );
}

function ComplexityNetwork({ organized = false }: { organized?: boolean }) {
  return (
    <div className={`complexity-network ${organized ? "is-organized" : ""}`} aria-label="业务角色、流程和数据关系">
      <div className="network-line line-a" aria-hidden="true" />
      <div className="network-line line-b" aria-hidden="true" />
      <div className="network-line line-c" aria-hidden="true" />
      {complexityCards.map((card, index) => (
        <article className={`complexity-card card-${index + 1} ${"mergeOnOrganize" in card && card.mergeOnOrganize ? "merge-on-organize" : ""}`} data-owner={card.owner} key={card.title}>
          <div><i className={`tone-${card.tone}`} /> <b className="complexity-card-title" data-organized-title={"organizedTitle" in card ? card.organizedTitle : card.title}>{card.title}</b></div>
          <ul>{card.points.map((point) => <li key={point}>{point}</li>)}</ul>
        </article>
      ))}
      <span className="role-chip role-business">业务方<small>Business</small></span>
      <span className="role-chip role-cost">成本方<small>Cost</small></span>
      <span className="role-chip role-engineering">工程方<small>Engineering</small></span>
      <span className="role-chip role-supplier">供应商<small>Supplier</small></span>
      <span className="role-chip role-finance">财务方<small>Finance</small></span>
      <span className="data-orb orb-1" aria-hidden="true">▱</span>
      <span className="data-orb orb-2" aria-hidden="true">▤</span>
      <span className="data-orb orb-3" aria-hidden="true">◫</span>
    </div>
  );
}

function BusinessComplexity() {
  return (
    <section className="complexity-story" id="complexity" aria-label="业务复杂度">
      <div className="complexity-heading">
        <span className="eyebrow">BUSINESS COMPLEXITY</span>
        <h2>一个多角色、<br />多阶段的工程成本管理业务</h2>
        <div className="complexity-pain-copy">
          <span>真实痛点：</span>
          <p>信息数据分散</p>
          <p>过程难以追踪</p>
          <p>风险不易察觉</p>
        </div>
      </div>
      <ComplexityNetwork />
    </section>
  );
}

function PlatformIntro() {
  const enterProcess = () => {
    document.querySelector("#process")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="platform-intro" id="digital-platform" aria-label="数字平台章节入口">
      <div className="platform-intro-meta"><span>DIGITAL PLATFORM</span><span>THE STRUCTURE</span></div>
      <div className="platform-intro-copy">
        <span className="eyebrow">A DIGITAL PLATFORM FOR THE WHOLE PROCESS</span>
        <h2>把分散的业务过程<br />连接起来</h2>
        <p>从需求、合同、执行到结算，重新组织角色、流程与数据，<br />让它们在同一个数字平台中持续流动。</p>
        <button className="platform-intro-button" type="button" onClick={enterProcess}><span>开始探索</span><b>↓</b></button>
      </div>
    </section>
  );
}

function DemandUI() {
  return (
    <div className="workflow-card demand-card">
      <div className="window-topline">
        <span>新建业务需求</span>
        <span className="status-pill status-draft">待提交</span>
      </div>
      <div className="form-grid">
        <div className="field wide"><span>项目</span><b>城市展厅改造</b></div>
        <div className="field"><span>需求类型</span><b>空间施工</b></div>
        <div className="field"><span>计划预算</span><b>¥ 1,280,000</b></div>
        <div className="field wide"><span>需求说明</span><b>一层公共区域及主展区升级</b></div>
      </div>
      <div className="card-footer">
        <div className="avatar-stack"><i>L</i><i>C</i><span>2 位协作人</span></div>
        <button type="button" tabIndex={-1}>提交需求</button>
      </div>
    </div>
  );
}

function ContractUI() {
  return (
    <div className="workflow-card contract-card">
      <div className="window-topline">
        <span>合同与订单</span>
        <span className="status-pill status-review">审批中</span>
      </div>
      <div className="contract-title">
        <div><small>CONTRACT</small><strong>空间施工总包合同</strong></div>
        <b>¥ 1,146,000</b>
      </div>
      <div className="summary-row"><span>合作方</span><b>境和空间工程有限公司</b></div>
      <div className="summary-row"><span>执行周期</span><b>2026.08 — 2026.11</b></div>
      <div className="approval-line">
        <span className="done-dot">✓</span><i></i><span className="active-dot">2</span><i></i><span>3</span>
      </div>
      <div className="approval-labels"><span>业务确认</span><span>采购审批</span><span>合同生效</span></div>
    </div>
  );
}

function ExecutionUI() {
  return (
    <div className="workflow-card execution-card">
      <div className="window-topline">
        <span>执行追踪</span>
        <span className="status-pill status-live"><i />进行中</span>
      </div>
      <div className="progress-heading"><strong>整体进度</strong><b>64%</b></div>
      <div className="progress-track"><i /></div>
      <div className="milestone-list">
        <div className="milestone completed"><i>✓</i><span><b>现场交底</b><small>08.12 已完成</small></span><em>完成</em></div>
        <div className="milestone completed"><i>✓</i><span><b>基础施工</b><small>09.02 已完成</small></span><em>完成</em></div>
        <div className="milestone current"><i>3</i><span><b>展陈安装</b><small>预计 09.26 完成</small></span><em>进行中</em></div>
        <div className="change-note"><span>＋</span><p><b>变更记录 CHG-012</b><small>灯光系统范围调整 · + ¥ 86,400</small></p><time>2h</time></div>
      </div>
    </div>
  );
}

function SettlementUI() {
  return (
    <div className="workflow-card settlement-card">
      <div className="window-topline">
        <span>结算审核</span>
        <span className="status-pill status-closed">已确认</span>
      </div>
      <div className="settlement-total">
        <span>最终结算金额</span>
        <strong>¥ 1,208,400</strong>
        <small>合同金额 ¥ 1,146,000 · 累计变更 + ¥ 62,400</small>
      </div>
      <div className="check-list">
        <div><i>✓</i><span>工程量确认</span><b>已完成</b></div>
        <div><i>✓</i><span>变更金额审核</span><b>已完成</b></div>
        <div><i>✓</i><span>结算资料归档</span><b>已完成</b></div>
      </div>
      <div className="payment-bar"><span>已支付 72%</span><i><b /></i><strong>¥ 870,048</strong></div>
    </div>
  );
}

function PaymentUI() {
  return (
    <div className="workflow-card payment-card">
      <div className="window-topline">
        <span>付款申请</span>
        <span className="status-pill status-review">待审批</span>
      </div>
      <div className="settlement-total">
        <span>本次应付金额</span>
        <strong>¥ 277,932</strong>
        <small>结算金额 ¥ 1,208,400 · 已支付 ¥ 870,048</small>
      </div>
      <div className="check-list">
        <div><i>✓</i><span>结算金额核验</span><b>已通过</b></div>
        <div><i>✓</i><span>历史付款核验</span><b>已通过</b></div>
        <div><i>✓</i><span>质保金 ¥ 60,420</span><b>已预留</b></div>
      </div>
      <div className="card-footer payment-footer">
        <div className="avatar-stack"><i>F</i><span>财务审批</span></div>
        <button type="button" tabIndex={-1}>提交付款</button>
      </div>
    </div>
  );
}

function ArchiveUI() {
  return (
    <div className="workflow-card archive-card">
      <div className="window-topline">
        <span>数据归档</span>
        <span className="status-pill status-closed">已归档</span>
      </div>
      <div className="archive-summary">
        <div><FolderKanban size={24} /><span><strong>项目全周期档案</strong><small>城市展厅改造 · ARC-2026-018</small></span></div>
        <b>100%</b>
      </div>
      <div className="check-list archive-list">
        <div><i>✓</i><span>需求与合同资料</span><b>12 项</b></div>
        <div><i>✓</i><span>执行与变更记录</span><b>28 项</b></div>
        <div><i>✓</i><span>结算与支付凭证</span><b>16 项</b></div>
      </div>
      <div className="payment-bar"><span>资料完整度</span><i><b style={{ width: "100%" }} /></i><strong>56 / 56</strong></div>
    </div>
  );
}

const stageVisuals = [DemandUI, ContractUI, ExecutionUI, SettlementUI, PaymentUI, ArchiveUI];

function ProcessStory() {
  const processStepsRef = useRef<Array<HTMLElement | null>>([]);
  const processStoryRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const steps = processStepsRef.current.filter(Boolean) as HTMLElement[];
    const story = processStoryRef.current;
    if (!steps.length || !story) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const viewportHeight = window.innerHeight;
      const activationLine = viewportHeight * .25;
      let nextActive = 0;

      steps.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        if (rect.top <= activationLine) nextActive = index;
      });

      const activeRect = steps[nextActive].getBoundingClientRect();
      /*
       * Each stage owns two separate scroll beats:
       * 1. Its white interface grows from the centre until the colour is fully covered.
       * 2. It stays fully covered until the next narrative reaches the activation line.
       * This keeps the left content stable while the reader finishes the current copy.
       */
      const expandDistance = viewportHeight * .46;
      const progress = Math.max(0, Math.min(1, (activationLine - activeRect.top) / expandDistance));
      const reveal = 7 + progress * 143;
      const uiScale = .78 + progress * .22;
      const uiWidth = 72 + progress * 26;

      story.style.setProperty("--process-reveal", `${reveal}%`);
      story.style.setProperty("--process-ui-scale", uiScale.toFixed(4));
      story.style.setProperty("--process-ui-width", `${uiWidth}%`);
      setActive((current) => current === nextActive ? current : nextActive);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={processStoryRef}
      className="process-story"
      id="process"
      aria-label="从需求到结算的业务流程"
    >
      <div className="process-story-index">
        <span>THE PROCESS</span>
        <span aria-live="polite">0{active + 1} / 06</span>
      </div>
      <div className="process-stage">
        <div className="process-visual-column">
          <div className="process-visual-frame">
            <div className="process-visual-track">
              {processStages.map((stage, index) => {
                const Visual = stageVisuals[index];
                return (
                  <div
                    className={`process-visual-slide ${active === index ? "is-current" : ""} ${active > 0 && index === active - 1 ? "is-previous" : ""}`}
                    style={{
                      "--canvas-color": stage.color,
                      zIndex: active === index ? 3 : active > 0 && index === active - 1 ? 2 : 0,
                    } as CSSProperties}
                    key={stage.kicker}
                  >
                    <div className="process-canvas-noise" />
                    <div className="process-card-shell"><Visual /></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="process-content-column">
          <div className="process-narrative">
            {processStages.map((stage, index) => (
              <article
                className={`process-copy-slide ${active === index ? "is-active" : ""}`}
                data-step={index}
                key={stage.title}
                ref={(element) => { processStepsRef.current[index] = element; }}
              >
                <span className="process-step-label">0{index + 1} / {stage.kicker}</span>
                <h2>{stage.title}</h2>
                <p>{stage.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="process-mobile-list">
        <div className="process-mobile-index"><span>THE PROCESS</span><span>01 — 06</span></div>
        {processStages.map((stage, index) => {
          const Visual = stageVisuals[index];
          return (
            <article className="process-mobile-stage" key={stage.title}>
              <div className="process-mobile-copy">
                <span className="process-step-label">0{index + 1} / {stage.kicker}</span>
                <h2>{stage.title}</h2>
                <p>{stage.description}</p>
              </div>
              <div className="process-mobile-canvas" style={{ "--canvas-color": stage.color } as CSSProperties}>
                <div className="process-canvas-noise" />
                <div className="process-card-shell"><Visual /></div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

type PlatformNavItem = { label: string; icon: LucideIcon; expandable?: boolean };

const platformNavItems: PlatformNavItem[] = [
  { label: "平台总览", icon: LayoutDashboard },
  { label: "工作台", icon: Grid2X2 },
  { label: "项目管理", icon: FolderKanban, expandable: true },
  { label: "合同管理", icon: FileText, expandable: true },
  { label: "成本管理", icon: CircleDollarSign },
  { label: "变更管理", icon: Repeat2, expandable: true },
  { label: "结算管理", icon: BadgeCheck },
  { label: "支付管理", icon: WalletCards },
  { label: "供应商管理", icon: Users },
  { label: "报表中心", icon: ChartNoAxesCombined },
  { label: "系统设置", icon: Settings },
];

function InteractiveSidebar({
  collapsed,
  active,
  query,
  onToggle,
  onSelect,
  onQuery,
}: {
  collapsed: boolean;
  active: string;
  query: string;
  onToggle: () => void;
  onSelect: (label: string) => void;
  onQuery: (value: string) => void;
}) {
  const filtered = platformNavItems.filter((item) => item.label.includes(query));
  return (
    <aside className={`interactive-sidebar ${collapsed ? "is-collapsed" : ""}`}>
      <button className="sidebar-menu-button" type="button" onClick={onToggle} aria-label={collapsed ? "展开导航栏" : "收起导航栏"}>{collapsed ? <Menu size={21} /> : <PanelLeftClose size={21} />}</button>
      {!collapsed && <div className="sidebar-search"><span><Search size={15} /></span><input value={query} onChange={(event) => onQuery(event.target.value)} placeholder="搜索菜单" aria-label="搜索菜单" /></div>}
      <nav className="sidebar-nav" aria-label="数字平台导航">
        {filtered.map((item) => (
          <button className={`sidebar-nav-item ${active === item.label ? "is-active" : ""}`} type="button" key={item.label} onClick={() => onSelect(item.label)} title={collapsed ? item.label : undefined}>
            <i><item.icon size={18} strokeWidth={1.7} /></i>
            {!collapsed && <b>{item.label}</b>}
            {!collapsed && item.expandable && <span><ChevronDown size={13} /></span>}
          </button>
        ))}
      </nav>
      {!collapsed && <div className="sidebar-bottom"><button type="button" onClick={() => onSelect("帮助中心")}><HelpCircle size={17} /><span>帮助中心</span></button><button type="button" onClick={() => onSelect("退出登录")}><LogOut size={17} /><span>退出登录</span></button></div>}
    </aside>
  );
}

const platformFeatureGroups = [
  { title: "成本测算", items: [[PieChart, "成本尽调"], [Layers3, "建造标准"], [Calculator, "成本测算"]] },
  { title: "工作核验", items: [[ClipboardCheck, "隐藏验收"], [PackageCheck, "材料点验"], [ShieldCheck, "品控查验"], [BadgeCheck, "审核要点"]] },
  { title: "工作提效", items: [[ListChecks, "超级清单"], [NotebookPen, "会议纪要"], [Gem, "价值成本"]] },
] as const;

const businessActions = [
  { label: "授权书", icon: UserRound },
  { label: "供应商入库", icon: UserPlus },
  { label: "指令单", icon: PlayCircle },
  { label: "联系单", icon: Send },
  { label: "变更费用确认", icon: BadgeDollarSign },
  { label: "变更完工确认", icon: FileCheck2 },
];

const expenseActions = [
  { label: "PO订单流程", icon: ClipboardList },
  { label: "新增单价", icon: CircleDollarSign },
  { label: "图纸转图", icon: Ruler },
  { label: "结算申报（有QS）", icon: ReceiptText },
  { label: "结算申报（无QS）", icon: FileCheck2 },
  { label: "费用支付申请", icon: CreditCard },
];

function DigitalPlatformUI() {
  const [collapsed, setCollapsed] = useState(false);
  const [showSidebarHint, setShowSidebarHint] = useState(true);
  const [active, setActive] = useState("平台总览");
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("");
  const notify = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice((current) => current === message ? "" : current), 1800);
  };
  const selectNav = (label: string) => {
    setActive(label);
    notify(`${label}已切换`);
  };
  const featureAction = (label: string) => notify(`${label}模块已打开`);
  const toggleSidebar = () => {
    setCollapsed((value) => !value);
    setShowSidebarHint(false);
  };
  return (
    <section className="digital-platform-story" id="platform" aria-label="交互式数字平台">
      <div className={`digital-platform-shell ${collapsed ? "sidebar-collapsed" : ""}`}>
        <InteractiveSidebar collapsed={collapsed} active={active} query={query} onToggle={toggleSidebar} onSelect={selectNav} onQuery={setQuery} />
        {showSidebarHint && !collapsed && <button className="sidebar-collapse-hint" type="button" onClick={toggleSidebar}><span>点击这里收起导航，查看完整工作区</span><b>↖</b></button>}
        <div className="digital-platform-main">
          <div className="digital-platform-content">
            <div className="digital-platform-heading"><div><span>DIGITAL PLATFORM</span><h2>欢迎使用数字平台</h2><p>高效协同，智能管理，让成本服务更简单</p></div></div>
            <button className="platform-announcement" type="button" onClick={() => notify("系统公告：合同履约看板已上线")}><Megaphone size={18} /><b>系统公告</b><span>【新功能上线】合同履约看板已上线，支持实时查看合同执行进度与关键节点。</span><i>查看全部 ›</i></button>
            <div className="platform-feature-grid">
              {platformFeatureGroups.map((group) => <article className="platform-feature-card" key={group.title}><h3>{group.title}</h3><div className="platform-feature-items">{group.items.map(([FeatureIcon, label]) => <button type="button" key={label} onClick={() => featureAction(label)}><i><FeatureIcon size={21} strokeWidth={1.65} /></i><span>{label}</span></button>)}</div></article>)}
            </div>
            <section className="platform-wide-card"><h3>业务办理</h3><div className="platform-action-grid">{businessActions.map(({ label, icon: ActionIcon }) => <button type="button" key={label} onClick={() => featureAction(label)}><i><ActionIcon size={20} strokeWidth={1.65} /></i><span>{label}</span></button>)}</div></section>
            <section className="platform-wide-card"><h3>费用确认</h3><div className="platform-action-grid">{expenseActions.map(({ label, icon: ActionIcon }) => <button type="button" key={label} onClick={() => featureAction(label)}><i><ActionIcon size={20} strokeWidth={1.65} /></i><span>{label}</span></button>)}</div></section>
          </div>
        </div>
      </div>
      {notice && <div className="platform-toast" role="status">{notice}</div>}
    </section>
  );
}

function DashboardUI() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("平台总览");
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("");
  const notify = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice((current) => current === message ? "" : current), 1800);
  };
  const selectNav = (label: string) => { setActive(label); notify(`${label}已切换`); };
  const kpis = [["预算金额", "¥280K", "较预算 -", "violet", WalletCards], ["动态金额", "¥296K", "较预算 +5.7%", "green", TrendingUp], ["已支付金额", "¥186K", "支付率 62.8%", "blue", CreditCard], ["剩余金额", "¥110K", "待支付金额", "orange", CircleDollarSign]] as const;
  const activities = [["变更进展", "变更 #018", "已审批", "2 小时前", "violet", Repeat2], ["付款进展", "付款 #006", "发起中", "1 天前", "green", CircleUserRound], ["结算进展", "结算申报", "已完成", "3 天前", "orange", Hourglass]] as const;
  return (
    <section className="dashboard-story" id="dashboard" aria-label="数字平台 Dashboard">
      <div className={`dashboard-shell ${collapsed ? "sidebar-collapsed" : ""}`}>
        <InteractiveSidebar collapsed={collapsed} active={active} query={query} onToggle={() => setCollapsed((value) => !value)} onSelect={selectNav} onQuery={setQuery} />
        <div className="dashboard-main">
          <div className="dashboard-content">
            <div className="dashboard-section-label"><span>DASHBOARD</span><button type="button" onClick={() => notify("Dashboard数据已更新")}><RefreshCw size={13} /> 最近更新</button></div>
            <button className="dashboard-announcement" type="button" onClick={() => notify("系统升级通知已打开")}><Megaphone size={18} /><b>系统公告</b><span>【系统升级通知】数字平台将于 2026-05-25 22:00～23:00 进行系统升级。</span><i>查看更多 ›</i></button>
            <div className="dashboard-kpis">{kpis.map(([label, value, note, tone, KpiIcon]) => <button className={`dashboard-kpi ${tone}`} type="button" key={label} onClick={() => notify(`${label}详情已打开`)}><i><KpiIcon size={23} strokeWidth={1.65} /></i><span><b>{label}</b><strong>{value}</strong><small>{note}</small></span></button>)}</div>
            <div className="dashboard-middle"><section className="dashboard-card expense-distribution"><h3>各工程费用分布</h3><div className="donut-chart"><b>¥296K<small>总动态金额</small></b></div><div className="donut-legend">{[["装修工程", "¥150K", "50.7%", "purple"], ["机电工程", "¥80K", "27.0%", "blue"], ["弱电工程", "¥36K", "12.2%", "green"], ["家具工程", "¥30K", "10.1%", "yellow"], ["其他", "¥0K", "0.0%", "gray"]].map(([name, amount, percent, tone]) => <button type="button" key={name} onClick={() => notify(`${name}费用明细已打开`)}><i className={tone} /><span>{name}</span><b>{amount}</b><em>{percent}</em></button>)}</div></section><section className="dashboard-card activity-card"><div className="dashboard-card-heading"><h3>变更 / 付款 / 结算进展</h3><button type="button" onClick={() => notify("已显示全部进展")}>查看全部 ⌄</button></div><div className="activity-list">{activities.map(([kind, title, status, time, tone, ActivityIcon]) => <button type="button" key={title} onClick={() => notify(`${title}详情已打开`)}><i className={tone}><ActivityIcon size={18} strokeWidth={1.7} /></i><span><small>{kind}</small><b>{title}</b></span><em>{status}</em><time>{time} ›</time></button>)}</div></section></div>
            <section className="dashboard-card settlement-progress">
              <h3>整体结算进度</h3>
              <div className="settlement-overview">
                <div><span>整体完成率</span><strong>68%</strong><small>已结算 ¥201K / 应结算 ¥296K</small></div>
                <div className="settlement-track">{["提交结算", "审核中", "财务复核", "支付中", "已完成"].map((item, index) => <button type="button" key={item} onClick={() => notify(`${item}阶段已打开`)}><i className={index < 2 ? "is-done" : ""}>{index + 1}</i><span>{item}</span><b>{["100%", "60%", "40%", "20%", "0%"][index]}</b></button>)}</div>
              </div>
              <div className="settlement-table">
                <div className="settlement-table-head"><b>工程 / 组件</b><b>应结算金额</b><b>已结算金额</b><b>整体完成率</b><b>当前阶段</b><b>操作</b></div>
                {[["装修工程", "¥150K", "¥110K", "73%", "审核中"], ["机电工程", "¥80K", "¥55K", "69%", "财务复核"], ["弱电工程", "¥36K", "¥20K", "56%", "支付中"], ["家具工程", "¥30K", "¥16K", "53%", "审核中"]].map((row) => <div key={row[0]}><span>{row[0]}</span><span>{row[1]}</span><span>{row[2]}</span><span>{row[3]}</span><em>{row[4]}</em><button type="button" onClick={() => notify(`${row[0]}详情已打开`)}>查看详情</button></div>)}
              </div>
            </section>
          </div>
        </div>
      </div>
      {notice && <div className="platform-toast" role="status">{notice}</div>}
    </section>
  );
}

function RealProjectImpact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: .28 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`real-project-story ${visible ? "is-visible" : ""}`} id="project-impact" aria-label="真实项目成果">
      <div className="real-project-kicker"><span>REAL PROJECT IN ACTION</span><b>真实项目 · 真实结果</b></div>
      <div className="real-project-layout">
        <figure className="real-project-visual">
          <div className="real-project-photo" role="img" aria-label="某互联网大厂总部中庭艺术装置与建筑空间" style={{ backgroundImage: `linear-gradient(180deg, transparent 60%, rgba(8,14,27,.42)), url("${publicAsset("project-photo.jpg")}")` }} />
          <figcaption><i><Building2 size={27} /></i><span><b>某互联网大厂总部改造项目</b><small>大型改造 · 全周期成本管理</small></span></figcaption>
        </figure>
        <div className="real-project-content">
          <h2>从数字化平台<br />到真实项目结果</h2>
          <div className="project-fact"><i><FileText size={20} /></i><div><span>项目概况</span><h3>某互联网大厂总部改造项目</h3><p>涉及多专业工程、多个供应商协同。项目执行过程中成本持续动态变化，管理链条长、数据量大、变更频繁。</p></div></div>
          <div className="project-fact"><i><UserRound size={20} /></i><div><span>我的角色</span><h3>负责项目成本管理，并参与数字化平台落地与业务流程推进</h3><div className="project-tags"><b>成本管控</b><b>流程数字化</b><b>平台落地</b><b>跨团队协同</b></div></div></div>
          <div className="project-outcomes">
            <article className="project-outcome-primary"><Trophy size={28} /><div><strong>成本优化 12.8%</strong><b>累计节省约 2,400 万元</b><small>通过方案比选、动态成本追踪与过程管控实现</small></div></article>
            <article><ChartNoAxesCombined size={23} /><div><b>全过程在线化</b><small>需求、合同、变更、结算、支付全流程协同</small></div></article>
            <article><Eye size={23} /><div><b>成本状态可视化</b><small>动态成本与执行进度实时更新，风险提前发现</small></div></article>
          </div>
          <blockquote>数字化平台让成本管理从“事后核算”变为“过程管控”，数据驱动决策，真正参与业务。</blockquote>
        </div>
      </div>
    </section>
  );
}

function AiTransition() {
  return (
    <section className="ai-transition" aria-label="从项目数据到 AI 自动判断">
      <div className="ai-transition-copy">
        <span>FROM STRUCTURED DATA TO AUTOMATED DECISIONS</span>
        <h2><span>当数据已经被结构化</span><span>下一步</span><span>是让判断自动发生</span></h2>
      </div>
      <div className="ai-transition-flow">
        <div className="ai-data-chip chip-project" aria-hidden="true"><FileText size={18} /><span>项目数据</span></div>
        <div className="ai-data-chip chip-rule" aria-hidden="true"><ShieldCheck size={18} /><span>规则校验</span></div>
        <div className="ai-data-chip chip-amount" aria-hidden="true"><CircleDollarSign size={18} /><span>金额判断</span></div>
        <i className="ai-flow-line line-one" aria-hidden="true" />
        <i className="ai-flow-line line-two" aria-hidden="true" />
        <i className="ai-flow-line line-three" aria-hidden="true" />
        <a className="ai-core" href="#vibe-coding" aria-label="进入 AI 审核 Vibe Coding 页面">
          <span><Sparkles size={28} /></span><b>AI</b><small>进入 AI 审核</small>
        </a>
      </div>
    </section>
  );
}

const reviewFiles = [
  ["支付申请.pdf", "1.2 MB", FileText],
  ["结算审定单.pdf", "1.8 MB", FileText],
  ["PO合同.pdf", "2.4 MB", FileText],
  ["竣工验收报告.pdf", "1.1 MB", FileText],
  ["系统截图.png", "3.6 MB", ImageIcon],
] as const;

const judgmentSteps = [
  { title: "资料识别", note: "5 / 5 已识别", icon: FileUp, detail: "申请单、发票、结算审定单、送货单与 PO 合同" },
  { title: "编号核验", note: "编号一致", icon: ShieldCheck, detail: "支付申请、结算审定与 PO 合同编号完成交叉核验" },
  { title: "金额判断", note: "未超 PO", icon: CircleDollarSign, detail: "结算金额 ¥1,208,400 / PO 金额 ¥1,280,000" },
  { title: "付款计算", note: "金额匹配", icon: Calculator, detail: "已支付 + 本次应付 + 质保金 = 结算金额" },
] as const;

function VibeCodingStory() {
  const timersRef = useRef<number[]>([]);
  const [started, setStarted] = useState(false);
  const [fileStep, setFileStep] = useState(-1);
  const [thinkingStep, setThinkingStep] = useState(-1);
  const [auditComplete, setAuditComplete] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => () => timersRef.current.forEach((timer) => window.clearTimeout(timer)), []);

  const later = (callback: () => void, delay: number) => {
    const timer = window.setTimeout(callback, delay);
    timersRef.current.push(timer);
  };

  const startAudit = () => {
    if (started) return;
    setStarted(true);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setFileStep(reviewFiles.length - 1);
      setThinkingStep(judgmentSteps.length - 1);
      setAuditComplete(true);
      document.querySelector("#ai-thinking")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    reviewFiles.forEach((_, index) => later(() => setFileStep(index), 650 + index * 720));
    later(() => document.querySelector("#ai-thinking")?.scrollIntoView({ behavior: "smooth" }), 4300);
    [4900, 6500, 8300, 10100].forEach((delay, index) => later(() => setThinkingStep(index), delay));
    later(() => setAuditComplete(true), 12000);
  };

  const copyApproval = () => {
    const text = document.documentElement.lang === "en"
      ? "Payment approved:\n1. 5/5 documents identified; completeness 100%.\n2. Settlement ¥1,208,400 vs PO ¥1,280,000; within PO with ¥71,600 remaining.\n3. Paid ¥870,048 + current payment ¥277,932 + retention ¥60,420 = settlement ¥1,208,400; variance ¥0.\n4. Cross-checks found no anomalies. Proceed to approval."
      : "同意付款：\n1. 已识别 5/5 份资料，完整度 100%；\n2. 结算金额 ¥1,208,400，PO 金额 ¥1,280,000，未超 PO，剩余额度 ¥71,600；\n3. 已支付 ¥870,048 + 本次应付 ¥277,932 + 质保金 ¥60,420 = 结算金额 ¥1,208,400，差额 ¥0；\n4. 编号、金额及资料交叉核验无异常，建议按流程提交审批。";
    void navigator.clipboard?.writeText(text);
    setCopied(true);
    later(() => setCopied(false), 1600);
  };

  return (
    <div className="vibe-coding-story">
      <section className="vibe-screen vibe-upload" id="vibe-coding" aria-label="Vibe Coding 付款审核上传">
        <div className="vibe-copy"><span>VIBE CODING · PO PAYMENT REVIEW AGENT</span><h2>一句话，<br />完成一次付款审核</h2><p>上传付款资料与系统截图，AI 自动完成核验、识别异常，并生成审核清单与审批意见。</p><div className="vibe-benefits"><article><CheckCircle2 /><b>高效准确</b><small>自动核验多项关键信息</small></article><article><ShieldCheck /><b>异常识别</b><small>发现不一致时主动预警</small></article><article><Calculator /><b>标准输出</b><small>生成可直接使用的结果</small></article></div></div>
        <div className="agent-window upload-agent-window">
          <header><i><Bot size={22} /></i><b>PO Payment Review Agent</b><span><em />在线</span></header>
          <div className="agent-chat"><p className="agent-user-message">帮我审核这个 PO 的付款</p><p className="agent-reply"><Bot size={18} />好的，我将对您上传的资料进行审核。请上传以下资料：</p></div>
          <div className="review-files">{reviewFiles.map(([name, size, FileIcon], index) => <article className={fileStep >= index ? "is-ready" : ""} key={name}><i><FileIcon size={25} /></i><b>{name}</b><small>{size}</small><span><Check size={12} /></span></article>)}</div>
          <div className={`audit-start-hint ${started ? "is-hidden" : ""}`} role="note"><span>点击“开始审核”，体验 AI 逐步读取、核验并生成结果</span><b>↓</b></div>
          <button className={`start-audit ${started ? "is-running" : ""}`} type="button" onClick={startAudit}><Sparkles size={18} />{started ? fileStep === reviewFiles.length - 1 ? "资料已识别，正在进入判断" : "正在读取资料…" : "开始审核"}</button>
          <div className="agent-input"><Paperclip size={18} /><span>输入您的指令…</span><Send size={17} /></div>
          <p className="agent-privacy"><ShieldCheck size={14} />您的文件仅用于本次审核，不会被存储或用于训练模型</p>
        </div>
        <HeroVisualStage />
      </section>

      <section className="vibe-screen vibe-thinking" id="ai-thinking" aria-label="AI 正在判断">
        <div className="vibe-copy"><span>VIBE CODING · AI REASONING</span><h2>AI 正在判断</h2><p>读取资料、交叉核验、识别异常，让每一步判断逐渐变得清晰。</p><div className="reasoning-flow"><i><FileText /></i><b>→</b><i><ShieldCheck /></i><b>→</b><i><Scale /></i><b>→</b><i><ListChecks /></i></div></div>
        <div className="agent-window thinking-agent-window">
          <header><b>PO Payment Review Agent</b><span className={auditComplete ? "audit-status is-complete" : started ? "audit-status is-reviewing" : "audit-status"}>{auditComplete ? <Check size={13} /> : started ? <i className="audit-spinner" /> : <em />}<strong>{auditComplete ? "审核通过" : !started ? "等待开始" : thinkingStep < 0 ? "正在读取资料" : `正在${judgmentSteps[thinkingStep].title}`}</strong></span></header>
          <div className="judgment-list">{judgmentSteps.map(({ title, note, icon: StepIcon, detail }, index) => <article className={`${thinkingStep >= index ? "is-lit" : ""} ${thinkingStep === index ? "is-processing" : ""}`} key={title}><span>{index + 1}</span><i><StepIcon size={24} /></i><div><b>{title}</b><small>{detail}</small></div><em>{thinkingStep >= index ? <><Check size={13} />{note}</> : "等待核验"}</em></article>)}</div>
          <a className={`audit-passed ${auditComplete ? "is-visible is-selected" : ""}`} href="#ai-result"><CheckCircle2 size={30} /><span><b>审核通过</b><small>已生成 Checklist 与审批意见</small></span><strong>查看结果 →</strong></a>
        </div>
      </section>

      <section className="vibe-screen vibe-result" id="ai-result" aria-label="AI 审核结果">
        <div className="vibe-copy"><span>VIBE CODING · GENERATED RESULT</span><h2>AI 审核结果</h2><p>审核完成后，自动输出可直接用于审批流程的结果。</p><div className="result-proof"><span><Check />自动生成</span><span><Check />可靠可用</span></div></div>
        <div className="result-board">
          <article className="checklist-card"><header><h3>付款审核 Checklist</h3><span>Generated</span></header><div className="checklist-table"><div><b>检查项</b><b>结果</b><b>说明</b></div>{["资料完整性", "PO金额核验", "接收金额", "付款金额", "质保金核验"].map((item) => <div key={item}><span>{item}</span><i><Check size={18} /></i><small>—</small></div>)}</div><button type="button">查看 Checklist →</button></article>
          <article className="approval-card"><header><h3>审批意见</h3><span>Generated</span></header><div><b>同意付款：</b><p>1. 已识别 5/5 份资料，完整度 100%；</p><p>2. 结算金额 ¥1,208,400，PO 金额 ¥1,280,000，未超 PO，剩余额度 ¥71,600；</p><p>3. 已支付 ¥870,048 + 本次应付 ¥277,932 + 质保金 ¥60,420 = ¥1,208,400，差额 ¥0；</p><p>4. 编号、金额及资料交叉核验无异常，建议按流程提交审批。</p><button type="button" onClick={copyApproval}>{copied ? "已复制" : "Copy"}</button></div></article>
          <div className="result-complete"><CheckCircle2 size={42} /><span><b>审核已完成</b><small>结果可直接用于审批流程。</small></span></div>
        </div>
      </section>
    </div>
  );
}

const closingItems = [
  { title: "理解业务", note: "找到真正的问题", href: "#complexity" },
  { title: "重构流程", note: "建立可执行的结构", href: "#process" },
  { title: "数据判断", note: "让过程变得可见", href: "#dashboard" },
  { title: "产品落地", note: "把方法变成工具", href: "#platform" },
  { title: "AI 延伸", note: "让部分判断自动发生", href: "#vibe-coding" },
] as const;

function WeChatBrandIcon({ size = 19 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" aria-hidden="true">
    <path d="M10.7 14.2c0-3.1-2.9-5.6-6.5-5.6S1.2 11.1 1.2 14.2c0 1.8 1 3.4 2.6 4.4l-.8 2.1 2.4-1.2c.6.2 1.2.3 1.9.3 1 0 1.9-.2 2.7-.5" />
    <path d="M13.7 5.2c-3.7 0-6.7 2.5-6.7 5.7s3 5.7 6.7 5.7c.7 0 1.4-.1 2-.3l2.4 1.2-.7-2.1c1.8-1 3-2.6 3-4.5 0-3.2-3-5.7-6.7-5.7Z" />
    <circle cx="5.2" cy="14" r=".65" fill="currentColor" stroke="none" />
    <circle cx="8" cy="14" r=".65" fill="currentColor" stroke="none" />
    <circle cx="11.5" cy="10.9" r=".65" fill="currentColor" stroke="none" />
    <circle cx="15.2" cy="10.9" r=".65" fill="currentColor" stroke="none" />
  </svg>;
}

function GitHubBrandIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>;
}

function ClosingSection() {
  const [qrOpen, setQrOpen] = useState(false);

  return (
    <section className="closing-story" id="closing" aria-label="案例总结">
      <span className="closing-kicker">CLOSING</span>
      <h2>从业务问题出发<br />到可运行的解决方案</h2>
      <div className="closing-grid">{closingItems.map((item, index) => <a className="closing-item" href={item.href} key={item.title}><strong className="closing-number">0{index + 1}</strong><span><b>{item.title}</b><small>{item.note}</small></span><em>↗</em></a>)}</div>
      <div className="closing-contact-actions" aria-label="联系入口">
        <a className="contact-icon contact-email" href="mailto:Luna777feng@outlook.com" aria-label="发送邮件" title="Luna777feng@outlook.com" data-tooltip="Luna777feng@outlook.com"><Mail size={15} /></a>
        <button className="contact-icon" type="button" onClick={() => setQrOpen(true)} aria-label="打开微信二维码" title="微信"><WeChatBrandIcon /></button>
        <a className="contact-icon" href="https://github.com/seeLn-La" target="_blank" rel="noreferrer" aria-label="打开 GitHub" title="GitHub"><GitHubBrandIcon /></a>
      </div>
      {qrOpen && <div className="contact-qr-modal">
        <button className="contact-qr-backdrop" type="button" onClick={() => setQrOpen(false)} aria-label="关闭二维码弹窗" />
        <div className="contact-qr-dialog" role="dialog" aria-modal="true" aria-label="微信二维码">
          <button className="contact-qr-close" type="button" onClick={() => setQrOpen(false)} aria-label="关闭二维码">×</button>
          <img src={publicAsset("wechat-qr.jpg")} alt="微信二维码，请扫码添加微信" />
          <span>扫码添加微信</span>
        </div>
      </div>}
    </section>
  );
}

function BusinessReorganization() {
  const sectionRef = useRef<HTMLElement>(null);
  const [organized, setOrganized] = useState(false);
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let organizeTimer = 0;
    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const shouldOrganize = rect.top <= window.innerHeight * .42;
      if (shouldOrganize) {
        if (reduced) setOrganized(true);
        else if (!organizeTimer) organizeTimer = window.setTimeout(() => {
          organizeTimer = 0;
          if (node.getBoundingClientRect().top <= window.innerHeight * .42) setOrganized(true);
        }, 680);
      } else {
        window.clearTimeout(organizeTimer);
        organizeTimer = 0;
        setOrganized(false);
      }
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(frame);
      window.clearTimeout(organizeTimer);
    };
  }, []);
  return (
    <section ref={sectionRef} className={`business-reorganization ${organized ? "is-complete" : ""}`} aria-label="业务从分散到结构化">
      <ComplexityNetwork organized={organized} />
    </section>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("zh");
  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    if (savedLanguage === "en") window.setTimeout(() => setLanguage("en"), 0);
  }, []);
  usePageLanguage(language);

  useEffect(() => {
    const shouldLock = window.scrollY < 4;
    document.body.classList.toggle("home-is-locked", shouldLock);
    return () => document.body.classList.remove("home-is-locked");
  }, []);

  const enterCase = () => {
    document.body.classList.remove("home-is-locked");
    window.setTimeout(() => document.querySelector("#complexity")?.scrollIntoView({ behavior: "smooth", block: "start" }), 20);
  };

  const toggleLanguage = () => {
    setLanguage((current) => {
      const next = current === "zh" ? "en" : "zh";
      window.localStorage.setItem("portfolio-language", next);
      return next;
    });
  };

  return (
    <main>
      <SiteNav />
      <LanguageToggle language={language} onToggle={toggleLanguage} />

      <section className="hero" id="top">
        <h1>把复杂业务问题<br />转化为数据驱动的<br />产品与决策工具</h1>
        <div className="hero-bottom">
          <p>从成本、结算与业务流程中的真实问题出发，<br />通过数据分析、流程设计与数字化工具，<br />提升业务透明度、效率与决策质量。</p>
          <div className="hero-actions"><button type="button" onClick={enterCase}><span>查看案例</span><i>→</i></button></div>
        </div>
      </section>

      <BusinessComplexity />
      <PlatformIntro />
      <ProcessStory />
      <BusinessReorganization />
      <DigitalPlatformUI />
      <DashboardUI />
      <RealProjectImpact />
      <AiTransition />
      <VibeCodingStory />
      <ClosingSection />
    </main>
  );
}
