"use client";

import { useState } from "react";
import { faqs } from "@/app/_data/marketing";
import { SectionHeading } from "@/app/_components/section-heading";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-white px-6 py-24 text-slate-950 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions a reviewer or buyer might ask."
          description="Clear expectations for a frontend-only portfolio implementation and a believable SaaS story."
        />

        <div className="mt-14 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-slate-50">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;

            return (
              <div key={faq.question} className="p-6 sm:p-8">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 text-left"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-xl font-semibold text-slate-700">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <p id={panelId} className="mt-4 leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
