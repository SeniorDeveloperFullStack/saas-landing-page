import type { Metadata } from "next";
import { Navbar } from "@/app/_components/navbar";
import { PageHero } from "@/app/_components/page-hero";
import { SectionHeading } from "@/app/_components/section-heading";
import { SiteFooter } from "@/app/_components/site-footer";
import { teamValues, workflowSteps } from "@/app/_data/marketing";

export const metadata: Metadata = {
  title: "About | PulseDesk",
  description:
    "Learn about the mock PulseDesk product vision, portfolio positioning, and customer operations principles behind the SaaS marketing website.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <PageHero
        eyebrow="About PulseDesk"
        title="A portfolio SaaS concept built around real operator problems."
        description="PulseDesk is intentionally mock-only, but the positioning, information architecture, and UI patterns are shaped like a product a serious SaaS team could build."
      />

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Product story"
            title="The idea: customer teams need one place to decide what matters next."
            description="Most SaaS teams already have customer data. PulseDesk frames the missing layer: a calm operating workspace that turns signals into action."
            align="left"
          />
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Mock roadmap
            </p>
            <div className="mt-8 grid gap-5">
              {workflowSteps.map((step, index) => (
                <div key={step.title} className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cyan-400 font-bold text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h2 className="font-semibold">{step.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Principles"
            title="Built to show senior product and frontend judgment."
            description="The About page turns portfolio implementation choices into a clear product narrative."
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {teamValues.map((value) => (
              <article key={value.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-xl font-semibold">{value.title}</h2>
                <p className="mt-4 leading-7 text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Portfolio note
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            No backend yet, but the frontend is ready for one.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            The current project deliberately avoids authentication, databases, payments, and
            external APIs. The component and data boundaries leave room for those systems to be
            added later without rewriting the marketing experience.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
