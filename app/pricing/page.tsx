import type { Metadata } from "next";
import { FaqAccordion } from "@/app/_components/faq-accordion";
import { Navbar } from "@/app/_components/navbar";
import { PageHero } from "@/app/_components/page-hero";
import { PricingSection } from "@/app/_components/pricing-section";
import { RoiCalculator } from "@/app/_components/roi-calculator";
import { SiteFooter } from "@/app/_components/site-footer";

export const metadata: Metadata = {
  title: "Pricing | PulseDesk",
  description:
    "Review mock PulseDesk pricing plans, packaging, ROI estimates, and frequently asked questions for a production-style SaaS marketing site.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <PageHero
        eyebrow="Pricing"
        title="Clear packaging for every stage of customer operations maturity."
        description="Mock pricing keeps the portfolio project conversion-focused while avoiding payment processing, billing integrations, or account provisioning."
      />
      <PricingSection />
      <RoiCalculator />
      <FaqAccordion />
      <SiteFooter />
    </main>
  );
}
