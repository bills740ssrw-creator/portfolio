export default function Footer() {
  return (
    <footer className="border-t border-cyan-600/20 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-cyan-600">
          {/* TODO: replace with your name/URL */}
          Deepanshu
        </p>
        <p className="font-mono text-xs text-cyan-600">
          Rewari · Haryana · India
        </p>
        <p className="font-mono text-xs text-cyan-600/40">
          MMXXVI
        </p>
      </div>
    </footer>
  );
}
