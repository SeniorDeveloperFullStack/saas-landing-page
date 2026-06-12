export const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const trustedBy = [
  "Northstar",
  "Quanta",
  "Horizon",
  "Capsule",
  "Vertex",
  "AtlasOps",
];

export const heroMetrics = [
  { value: "42%", label: "faster handoffs" },
  { value: "3.8x", label: "more account visibility" },
  { value: "99.9%", label: "mock platform uptime" },
];

export const dashboardCards = [
  { label: "Expansion", value: 64, detail: "$480K influenced" },
  { label: "At risk", value: 12, detail: "18 accounts" },
  { label: "Onboarding", value: 28, detail: "SLA protected" },
  { label: "Renewals", value: 91, detail: "next 90 days" },
];

export const customerMetrics = [
  { value: "$2.4M", label: "pipeline protected by health plays" },
  { value: "18 hrs", label: "saved per team each week" },
  { value: "12K+", label: "mock customer events organized" },
];

export const testimonials = [
  {
    quote:
      "PulseDesk gave our revenue team a calm, shared source of truth. We finally run the week from the same page.",
    name: "Maya Chen",
    role: "VP Revenue, Northstar",
  },
  {
    quote:
      "The workflows make customer risk visible before it becomes a fire drill. It feels built for operators.",
    name: "Daniel Brooks",
    role: "Founder, Capsule",
  },
  {
    quote:
      "Our leadership reviews got cleaner overnight. The dashboard story is exactly what buyers expect.",
    name: "Avery Stone",
    role: "COO, Horizon",
  },
];

export const features = [
  {
    title: "Unified customer workspace",
    description:
      "Bring pipeline, onboarding, health signals, renewal moments, and expansion notes into one operating view.",
  },
  {
    title: "Revenue intelligence",
    description:
      "Prioritize accounts with intent, forecast gaps, and risk signals before the quarter starts drifting.",
  },
  {
    title: "Lifecycle automation",
    description:
      "Launch handoff, onboarding, renewal, and save plays without creating busywork for customer teams.",
  },
  {
    title: "Executive reporting",
    description:
      "Turn account activity into board-ready dashboards that help every team trust the same number.",
  },
  {
    title: "Role-based workspaces",
    description:
      "Shape views for founders, sales, success, implementation, and finance without duplicating process.",
  },
  {
    title: "Implementation-ready data model",
    description:
      "Mocked around CRM, billing, support, and product analytics concepts so a backend can be added later.",
  },
];

export const workflowSteps = [
  {
    title: "Connect every revenue signal",
    description:
      "Model CRM, product, support, and billing inputs in a single customer timeline.",
  },
  {
    title: "Score account momentum",
    description:
      "Surface health, engagement, and expansion context for the teams that need it.",
  },
  {
    title: "Trigger the right play",
    description:
      "Route lifecycle actions to sales, success, and onboarding owners with clear next steps.",
  },
  {
    title: "Report outcomes",
    description:
      "Measure saved revenue, adoption, cycle time, and executive-ready trends.",
  },
];

export const useCases = [
  {
    label: "B2B SaaS",
    title: "Protect renewals and spot expansion before pipeline reviews.",
    points: [
      "Expansion intent by account tier",
      "Renewal readiness scorecards",
      "Executive-ready customer health",
    ],
  },
  {
    label: "Customer success",
    title: "Give CSMs a focused book of business command center.",
    points: [
      "Risk alerts by lifecycle stage",
      "Onboarding SLA visibility",
      "Playbooks for proactive outreach",
    ],
  },
  {
    label: "Revenue ops",
    title: "Align sales, success, and finance around one operating rhythm.",
    points: [
      "Forecast confidence by segment",
      "Clean handoff workflows",
      "Repeatable board metrics",
    ],
  },
];

export const integrations = [
  "Salesforce",
  "HubSpot",
  "Stripe",
  "Segment",
  "Zendesk",
  "Intercom",
  "Slack",
  "Snowflake",
];

export const securityItems = [
  "SAML SSO and SCIM-ready account structure",
  "Audit log concepts for workspace activity",
  "Granular roles for sales, success, finance, and leadership",
  "Regional data controls represented in product copy",
];

