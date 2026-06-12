"use client";

import { useMemo, useState } from "react";
import { SectionHeading } from "@/app/_components/section-heading";

export function RoiCalculator() {
  const [accounts, setAccounts] = useState(320);
  const [hours, setHours] = useState(9);
  const [rate, setRate] = useState(85);

  const result = useMemo(() => {
    const monthlyHours = hours * 4;
    const monthlySavings = monthlyHours * rate;
    const annualSavings = monthlySavings * 12;
    const protectedRevenue = accounts * 140;

    return {
      monthlyHours,
      annualSavings,
      protectedRevenue,
    };
  }, [accounts, hours, rate]);

  return (
    <section id="roi" className="bg-white px-6 py-24 text-slate-950 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="ROI calculator"
          title="Estimate the value of cleaner customer operations."
          description="A lightweight client-side calculator that demonstrates stateful product UI without adding backend complexity."
          align="left"
        />

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-8">
          <div className="grid gap-5 md:grid-cols-3">
            <NumberField
              id="accounts"
              label="Managed accounts"
              value={accounts}
              min={50}
              max={2000}
              onChange={setAccounts}
            />
            <NumberField
              id="hours"
              label="Hours saved weekly"
              value={hours}
              min={1}
              max={40}
              onChange={setHours}
            />
            <NumberField
              id="rate"
              label="Blended hourly rate"
              value={rate}
              min={35}
              max={200}
              prefix="$"
              onChange={setRate}
            />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <ResultCard value={`${result.monthlyHours}h`} label="monthly team time recovered" />
            <ResultCard
              value={currency(result.annualSavings)}
              label="estimated annual productivity value"
            />
            <ResultCard
              value={currency(result.protectedRevenue)}
              label="mock revenue visibility opportunity"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function NumberField({
  id,
  label,
  value,
  min,
  max,
  prefix,
  onChange,
}: {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  prefix?: string;
  onChange: (value: number) => void;
}) {
  return (
    <label htmlFor={id} className="block rounded-3xl border border-slate-200 bg-white p-5">
      <span className="text-sm font-semibold text-slate-600">{label}</span>
      <span className="mt-3 flex items-baseline gap-1 text-3xl font-semibold text-slate-950">
        {prefix ? <span>{prefix}</span> : null}
        {value}
      </span>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-5 w-full accent-cyan-500"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
      />
    </label>
  );
}

function ResultCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl bg-slate-950 p-5 text-white">
      <p className="text-2xl font-semibold">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{label}</p>
    </div>
  );
}

function currency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
