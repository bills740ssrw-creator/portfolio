import { useEffect, useRef } from 'react';

const services = [
  {
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="6" width="26" height="20" rx="3" stroke="#6EC6E8" strokeWidth="1.5"/>
      <circle cx="16" cy="16" r="4" stroke="#6EC6E8" strokeWidth="1.5"/>
      <path d="M10 3L16 6L22 3" stroke="#FFC857" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 20V26" stroke="#FFC857" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 26H20" stroke="#FFC857" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>`,
    title: 'Website Development',
    description: 'Marketing sites, landing pages, and full-scale web apps. Built with React, Vite, and Tailwind — deployed on Cloudflare or your preferred host.',
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="28" height="24" rx="3" stroke="#6EC6E8" strokeWidth="1.5"/>
      <path d="M2 10H30" stroke="#6EC6E8" strokeWidth="1.5"/>
      <circle cx="8" cy="7" r="1" fill="#FFC857"/>
      <circle cx="12" cy="7" r="1" fill="#FFC857"/>
      <circle cx="16" cy="7" r="1" fill="#FFC857"/>
      <rect x="6" y="14" width="8" height="4" rx="1" stroke="#FFC857" strokeWidth="1"/>
      <rect x="6" y="20" width="8" height="4" rx="1" stroke="#FFC857" strokeWidth="1"/>
      <rect x="18" y="14" width="8" height="10" rx="1" stroke="#6EC6E8" strokeWidth="1"/>
    </svg>`,
    title: 'CRM & Dashboards',
    description: 'Internal tools for tracking leads, managing inventory, and visualizing operations. React frontends with lightweight backends — Cloudflare Workers + D1 or Supabase.',
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 26L14 10L18 18L26 6" stroke="#6EC6E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="26" cy="6" r="3" stroke="#FFC857" strokeWidth="1.5"/>
      <circle cx="6" cy="26" r="3" stroke="#FFC857" strokeWidth="1.5"/>
      <circle cx="14" cy="10" r="2" stroke="#6EC6E8" strokeWidth="1"/>
      <circle cx="18" cy="18" r="2" stroke="#6EC6E8" strokeWidth="1"/>
    </svg>`,
    title: 'AI & Automation',
    description: 'Workflow agents that crawl, classify, summarize, and act. Built on Cloudflare Workers AI and the Agents SDK — from pricing scrapers to auto-generated content briefs.',
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4V28" stroke="#6EC6E8" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 16H24" stroke="#6EC6E8" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 8L13 14" stroke="#6EC6E8" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M25 8L19 14" stroke="#6EC6E8" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 24L13 18" stroke="#6EC6E8" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M25 24L19 18" stroke="#6EC6E8" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="16" cy="16" r="2" fill="#FFC857"/>
    </svg>`,
    title: 'SEO & Performance',
    description: 'Technical SEO audits, Core Web Vitals optimization, structured data, and AI visibility strategy. I make sure your site is fast, crawlable, and shows up where it matters.',
  },
];

export default function WhatIDo() {
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
    <section id="what-i-do" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal mb-12">
          <p className="font-mono text-cyan-400 text-sm tracking-widest uppercase mb-3">Services</p>
          <h2 className="font-display text-warm-50 text-3xl sm:text-4xl font-bold">What I Do</h2>
          <p className="text-slate-200 mt-3 max-w-2xl">
            From polished marketing sites to internal dashboards and AI agents — 
            here&apos;s the work I take on.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description }) {
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
      className="reveal bg-blueprint-900 border border-cyan-600/30 rounded-xl p-6 sm:p-8 hover:border-cyan-400/50 hover:shadow-[0_0_30px_-8px_rgba(34,211,238,0.15)] transition-all duration-300 flex flex-col"
    >
      <div className="mb-4" dangerouslySetInnerHTML={{ __html: icon }} />
      <h3 className="font-display text-warm-50 text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-200 text-sm leading-relaxed flex-1">{description}</p>
    </div>
  );
}
