export default function Footer() {
  return (
    <footer>
      <div className="border-t border-green-600/20 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-green-400 text-xs tracking-widest uppercase mb-3 text-center">Contact</p>
          <div className="flex flex-col items-center gap-1 text-sm">
            <div>
              <span className="font-mono text-green-400 mr-2">Email:</span>
              <a href="mailto:deepanshu.masum@gmail.com" className="text-slate-200 hover:text-green-300 transition-colors font-mono">
                deepanshu.masum@gmail.com
              </a>
            </div>
            <div>
              <span className="font-mono text-green-400 mr-2">Mobile:</span>
              <a href="https://wa.me/918059224102" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-green-300 transition-colors font-mono">
                +91 8059224102
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-green-600/20 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-green-600">Deepanshu</p>
          <p className="font-mono text-xs text-green-600">Rewari · Haryana · India</p>
          <p className="font-mono text-xs text-green-600/40">MMXXVI</p>
        </div>
      </div>
    </footer>
  );
}
