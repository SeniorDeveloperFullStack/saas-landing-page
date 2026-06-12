import type { Metadata } from "next";
import { DashboardPreview } from "@/app/_components/dashboard-preview";
import { Navbar } from "@/app/_components/navbar";
import { PageHero } from "@/app/_components/page-hero";
import { SectionHeading } from "@/app/_components/section-heading";
import { SiteFooter } from "@/app/_components/site-footer";
import { UseCaseTabs } from "@/app/_components/use-case-tabs";
import { featurePillars, features, integrations, securityItems } from "@/app/_data/marketing";

export const metadata: Metadata = {
  title: "Features | PulseDesk",
  description:
    "Explore PulseDesk feature concepts for customer operations, lifecycle automation, revenue intelligence, integrations, and enterprise-ready controls.",
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <PageHero
        eyebrow="Features"
        title="Customer operations software shaped for serious SaaS motion."
        description="A deeper look at the mock PulseDesk product system: customer intelligence, workflow automation, reporting, integrations, and trust signals."
      />

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeading
            eyebrow="Product overview"
            title="A clean operating layer for revenue, onboarding, and success."
            description="The feature architecture is written like a real SaaS product while staying mock-only and frontend-focused."
            align="left"
          />
          <DashboardPreview />
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Core platform"
            title="Six capabilities that make the product story credible."
            description="Repeated content is driven from shared marketing data so sections can scale without rewriting component structure."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-8">
                <h2 className="text-xl font-semibold">{feature.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {featurePillars.map((pillar) => (
              <article key={pillar.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
                  {pillar.eyebrow}
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight">{pillar.title}</h2>
                <p className="mt-4 leading-7 text-slate-600">{pillar.description}</p>
                <ul className="mt-6 space-y-3 text-sm font-medium text-slate-700">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Use cases"
            title="One platform story, multiple buyer lenses."
            description="Interactive tabs reuse the existing client component from the homepage."
          />
          <div className="mt-14">
            <UseCaseTabs />
          </div>
        </div>
      </section>

      <section className="grid gap-0 lg:grid-cols-2">
        <div className="bg-slate-950 px-6 py-20 text-white lg:px-16">
          <h2 className="text-3xl font-semibold tracking-tight">Integration-ready positioning</h2>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {integrations.map((integration) => (
              <div key={integration} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-center">
                {integration}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-cyan-400 px-6 py-20 text-slate-950 lg:px-16">
          <h2 className="text-3xl font-semibold tracking-tight">Security and reliability cues</h2>
          <ul className="mt-8 space-y-4">
            {securityItems.map((item) => (
              <li key={item} className="rounded-2xl bg-white/70 p-4 font-medium">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
