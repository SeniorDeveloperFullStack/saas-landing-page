import Link from "next/link";
import { DashboardPreview } from "@/app/_components/dashboard-preview";
import { DemoForm } from "@/app/_components/demo-form";
import { FaqAccordion } from "@/app/_components/faq-accordion";
import { Navbar } from "@/app/_components/navbar";
import { PricingSection } from "@/app/_components/pricing-section";
import { RoiCalculator } from "@/app/_components/roi-calculator";
import { SectionHeading } from "@/app/_components/section-heading";
import { SiteFooter } from "@/app/_components/site-footer";
import { UseCaseTabs } from "@/app/_components/use-case-tabs";
import {
  customerMetrics,
  features,
  heroMetrics,
  integrations,
  securityItems,
  testimonials,
  trustedBy,
  workflowSteps,
} from "@/app/_data/marketing";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <FeatureSection />
      <WorkflowSection />
      <UseCasesSection />
      <IntegrationsSection />
      <SecuritySection />
      <PricingSection />
      <RoiCalculator />
      <FaqAccordion />
      <DemoForm />
      <SiteFooter />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.28),_transparent_34%),linear-gradient(135deg,_#020617_0%,_#0f172a_48%,_#111827_100%)]" />
      <div className="absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-32 lg:pt-24">
        <div>
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-100 shadow-2xl shadow-cyan-950/40 backdrop-blur">
            Customer operations for modern SaaS teams
          </div>
          <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Turn every customer signal into your next growth move.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            PulseDesk is a production-style SaaS marketing site concept for teams
            that want cleaner handoffs, smarter lifecycle plays, and executive-ready
            revenue visibility.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/pricing"
              className="rounded-full bg-cyan-400 px-6 py-3 text-center text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-300"
            >
              Start free
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-bold text-white transition hover:border-white/40"
            >
              Book demo
            </Link>
          </div>
          <div className="mt-10 grid max-w-2xl gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-2xl font-semibold text-white">{metric.value}</p>
                <p className="mt-1 text-sm text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <DashboardPreview />
      </div>
    </section>
  );
}

function SocialProofSection() {
  return (
    <section className="bg-white px-6 py-16 text-slate-950 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
          Trusted by ambitious software teams
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {trustedBy.map((logo) => (
            <div
              key={logo}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center font-semibold text-slate-500"
            >
              {logo}
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {customerMetrics.map((metric) => (
            <div key={metric.label} className="rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-3xl font-semibold">{metric.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <blockquote className="text-lg leading-8 text-slate-700">
                <span aria-hidden="true">&quot;</span>
                {testimonial.quote}
                <span aria-hidden="true">&quot;</span>
              </blockquote>
              <figcaption className="mt-8">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="mt-1 text-sm text-slate-500">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  return (
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
              <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section id="workflow" className="bg-white px-6 py-24 text-slate-950 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Workflow"
          title="From scattered signals to repeatable revenue motion."
          description="PulseDesk is presented as a clean operating system for customer teams, with crisp sections that show product value quickly."
          align="left"
        />
        <div className="grid gap-5">
          {workflowSteps.map((step, index) => (
            <div
              key={step.title}
              className="flex gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-6"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cyan-400 font-bold text-slate-950">
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section className="bg-slate-50 px-6 py-24 text-slate-950 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Use cases"
          title="Positioned for the teams that own customer revenue."
          description="Tabs keep the section compact while showing how the same platform story adapts across buyer personas."
        />
        <div className="mt-14">
          <UseCaseTabs />
        </div>
      </div>
    </section>
  );
}

function IntegrationsSection() {
  return (
    <section id="integrations" className="bg-white px-6 py-24 text-slate-950 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <SectionHeading
          eyebrow="Integrations"
          title="Designed for the stack your customers already use."
          description="Mock integrations make the product feel implementation-ready without calling external APIs."
          align="left"
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {integrations.map((integration) => (
            <div
              key={integration}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center font-semibold text-slate-600 shadow-sm"
            >
              {integration}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SecuritySection() {
  return (
    <section className="bg-slate-950 px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-slate-950 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Security"
          title="Enterprise cues without enterprise bloat."
          description="A production-style marketing page should make reliability, roles, and trust visible even when the implementation is mocked."
          tone="dark"
          align="left"
        />
        <div className="grid gap-4">
          {securityItems.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="font-medium text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
