import { dashboardCards } from "@/app/_data/marketing";

export function DashboardPreview() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-cyan-950/50 backdrop-blur sm:p-4">
      <div className="rounded-[1.5rem] bg-slate-900 p-5 ring-1 ring-white/10">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-sm text-slate-400">Revenue health</p>
            <p className="mt-1 text-2xl font-semibold text-white">$2.4M ARR</p>
          </div>
          <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-300">
            +18.4%
          </span>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {dashboardCards.map((card) => (
            <div key={card.label} className="rounded-2xl bg-white/[0.04] p-4">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm text-slate-400">{card.label}</p>
                <p className="text-xs font-medium text-cyan-200">{card.detail}</p>
              </div>
              <p className="mt-3 text-3xl font-semibold text-white">{card.value}%</p>
              <div className="mt-4 h-2 rounded-full bg-slate-800">
                <div
                  className="h-2 rounded-full bg-cyan-400"
                  style={{ width: `${card.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold text-cyan-100">Suggested play</p>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-cyan-50">
              Auto-prioritized
            </span>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Trigger executive check-ins for 14 accounts showing expansion intent and high
            product engagement.
          </p>
        </div>
      </div>
    </div>
  );
}
