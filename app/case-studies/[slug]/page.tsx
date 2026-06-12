import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyDetailPage } from "@/app/_components/case-study-detail";
import { Navbar } from "@/app/_components/navbar";
import { SiteFooter } from "@/app/_components/site-footer";
import { caseStudyDetails } from "@/app/_data/marketing";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudyDetails.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {
      title: "Case Study Not Found | PulseDesk",
    };
  }

  return {
    title: `${study.company} Case Study | PulseDesk`,
    description: `${study.company} is a mock PulseDesk case study for ${study.industry}, covering the problem, solution, results, and customer quote.`,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <CaseStudyDetailPage study={study} />
      <SiteFooter />
    </main>
  );
}

function getCaseStudy(slug: string) {
  return caseStudyDetails.find((study) => study.slug === slug);
}
