const trustedBy = ["Northstar", "Quanta", "Horizon", "Capsule", "Vertex"];

const features = [
  {
    title: "Unified customer workspace",
    description:
      "Bring pipeline, onboarding, health signals, and expansion workflows into one fast operating layer.",
  },
  {
    title: "Revenue intelligence",
    description:
      "Spot risk, forecast growth, and prioritize the accounts that need attention before the quarter moves.",
  },
  {
    title: "Workflow automation",
    description:
      "Launch polished playbooks for handoffs, renewals, and lifecycle campaigns without adding busywork.",
  },
  {
    title: "Executive reporting",
    description:
      "Turn customer activity into board-ready dashboards that make every team confident in the numbers.",
  },
  {
    title: "Enterprise-grade controls",
    description:
      "Mock-ready permission models, audit trails, and workspace settings shaped for serious SaaS teams.",
  },
  {
    title: "Integration friendly",
    description:
      "Designed to pair with your CRM, support tools, product analytics, and billing stack when the backend arrives.",
  },
];

const steps = [
  "Connect your core SaaS motions",
  "Map lifecycle signals into one view",
  "Automate plays for every customer stage",
];

const plans = [
  {
    name: "Launch",
    price: "$29",
    description: "For founders validating a sharper customer workflow.",
    features: ["3 workspaces", "Core dashboards", "Email support"],
  },
  {
    name: "Scale",
    price: "$79",
    description: "For growing teams aligning revenue and success.",
    features: ["Unlimited workspaces", "Automation builder", "Priority support"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with advanced controls and reporting.",
    features: ["Custom roles", "Audit-ready exports", "Dedicated success"],
  },
];

const testimonials = [
  {
    quote:
      "PulseDesk gave our revenue team a calm, shared source of truth. We finally run the week from the same page.",
    name: "Maya Chen",
    role: "VP Revenue, Northstar",
  },
  {
    quote:
      "The product feels like it was designed by people who understand how SaaS teams actually operate.",
    name: "Daniel Brooks",
    role: "Founder, Capsule",
  },
  {
    quote:
      "Our leadership reviews got cleaner overnight. The mock dashboards alone tell a stronger product story.",
    name: "Avery Stone",
    role: "COO, Horizon",
  },
];

const faqs = [
  {
    question: "Is this connected to a real backend?",
    answer:
      "No. This portfolio build uses polished mock content only, so it stays focused on frontend architecture and presentation.",
  },
  {
    question: "Can the sections be reused later?",
    answer:
      "Yes. The content is organized in simple typed-friendly arrays and rendered through repeatable section patterns.",
  },
  {
    question: "Is it responsive?",
    answer:
      "Yes. The layout is built with Tailwind responsive utilities for mobile, tablet, and desktop breakpoints.",
  },
  {
    question: "What kind of SaaS is PulseDesk?",
    answer:
      "PulseDesk is a mock customer operations platform for revenue, onboarding, and customer success teams.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  description: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600">
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-semibold tracking-tight sm:text-4xl ${
          isDark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-lg leading-8 ${
          isDark ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.26),_transparent_34%),linear-gradient(135deg,_#020617_0%,_#0f172a_48%,_#111827_100%)]" />
        <div className="absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="PulseDesk home">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-400 font-bold text-slate-950">
              P
            </span>
            <span className="text-lg font-semibold tracking-tight">PulseDesk</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#pricing" className="transition hover:text-white">
              Pricing
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </div>
          <a
            href="#pricing"
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:border-cyan-300 hover:text-cyan-100"
          >
            View plans
          </a>
        </nav>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-32 lg:pt-20">
          <div>
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-100 shadow-2xl shadow-cyan-950/40 backdrop-blur">
              Customer operations for modern SaaS teams
            </div>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Turn every customer signal into your next growth move.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              PulseDesk is a mock SaaS platform concept that helps teams unify
              account data, automate lifecycle plays, and report on revenue
              health with confidence.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="rounded-full bg-cyan-400 px-6 py-3 text-center text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-300"
              >
                Start free trial
              </a>
              <a
                href="#features"
                className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-bold text-white transition hover:border-white/40"
              >
                Explore features
              </a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {[
                ["42%", "faster handoffs"],
                ["3.8x", "more visibility"],
                ["99.9%", "mock uptime"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-2xl font-semibold text-white">{value}</p>
                  <p className="mt-1 text-sm text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-cyan-950/50 backdrop-blur">
            <div className="rounded-[1.5rem] bg-slate-900 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-slate-400">Revenue health</p>
                  <p className="mt-1 text-2xl font-semibold">$2.4M ARR</p>
                </div>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-300">
                  +18.4%
                </span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {["Expansion", "At risk", "Onboarding", "Renewals"].map(
                  (label, index) => (
                    <div key={label} className="rounded-2xl bg-white/[0.04] p-4">
                      <p className="text-sm text-slate-400">{label}</p>
                      <p className="mt-3 text-3xl font-semibold">
                        {[64, 12, 28, 91][index]}%
                      </p>
                      <div className="mt-4 h-2 rounded-full bg-slate-800">
                        <div
                          className="h-2 rounded-full bg-cyan-400"
                          style={{ width: `${[64, 12, 28, 91][index]}%` }}
                        />
                      </div>
                    </div>
                  ),
                )}
              </div>
              <div className="mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
                <p className="text-sm font-semibold text-cyan-100">
                  Suggested play
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Trigger executive check-ins for 14 accounts showing expansion
                  intent and high product engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
            Trusted by ambitious software teams
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {trustedBy.map((logo) => (
              <div
                key={logo}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center font-semibold text-slate-500"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="bg-slate-50 px-6 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Features"
            title="Everything your go-to-market team needs to move in sync."
            description="A refined frontend experience for a serious SaaS portfolio piece, built around believable customer operations workflows."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-sm font-bold text-cyan-300">
                  0{index + 1}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600">
              How it works
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              From scattered signals to repeatable revenue motion.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              PulseDesk is presented as a clean operating system for customer
              teams, with crisp sections that show product value quickly.
            </p>
          </div>
          <div className="grid gap-5">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cyan-400 font-bold text-slate-950">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{step}</h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    Configure the workspace, route the right insights, and give
                    each team a clear next action.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-slate-950 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Pricing"
            title="Simple plans for every stage of growth."
            description="Mock pricing designed to feel realistic for a SaaS portfolio landing page."
            tone="dark"
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-3xl p-8 ${
                  plan.highlighted
                    ? "bg-cyan-400 text-slate-950 shadow-2xl shadow-cyan-900/30"
                    : "border border-white/10 bg-white/[0.06] text-white"
                }`}
              >
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p
                  className={`mt-3 leading-7 ${
                    plan.highlighted ? "text-slate-800" : "text-slate-300"
                  }`}
                >
                  {plan.description}
                </p>
                <p className="mt-8 text-4xl font-semibold">
                  {plan.price}
                  {plan.price !== "Custom" && (
                    <span className="text-base font-medium">/mo</span>
                  )}
                </p>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          plan.highlighted ? "bg-slate-950" : "bg-cyan-300"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`mt-8 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-bold ${
                    plan.highlighted
                      ? "bg-slate-950 text-white hover:bg-slate-800"
                      : "bg-white text-slate-950 hover:bg-slate-200"
                  }`}
                >
                  Get started
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Testimonials"
            title="Built to sound like a product customers would remember."
            description="Realistic social proof helps the landing page feel complete without requiring real customer data."
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <blockquote className="text-lg leading-8 text-slate-700">
                  "{testimonial.quote}"
                </blockquote>
                <figcaption className="mt-8">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    {testimonial.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white px-6 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions a reviewer might ask."
            description="Clear expectations for a frontend-only portfolio implementation."
          />
          <div className="mt-14 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-slate-50">
            {faqs.map((faq) => (
              <div key={faq.question} className="p-6 sm:p-8">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-8 text-center text-slate-950 shadow-2xl sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600">
            Ready to launch
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Give your portfolio a SaaS page that feels investor-ready.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            A modern, responsive landing page with the sections recruiters and
            clients expect from a polished full-stack portfolio project.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Choose a plan
            </a>
            <a
              href="#features"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:border-slate-950"
            >
              Review features
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950 px-6 py-10 text-slate-400 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">PulseDesk</p>
            <p className="mt-2 text-sm">Mock SaaS landing page portfolio project.</p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#pricing" className="transition hover:text-white">
              Pricing
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