export const pricingPlans = [
  {
    name: "Launch",
    monthly: 29,
    yearly: 290,
    description: "For founders validating a sharper customer workflow.",
    features: ["3 workspaces", "Core dashboards", "Email support", "Basic playbooks"],
    cta: "Start free",
  },
  {
    name: "Scale",
    monthly: 79,
    yearly: 790,
    description: "For growing teams aligning revenue and customer success.",
    features: [
      "Unlimited workspaces",
      "Automation builder",
      "Priority support",
      "Advanced reporting",
    ],
    cta: "Start free",
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthly: null,
    yearly: null,
    description: "For organizations with advanced controls and reporting.",
    features: ["Custom roles", "Audit exports", "Dedicated success", "Security review"],
    cta: "Book demo",
  },
];

export const comparisonRows = [
  { feature: "Customer dashboards", launch: "Core", scale: "Advanced", enterprise: "Custom" },
  { feature: "Workflow automations", launch: "5", scale: "Unlimited", enterprise: "Unlimited" },
  { feature: "Role controls", launch: "Basic", scale: "Team", enterprise: "Custom" },
  { feature: "Support", launch: "Email", scale: "Priority", enterprise: "Dedicated" },
];

export const faqs = [
  {
    question: "Is this connected to a real backend?",
    answer:
      "No. This portfolio build uses mock content and client-side UI state only, so it stays focused on frontend architecture and presentation.",
  },
  {
    question: "Can this structure support a real product later?",
    answer:
      "Yes. Repeated content is data-driven, stateful widgets are isolated, and the page is split into reusable sections that can be wired to real services later.",
  },
  {
    question: "What makes this production-style?",
    answer:
      "The site uses App Router, typed data, responsive components, semantic sections, accessible controls, polished spacing, and clear conversion paths.",
  },
  {
    question: "What kind of SaaS is PulseDesk?",
    answer:
      "PulseDesk is a mock customer operations platform for revenue, onboarding, and customer success teams.",
  },
];

export const featurePillars = [
  {
    eyebrow: "Signal layer",
    title: "Unify every revenue and customer touchpoint.",
    description:
      "PulseDesk models account activity from CRM, billing, support, product analytics, and success notes in one timeline.",
    bullets: ["Account health scoring", "Lifecycle stage mapping", "Risk and intent signals"],
  },
  {
    eyebrow: "Workflow layer",
    title: "Turn messy handoffs into repeatable plays.",
    description:
      "Teams can route renewal, onboarding, save, and expansion motions with clear ownership and measurable outcomes.",
    bullets: ["Playbook templates", "Owner routing", "SLA-friendly task views"],
  },
  {
    eyebrow: "Reporting layer",
    title: "Make leadership updates feel calm and precise.",
    description:
      "Executive views connect customer motion to protected revenue, expansion opportunity, adoption, and operational capacity.",
    bullets: ["Board-ready metrics", "Segment reporting", "Forecast confidence cues"],
  },
];

export const caseStudies = [
  {
    company: "Northstar",
    segment: "Mid-market B2B SaaS",
    title: "Created one renewal command center for sales and success.",
    outcome: "42% faster renewal preparation",
    summary:
      "Northstar used the PulseDesk concept to align account notes, risk indicators, and executive summaries before weekly pipeline reviews.",
  },
  {
    company: "Capsule",
    segment: "Product-led SaaS",
    title: "Routed expansion intent before high-fit customers went quiet.",
    outcome: "$480K mock expansion surfaced",
    summary:
      "Capsule mapped product usage and support sentiment into a simple expansion queue for revenue leaders.",
  },
  {
    company: "Horizon",
    segment: "Enterprise software",
    title: "Standardized onboarding visibility across implementation pods.",
    outcome: "18 hours saved weekly",
    summary:
      "Horizon gave onboarding leaders a single view of delayed milestones, stakeholder gaps, and launch readiness.",
  },
];

export const teamValues = [
  {
    title: "Operator-first design",
    description:
      "Every section is written around the realities of customer teams: handoffs, renewals, risk, expansion, and reporting.",
  },
  {
    title: "Implementation awareness",
    description:
      "The frontend stays mock-only, but the content and component boundaries anticipate future APIs and real data models.",
  },
  {
    title: "Calm executive clarity",
    description:
      "PulseDesk is positioned as a product that makes messy revenue motion easier to explain, prioritize, and trust.",
  },
];

export const contactReasons = [
  "Review a mock implementation plan",
  "Walk through the customer operations model",
  "Discuss frontend architecture and extension points",
  "Map a future backend, auth, and payment roadmap",
];
