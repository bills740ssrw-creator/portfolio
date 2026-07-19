import { useEffect, useRef } from 'react';
import WorkCard from './WorkCard';

export default function ShippedWork() {
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
    <section id="work" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal mb-12">
          <p className="font-mono text-cyan-400 text-sm tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="font-display text-warm-50 text-3xl sm:text-4xl font-bold">Shipped Work</h2>
          <p className="text-slate-200 mt-3 max-w-2xl">
            Projects I&apos;ve built, launched, and maintained — with real URLs you can visit today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <WorkCard
            spec="SPEC-01"
            status="Live · flashdown.co.in"
            title="Flashdown"
            subtitle="PDF/DOCX/TXT → Markdown converter"
            problem="Writers and devs needed a fast, private way to convert PDFs, Word docs, and plain-text files to Markdown without uploading to third-party services that keep copies of their documents."
            build="Built as a browser-first PWA on Cloudflare Workers. Handles file parsing entirely client-side via WebAssembly. Implements drag-and-drop, real-time preview, and one-click copy. Full SEO implementation with JSON-LD schema, Open Graph, and sitemap. Launched on Product Hunt and X."
            result="Production app at flashdown.co.in. Used daily by a growing base of writers, engineers, and note-takers. PH launch generated 400+ upvotes and the first wave of organic traffic. Schema markup drives rich snippets in search results."
            link="https://flashdown.co.in"
          />

          <WorkCard
            spec="SPEC-02"
            status="Live · Rewari, HR"
            title="OM Juice & Shakes"
            subtitle="Milkshake restaurant website"
            problem="A local milkshake shop in Rewari needed a website that captured the energy of their space — not a generic menu page, but something that felt like walking into the shop. No stock photos, no templates."
            build="Built a video-first experience with a custom hero that crossfades between two looping shots using a ping-pong architecture — each clip plays forward, then the other crossfades in while the first rewinds, creating a seamless loop. Scroll-speed ramping syncs video playback rate to scroll position for a cinematic feel."
            result="The site serves as the shop&apos;s primary digital presence. The video hero loads fast thanks to careful compression and lazy initialization. Scroll-synced video creates an immersive brand feel that static competitors&apos; pages lack."
          />
        </div>
      </div>
    </section>
  );
}
