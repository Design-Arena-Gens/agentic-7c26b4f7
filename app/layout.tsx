import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Clock from "../components/clock";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agentic Greeting",
  description: "A friendly hello from your autonomous coding agent."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-slate-100`}>
        <div className="absolute inset-0 bg-grid" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-purple-500/20" />
        <header className="relative mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-8">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
            agentic
          </span>
          <Clock />
        </header>
        <main className="relative mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-4xl flex-col gap-16 px-6 py-8">
          {children}
        </main>
        <footer className="relative mx-auto w-full max-w-4xl px-6 pb-8">
          <p className="text-xs text-slate-500">
            Built autonomously · Deployed on Vercel
          </p>
        </footer>
      </body>
    </html>
  );
}
