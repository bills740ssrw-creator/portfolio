import { useEffect, useRef, useState } from 'react';

const codeLines = [
  { text: 'import { Client } from "deepanshu/dev"', delay: 40 },
  { text: '', delay: 20 },
  { text: 'const project = await Client.create({', delay: 30 },
  { text: '  type: "website" | "crm" | "agent",', delay: 25 },
  { text: '  timeline: "2-4 weeks",', delay: 25 },
  { text: '  quality: "ship-ready",', delay: 25 },
  { text: '})', delay: 20 },
  { text: '', delay: 20 },
  { text: '// Result: polished, fast,', delay: 35 },
  { text: '// and actually on budget.', delay: 80 },
];

function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const ref = setTimeout(() => setStarted(true), 600);
    return () => clearTimeout(ref);
  }, []);

  useEffect(() => {
    if (!started || visibleLines >= codeLines.length) return;
    const line = codeLines[visibleLines];
    if (currentChar < line.text.length) {
      const t = setTimeout(() => setCurrentChar(c => c + 1), line.delay);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setVisibleLines(v => v + 1);
      setCurrentChar(0);
    }, line.delay + 120);
    return () => clearTimeout(t);
  }, [started, visibleLines, currentChar]);

  return (
    <div className="w-full max-w-lg mx-auto" aria-hidden="true">
      <div className="bg-[#0a0f1e] rounded-xl border border-green-500/20 shadow-[0_0_40px_-12px_rgba(34,197,94,0.15)] overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#0f172a] border-b border-green-500/10">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="font-mono text-[10px] text-slate-500 ml-3">~/projects — bash</span>
        </div>
        <div className="p-5 font-mono text-sm leading-relaxed min-h-[280px]">
          {codeLines.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="flex">
              <span className="text-green-500/50 mr-3 shrink-0">$</span>
              <span className="text-slate-200">{line.text}</span>
            </div>
          ))}
          {visibleLines < codeLines.length && (
            <div className="flex">
              <span className="text-green-500/50 mr-3 shrink-0">$</span>
              <span className="text-slate-200">
                {codeLines[visibleLines].text.slice(0, currentChar)}
                <span className="inline-block w-2 h-4 bg-green-400 ml-0.5 animate-pulse" />
              </span>
            </div>
          )}
          {visibleLines >= codeLines.length && (
            <div className="flex">
              <span className="text-green-500/50 mr-3 shrink-0">$</span>
              <span className="inline-block w-2 h-4 bg-green-400 ml-0.5 animate-pulse" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const headlineRef = useRef(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div ref={headlineRef} className="reveal flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 space-y-6">
            <p className="font-mono text-green-400 text-sm tracking-widest uppercase">Freelance Developer · Rewari, IN</p>
            <h1 className="font-display text-warm-50 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              I build websites, CRM dashboards, and AI automations.
            </h1>
            <p className="text-slate-200 text-lg sm:text-xl leading-relaxed max-w-xl">
              I ship fast and I ship honestly — real code, clear communication, no over-promising. 
              From polished marketing sites to internal tools and agentic workflows, 
              every project gets the same care.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="inline-block bg-green-500 text-white font-semibold font-display px-6 py-3 rounded-lg hover:bg-green-400 transition-colors focus-visible:outline-2 focus-visible:outline-green-500 focus-visible:outline-offset-2"
              >
                Start a project →
              </a>
              <a
                href="#work"
                className="inline-block border border-green-600/50 text-green-400 font-semibold font-display px-6 py-3 rounded-lg hover:border-green-400 hover:bg-green-400/10 transition-all focus-visible:outline-2 focus-visible:outline-green-400 focus-visible:outline-offset-2"
              >
                View shipped work
              </a>
            </div>
          </div>
          <div className="flex-1 w-full">
            <TerminalWindow />
          </div>
        </div>
      </div>
    </section>
  );
}
