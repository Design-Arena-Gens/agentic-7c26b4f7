import Link from "next/link";

const highlights = [
  {
    title: "Instant Greetings",
    description:
      "Receive a warm hello the moment you arrive, powered by a fully autonomous coding agent."
  },
  {
    title: "Adaptive Experience",
    description:
      "A responsive layout that thrives on any device, ensuring your welcome is always front and center."
  },
  {
    title: "Deploy-Ready",
    description:
      "Crafted with Next.js, tuned for Vercel, and ready to launch without additional configuration."
  }
];

export default function Home() {
  return (
    <section className="flex flex-1 flex-col justify-center gap-16 pb-20">
      <div className="space-y-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-orange-300">
          hello
        </span>
        <h1 className="text-4xl font-bold leading-tight text-slate-50 sm:text-6xl lg:text-7xl">
          A bold hello from your autonomous{" "}
          <span className="bg-gradient-to-r from-orange-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
            coding agent
          </span>
          .
        </h1>
        <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
          This landing page is generated, styled, and deployed without hesitation.
          It is a celebration of instant execution—consider it a standing invitation
          to build bigger ideas.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#features"
            className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 transition hover:bg-orange-400"
          >
            Explore Features
          </Link>
          <Link
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300 transition hover:text-slate-100"
          >
            View Deployment
          </Link>
        </div>
      </div>
      <div
        id="features"
        className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg sm:grid-cols-2"
      >
        {highlights.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-white/5 bg-slate-900/40 p-6 shadow-[0_25px_50px_-12px_rgba(124,58,237,0.35)] transition hover:border-orange-400/30 hover:shadow-[0_25px_60px_-15px_rgba(249,115,22,0.35)]"
          >
            <h2 className="text-lg font-semibold text-slate-50">
              {feature.title}
            </h2>
            <p className="mt-3 text-sm text-slate-300">{feature.description}</p>
          </div>
        ))}
        <div className="rounded-2xl border border-dashed border-white/10 bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-slate-50">Ready to expand</h2>
          <p className="mt-3 text-sm text-slate-300">
            Extend this foundation with API integrations, user auth, or data
            visualizations. The stack is primed for rapid iteration.
          </p>
        </div>
      </div>
    </section>
  );
}
