"use client";

import { useState } from "react";
import { SectionHeading } from "@/app/_components/section-heading";

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="demo" className="bg-slate-950 px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Book demo"
            title="See how PulseDesk would run your customer operating rhythm."
            description="This is a frontend-only lead capture UI. It validates the interaction pattern without sending data anywhere."
            tone="dark"
            align="left"
          />
          <div className="mt-8 grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
            <p className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              Response routing for sales, success, and revenue ops.
            </p>
            <p className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              Mock implementation plan and stakeholder map.
            </p>
          </div>
        </div>

        <form
          className="rounded-[2rem] border border-white/10 bg-white p-5 text-slate-950 shadow-2xl sm:p-8"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <TextField id="name" label="Full name" placeholder="Maya Chen" />
            <TextField id="email" label="Work email" type="email" placeholder="maya@company.com" />
            <TextField id="company" label="Company" placeholder="Northstar" />
            <label htmlFor="team-size" className="block">
              <span className="text-sm font-semibold text-slate-700">Team size</span>
              <select
                id="team-size"
                name="team-size"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select range
                </option>
                <option>1-10</option>
                <option>11-50</option>
                <option>51-200</option>
                <option>201+</option>
              </select>
            </label>
          </div>

          <label htmlFor="message" className="mt-5 block">
            <span className="text-sm font-semibold text-slate-700">What should we focus on?</span>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
              placeholder="Renewal risk, onboarding, expansion reporting..."
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            Request demo
          </button>

          {submitted ? (
            <p className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
              Demo request captured locally. No backend call was made.
            </p>
          ) : (
            <p className="mt-4 text-center text-xs text-slate-500">
              By submitting, you are interacting with a mock portfolio form.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function TextField({
  id,
  label,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required
        className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
      />
    </label>
  );
}
