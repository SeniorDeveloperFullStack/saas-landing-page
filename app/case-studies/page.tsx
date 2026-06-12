import type { Metadata } from "next";
import { Navbar } from "@/app/_components/navbar";
import { PageHero } from "@/app/_components/page-hero";
import { SectionHeading } from "@/app/_components/section-heading";
import { SiteFooter } from "@/app/_components/site-footer";
import { caseStudies, customerMetrics, testimonials, trustedBy } from "@/app/_data/marketing";

export const metadata: Metadata = {
  title: "Case Studies | PulseDesk",
  description:
    "Read mock PulseDesk customer stories showing renewal preparation, expansion visibility, onboarding operations, and customer success outcomes.",
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <PageHero
        eyebrow="Case studies"
        title="Proof stories for a customer operations platform buyers can believe."
        description="These mock case studies add enterprise marketing depth without claiming real customers, integrations, or production data."
      />

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
            Featured mock customers
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {trustedBy.map((logo) => (
              <div key={logo} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center font-semibold text-slate-500">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Stories"
            title="Three realistic outcomes for portfolio review."
            description="Each story uses believable SaaS language while staying explicitly mock-only."
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.company} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold text-cyan-600">{study.segment}</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight">{study.company}</h2>
                <p className="mt-4 text-lg font-medium text-slate-900">{study.title}</p>
                <p className="mt-4 leading-7 text-slate-600">{study.summary}</p>
                <p className="mt-8 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-cyan-200">
                  {study.outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {customerMetrics.map((metric) => (
            <div key={metric.label} className="rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-3xl font-semibold">{metric.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Testimonials"
            title="Social proof that supports the product narrative."
            description="Mock quotes help the marketing system feel complete without relying on external customer data."
            tone="dark"
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="rounded-3xl border border-white/10 bg-white/[0.06] p-8">
                <blockquote className="text-lg leading-8 text-slate-200">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <figcaption className="mt-8">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-slate-400">{testimonial.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
