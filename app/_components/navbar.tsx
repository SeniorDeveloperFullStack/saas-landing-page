"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/app/_data/marketing";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-3" aria-label="PulseDesk home">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-400 font-bold text-slate-950">
            P
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">PulseDesk</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-100"
          >
            Book demo
          </Link>
          <Link
            href="/pricing"
            className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
          >
            Start free
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="sr-only">Open main menu</span>
          <span aria-hidden="true" className="space-y-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-slate-950 px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-2 py-2 transition hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Link
              href="/contact"
              className="rounded-full border border-white/15 px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              Book demo
            </Link>
            <Link
              href="/pricing"
              className="rounded-full bg-cyan-400 px-4 py-3 text-center text-sm font-bold text-slate-950"
              onClick={() => setIsOpen(false)}
            >
              Start free
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
