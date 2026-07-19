import { useEffect, useRef } from 'react';

function SchematicDiagram() {
  return (
    <div className="relative w-full max-w-lg mx-auto" aria-hidden="true">
      <svg viewBox="0 0 500 380" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Dashed connector lines */}
        <line x1="250" y1="55" x2="90" y2="190" stroke="#3E6478" strokeWidth="1.5" strokeDasharray="6 4" />
        <line x1="90" y1="190" x2="410" y2="190" stroke="#3E6478" strokeWidth="1.5" strokeDasharray="6 4" />
        <line x1="250" y1="55" x2="410" y2="190" stroke="#3E6478" strokeWidth="1.5" strokeDasharray="6 4" />
        <line x1="250" y1="55" x2="250" y2="320" stroke="#3E6478" strokeWidth="1.5" strokeDasharray="6 4" />
        <line x1="90" y1="190" x2="250" y2="320" stroke="#3E6478" strokeWidth="1.5" strokeDasharray="6 4" />
        <line x1="410" y1="190" x2="250" y2="320" stroke="#3E6478" strokeWidth="1.5" strokeDasharray="6 4" />

        {/* Annotations on lines */}
        <rect x="155" y="110" width="40" height="18" rx="3" fill="#0A1F2C" stroke="#3E6478" strokeWidth="0.5" />
        <text x="175" y="122" textAnchor="middle" fill="#6EC6E8" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="500">API</text>
        <rect x="175" y="170" width="54" height="18" rx="3" fill="#0A1F2C" stroke="#3E6478" strokeWidth="0.5" />
        <text x="202" y="182" textAnchor="middle" fill="#6EC6E8" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="500">DEPLOY</text>
        <rect x="305" y="115" width="60" height="18" rx="3" fill="#0A1F2C" stroke="#3E6478" strokeWidth="0.5" />
        <text x="335" y="127" textAnchor="middle" fill="#6EC6E8" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="500">AGENTS</text>
        <rect x="315" y="210" width="66" height="18" rx="3" fill="#0A1F2C" stroke="#3E6478" strokeWidth="0.5" />
        <text x="348" y="222" textAnchor="middle" fill="#6EC6E8" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="500">DATA</text>
        <rect x="85" y="250" width="56" height="18" rx="3" fill="#0A1F2C" stroke="#3E6478" strokeWidth="0.5" />
        <text x="113" y="262" textAnchor="middle" fill="#6EC6E8" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="500">STORE</text>
        <rect x="190" y="240" width="48" height="18" rx="3" fill="#0A1F2C" stroke="#3E6478" strokeWidth="0.5" />
        <text x="214" y="252" textAnchor="middle" fill="#6EC6E8" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="500">SYNC</text>

        {/* Nodes */}
        {/* Top node */}
        <circle cx="250" cy="55" r="32" stroke="#6EC6E8" strokeWidth="2" fill="#0F2B3D" />
        <circle cx="250" cy="55" r="6" fill="#6EC6E8" opacity="0.6" />
        <circle cx="250" cy="55" r="2" fill="#6EC6E8" />
        <text x="250" y="110" textAnchor="middle" fill="#EDEAE0" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="600">FULL-STACK</text>
        <text x="250" y="124" textAnchor="middle" fill="#D8E4EA" fontFamily="JetBrains Mono, monospace" fontSize="8">SPEC-00</text>

        {/* Left node */}
        <circle cx="90" cy="190" r="32" stroke="#6EC6E8" strokeWidth="2" fill="#0F2B3D" />
        <circle cx="90" cy="190" r="6" fill="#6EC6E8" opacity="0.6" />
        <circle cx="90" cy="190" r="2" fill="#6EC6E8" />
        <text x="90" y="244" textAnchor="middle" fill="#EDEAE0" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="600">SITES</text>
        <text x="90" y="258" textAnchor="middle" fill="#D8E4EA" fontFamily="JetBrains Mono, monospace" fontSize="8">SPEC-01</text>

        {/* Right node */}
        <circle cx="410" cy="190" r="32" stroke="#6EC6E8" strokeWidth="2" fill="#0F2B3D" />
        <circle cx="410" cy="190" r="6" fill="#6EC6E8" opacity="0.6" />
        <circle cx="410" cy="190" r="2" fill="#6EC6E8" />
        <text x="410" y="244" textAnchor="middle" fill="#EDEAE0" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="600">CRM / DASHBOARDS</text>
        <text x="410" y="258" textAnchor="middle" fill="#D8E4EA" fontFamily="JetBrains Mono, monospace" fontSize="8">SPEC-02</text>

        {/* Bottom node */}
        <circle cx="250" cy="320" r="32" stroke="#6EC6E8" strokeWidth="2" fill="#0F2B3D" />
        <circle cx="250" cy="320" r="6" fill="#6EC6E8" opacity="0.6" />
        <circle cx="250" cy="320" r="2" fill="#6EC6E8" />
        <text x="250" y="374" textAnchor="middle" fill="#EDEAE0" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="600">AI AGENTS</text>
        <text x="250" y="388" textAnchor="middle" fill="#D8E4EA" fontFamily="JetBrains Mono, monospace" fontSize="8">SPEC-03</text>

        {/* Title annotation */}
        <rect x="410" y="16" width="86" height="20" rx="3" fill="#0A1F2C" stroke="#FFC857" strokeWidth="0.5" />
        <text x="453" y="30" textAnchor="middle" fill="#FFC857" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="500">SCHEMATIC · V1.0</text>
      </svg>
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
            <p className="font-mono text-cyan-400 text-sm tracking-widest uppercase">Freelance Developer · Rewari, IN</p>
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
                className="inline-block bg-yellow-400 text-blueprint-950 font-semibold font-display px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors focus-visible:outline-2 focus-visible:outline-yellow-400 focus-visible:outline-offset-2"
              >
                Start a project →
              </a>
              <a
                href="#work"
                className="inline-block border border-cyan-600 text-cyan-400 font-semibold font-display px-6 py-3 rounded-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2"
              >
                View shipped work
              </a>
            </div>
          </div>
          <div className="flex-1 w-full">
            <SchematicDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
