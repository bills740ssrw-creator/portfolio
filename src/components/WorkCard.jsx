import { useEffect, useRef } from 'react';

export default function WorkCard({ spec, status, title, subtitle, problem, build, result, link }) {
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
    <article
      ref={ref}
      className="reveal group bg-blueprint-900 border border-green-600/30 rounded-xl p-6 sm:p-8 flex flex-col hover:border-green-400/50 hover:shadow-[0_0_30px_-8px_rgba(34,197,94,0.15)] transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-5">
        <span className="font-mono text-xs text-green-600 bg-green-600/10 px-2.5 py-1 rounded font-semibold">{spec}</span>
        <span className="font-mono text-xs text-green-400 bg-green-400/10 px-2.5 py-1 rounded font-semibold">{status}</span>
      </div>

      <h3 className="font-display text-warm-50 text-xl sm:text-2xl font-semibold mb-1">{title}</h3>
      <p className="font-mono text-sm text-green-400 mb-5 font-semibold">{subtitle}</p>

      <div className="space-y-4 flex-1">
        <div>
          <h4 className="font-mono text-xs text-yellow-400 uppercase tracking-wider mb-1.5 font-bold">Problem</h4>
          <p className="text-slate-200 text-sm leading-relaxed font-semibold">{problem}</p>
        </div>
        <div>
          <h4 className="font-mono text-xs text-yellow-400 uppercase tracking-wider mb-1.5 font-bold">Build</h4>
          <p className="text-slate-200 text-sm leading-relaxed font-semibold">{build}</p>
        </div>
        <div>
          <h4 className="font-mono text-xs text-yellow-400 uppercase tracking-wider mb-1.5 font-bold">Result</h4>
          <p className="text-slate-200 text-sm leading-relaxed font-semibold">{result}</p>
        </div>
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-green-400 font-mono text-sm hover:text-yellow-400 transition-colors focus-visible:outline-2 focus-visible:outline-green-400 focus-visible:outline-offset-2 font-semibold"
        >
          <span className="underline underline-offset-4 decoration-green-600/50">Visit site</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      )}
    </article>
  );
}
