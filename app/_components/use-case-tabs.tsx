"use client";

import { useState } from "react";
import { useCases } from "@/app/_data/marketing";

export function UseCaseTabs() {
  const [active, setActive] = useState(0);
  const current = useCases[active];

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="grid gap-3 sm:grid-cols-3" role="tablist" aria-label="Use cases">
        {useCases.map((useCase, index) => (
          <button
            key={useCase.label}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-controls="use-case-panel"
            className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
              active === index
                ? "bg-slate-950 text-white shadow-lg shadow-slate-200"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
            onClick={() => setActive(index)}
          >
            {useCase.label}
          </button>
        ))}
      </div>

      <div id="use-case-panel" role="tabpanel" className="mt-6 rounded-3xl bg-slate-50 p-6">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
          {current.title}
        </h3>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {current.points.map((point) => (
            <li key={point} className="rounded-2xl border border-slate-200 bg-white p-4">
              <span className="mb-4 block h-2 w-10 rounded-full bg-cyan-400" />
              <span className="font-medium text-slate-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
