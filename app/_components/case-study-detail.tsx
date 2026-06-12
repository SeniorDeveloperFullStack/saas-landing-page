import Link from "next/link";
import type { caseStudyDetails } from "@/app/_data/marketing";

type CaseStudyDetail = (typeof caseStudyDetails)[number];

export function CaseStudyDetailPage({ study }: { study: CaseStudyDetail }) {
  return (
    <>
      <section className="relative isolate bg-slate-950 px-6 py-24 text-white lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.22),_transparent_32%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#020617_100%)]" />
        <div className="mx-auto max-w-5xl">
          <Link
            href="/case-studies"
            className="inline-flex text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
          >
            Back to case studies
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            {study.industry}
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            {study.company}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">{study.headline}</p>
        </div>
      </section>

      <section className="bg-white px-6 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <StoryCard eyebrow="Problem" body={study.problem} />
          <StoryCard eyebrow="Solution" body={study.solution} />
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600">
              Results
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Clear outcomes framed with mock metrics.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {study.results.map((result) => (
              <div key={result.label} className="rounded-3xl bg-slate-950 p-6 text-white">
                <p className="text-3xl font-semibold">{result.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm lg:grid-cols-[1fr_0.65fr] lg:p-12">
          <figure>
            <blockquote className="text-2xl font-medium leading-10 tracking-tight text-slate-900">
              &quot;{study.quote}&quot;
            </blockquote>
            <figcaption className="mt-8">
              <p className="font-semibold">{study.quoteName}</p>
              <p className="mt-1 text-sm text-slate-500">{study.quoteRole}</p>
            </figcaption>
          </figure>
          <div className="rounded-3xl bg-slate-950 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Next step
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              See how this workflow could map to your customer motion.
            </h2>
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-cyan-400 px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Book demo
              </Link>
              <Link
                href="/case-studies"
                className="rounded-full border border-white/15 px-5 py-3 text-center text-sm font-bold text-white transition hover:border-white/40"
              >
                View all case studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function StoryCard({ eyebrow, body }: { eyebrow: string; body: string }) {
  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600">
        {eyebrow}
      </p>
      <p className="mt-5 text-lg leading-8 text-slate-600">{body}</p>
    </article>
  );
}
