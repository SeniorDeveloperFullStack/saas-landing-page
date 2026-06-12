import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PulseDesk | Customer Operations Platform for SaaS Teams",
  description:
    "PulseDesk is a production-style SaaS marketing website concept for customer operations, lifecycle automation, revenue intelligence, and executive reporting.",
  keywords: [
    "PulseDesk",
    "SaaS landing page",
    "customer operations",
    "revenue intelligence",
    "customer success",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 font-sans">{children}</body>
    </html>
  );
}
