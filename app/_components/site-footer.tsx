import Link from "next/link";
import { navLinks } from "@/app/_data/marketing";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-10 text-slate-400 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">PulseDesk</p>
          <p className="mt-2 text-sm">Mock SaaS marketing website portfolio project.</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
