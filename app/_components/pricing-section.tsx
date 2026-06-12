"use client";

import Link from "next/link";
import { useState } from "react";
import { comparisonRows, pricingPlans } from "@/app/_data/marketing";
import { SectionHeading } from "@/app/_components/section-heading";

export function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="bg-slate-950 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Pricing"
            title="Simple plans for every stage of growth."
            description="Mock pricing designed to feel realistic for a SaaS portfolio landing page, with a yearly discount path and clean comparison."
            tone="dark"
            align="left"
          />

          <div
            className="inline-flex rounded-full border border-white/10 bg-white/5 p-1"
            aria-label="Billing period"
          >
            {(["monthly", "yearly"] as const).map((option) => (
              <button
                key={option}
                type="button"
                className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition ${
                  billing === option ? "bg-cyan-400 text-slate-950" : "text-slate-300"
                }`}
                aria-pressed={billing === option}
                onClick={() => setBilling(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => {
            const price = billing === "monthly" ? plan.monthly : plan.yearly;

            return (
              <article
                key={plan.name}
                className={`rounded-3xl p-8 ${
                  plan.highlighted
                    ? "bg-cyan-400 text-slate-950 shadow-2xl shadow-cyan-900/30"
                    : "border border-white/10 bg-white/[0.06] text-white"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  {plan.highlighted ? (
                    <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      Popular
                    </span>
                  ) : null}
                </div>
                <p
                  className={`mt-3 leading-7 ${
                    plan.highlighted ? "text-slate-800" : "text-slate-300"
                  }`}
                >
                  {plan.description}
                </p>
                <p className="mt-8 text-4xl font-semibold">
                  {price === null ? "Custom" : `$${price}`}
                  {price !== null ? (
                    <span className="text-base font-medium">
                      /{billing === "monthly" ? "mo" : "yr"}
                    </span>
                  ) : null}
                </p>
                {billing === "yearly" && price !== null ? (
                  <p
                    className={`mt-2 text-sm ${
                      plan.highlighted ? "text-slate-700" : "text-cyan-200"
                    }`}
                  >
                    Two months included in annual packaging.
                  </p>
                ) : null}
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
                <Link
                  href={plan.cta === "Book demo" ? "/contact" : "/pricing"}
                  className={`mt-8 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-bold transition ${
                    plan.highlighted
                      ? "bg-slate-950 text-white hover:bg-slate-800"
                      : "bg-white text-slate-950 hover:bg-slate-200"
                  }`}
                >
                  {plan.cta}
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
          <div className="grid grid-cols-4 bg-white/[0.06] px-5 py-4 text-sm font-semibold text-white">
            <span>Feature</span>
            <span>Launch</span>
            <span>Scale</span>
            <span>Enterprise</span>
          </div>
          {comparisonRows.map((row) => (
            <div
              key={row.feature}
              className="grid grid-cols-4 gap-3 border-t border-white/10 px-5 py-4 text-sm text-slate-300"
            >
              <span className="font-medium text-white">{row.feature}</span>
              <span>{row.launch}</span>
              <span>{row.scale}</span>
              <span>{row.enterprise}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
