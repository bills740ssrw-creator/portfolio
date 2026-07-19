import { useEffect, useRef } from 'react';

export default function Contact() {
  const headingRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = formRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nContact: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:deepanshu.masum@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div ref={headingRef} className="reveal mb-12 text-center">
          <p className="font-mono text-cyan-400 text-sm tracking-widest uppercase mb-3">Contact</p>
          <h2 className="font-display text-warm-50 text-3xl sm:text-4xl font-bold mb-4">Start a Project</h2>
          <p className="text-slate-200 max-w-lg mx-auto">
            Tell me what you&apos;re building. I&apos;ll reply within 24 hours with a rough timeline and budget range.
          </p>
        </div>

        {/* TODO: Replace the mailto: address with your real email.
             For production: swap this client-side mailto with a Formspree
             action="https://formspree.io/f/your-form-id" or your own backend. */}
        <form
          ref={formRef}
          className="reveal space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="font-mono text-xs text-cyan-400 uppercase tracking-wider block mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full bg-blueprint-900 border border-cyan-600/40 rounded-lg px-4 py-3 text-warm-50 font-body text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="font-mono text-xs text-cyan-400 uppercase tracking-wider block mb-2">
              Email or WhatsApp
            </label>
            <input
              id="email"
              name="email"
              type="text"
              required
              className="w-full bg-blueprint-900 border border-cyan-600/40 rounded-lg px-4 py-3 text-warm-50 font-body text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-colors"
              placeholder="you@example.com or +91 phone"
            />
          </div>

          <div>
            <label htmlFor="message" className="font-mono text-xs text-cyan-400 uppercase tracking-wider block mb-2">
              Project Description
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full bg-blueprint-900 border border-cyan-600/40 rounded-lg px-4 py-3 text-warm-50 font-body text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-colors resize-y"
              placeholder="What are you building? Timeline? Budget range?"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-yellow-400 text-blueprint-950 font-semibold font-display px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors text-base focus-visible:outline-2 focus-visible:outline-yellow-400 focus-visible:outline-offset-2 cursor-pointer"
          >
            Send message →
          </button>
        </form>
      </div>
    </section>
  );
}
