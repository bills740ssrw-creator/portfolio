import { useEffect, useRef } from 'react';

const steps = [
  {
    num: "01",
    label: "SCOPE",
    title: "Clarify the work",
    description: "We talk through what you need — timeline, budget, must-haves vs nice-to-haves. I'll send you a written spec before any code is written. No surprises.",
  },
  {
    num: "02",
    label: "BUILD",
    title: "Ship iteratively",
    description: "I build in public with a staging URL so you can see progress. Weekly updates, no black boxes. You get a working demo long before the final deadline.",
  },
  {
    num: "03",
    label: "SHIP",
    title: "Launch & handover",
    description: "Deployed to production with DNS, SSL, analytics, and monitoring configured. You get full source access and a handoff doc so you're never locked in.",
  },
  {
    num: "04",
    label: "SUPPORT",
    title: "Stay in touch",
    description: "Post-launch, I'm around for fixes, tweaks, and questions. Ongoing maintenance available at a flat monthly rate — no retainer games.",
  },
];

export default function Process() {
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
    <section id="process" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal mb-16">
          <p className="font-mono text-green-400 text-sm tracking-widest uppercase mb-3 font-semibold">Process</p>
          <h2 className="font-display text-warm-50 text-3xl sm:text-4xl font-bold">How It Works</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <ProcessStep key={step.num} {...step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ num, label, title, description, index }) {
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
      className="reveal relative"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Connector line (desktop, between items) */}
      <div className="hidden lg:block absolute top-6 left-[calc(100%+4px)] w-[calc(100%-32px)] h-px border-t border-dashed border-green-600/50" />

      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-sm text-green-400 bg-green-600/10 px-2 py-0.5 rounded font-semibold">{label}</span>
        <span className="font-mono text-3xl font-bold text-green-600/40" aria-hidden="true">
          {num}
        </span>
      </div>
      <h3 className="font-display text-warm-50 text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-200 text-sm leading-relaxed font-semibold">{description}</p>
    </div>
  );
}
