import { useEffect, useRef } from 'react';

const items = [
  {
    spec: "SPEC-04",
    title: "CRM & Inventory Dashboards",
    description: "Internal tools for tracking leads, managing stock, and visualizing operations. I build these with React + Vite on the frontend and a lightweight backend (Cloudflare Workers + D1 / Supabase). Currently scoping a dashboard for a local manufacturing client — reach out if you need something similar.",
    status: "Currently building",
  },
  {
    spec: "SPEC-05",
    title: "AI Agentic Automation",
    description: "Workflow agents that crawl, classify, summarize, and act — from scraping competitor pricing to auto-generating SEO-optimized content briefs. Built on Cloudflare Workers AI, the Agents SDK, and custom RAG pipelines. I'm happy to walk through the approach on a call.",
    status: "Available on request",
  },
];

export default function AlsoBuild() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal mb-12">
          <h2 className="font-display text-warm-50 text-3xl sm:text-4xl font-bold">Also Build</h2>
          <p className="text-slate-200 mt-3 max-w-2xl">
            These are capabilities I&apos;m actively developing or have built for past clients — 
            no fake case studies, no invented metrics. Happy to discuss the approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item) => (
            <AlsoBuildCard key={item.spec} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AlsoBuildCard({ spec, title, description, status }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="reveal bg-blueprint-900 border border-cyan-600/30 rounded-xl p-6 sm:p-8 hover:border-cyan-400/50 hover:shadow-[0_0_30px_-8px_rgba(110,198,232,0.15)] transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-5">
        <span className="font-mono text-xs text-cyan-600 bg-cyan-600/10 px-2.5 py-1 rounded">{spec}</span>
        <span className="font-mono text-xs text-yellow-400 bg-yellow-400/10 px-2.5 py-1 rounded">{status}</span>
      </div>
      <h3 className="font-display text-warm-50 text-xl sm:text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-slate-200 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
