export default function Footer() {
  return (
    <footer>
      <div className="border-t border-cyan-600/20 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-cyan-400 text-xs tracking-widest uppercase mb-3 text-center">Contact</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm">
            <a href="mailto:deepanshu.masum@gmail.com" className="text-slate-200 hover:text-yellow-400 transition-colors font-mono">
              deepanshu.masum@gmail.com
            </a>
            <span className="hidden sm:block text-cyan-600/40">·</span>
            <a href="https://wa.me/918059224102" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-yellow-400 transition-colors font-mono">
              +91 8059224102
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-cyan-600/20 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-cyan-600">Deepanshu</p>
          <p className="font-mono text-xs text-cyan-600">Rewari · Haryana · India</p>
          <p className="font-mono text-xs text-cyan-600/40">MMXXVI</p>
        </div>
      </div>
    </footer>
  );
}
