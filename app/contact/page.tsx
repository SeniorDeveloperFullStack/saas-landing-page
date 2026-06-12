import type { Metadata } from "next";
import { DemoForm } from "@/app/_components/demo-form";
import { Navbar } from "@/app/_components/navbar";
import { PageHero } from "@/app/_components/page-hero";
import { SectionHeading } from "@/app/_components/section-heading";
import { SiteFooter } from "@/app/_components/site-footer";
import { contactReasons } from "@/app/_data/marketing";

export const metadata: Metadata = {
  title: "Contact | PulseDesk",
  description:
    "Request a mock PulseDesk demo or review the portfolio product concept through a frontend-only contact page with no backend submission.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <PageHero
        eyebrow="Contact"
        title="Request a PulseDesk demo walkthrough."
        description="This page keeps the interaction frontend-only while showing how a real SaaS marketing site would capture high-intent leads."
      />

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading
            eyebrow="What to discuss"
            title="Use the demo request to frame a product, UX, or architecture review."
            description="Contact content is mock-only and intentionally avoids email delivery, CRM sync, scheduling APIs, or persistence."
            align="left"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {contactReasons.map((reason) => (
              <div key={reason} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 font-medium text-slate-700">
                {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      <DemoForm />
      <SiteFooter />
    </main>
  );
}
