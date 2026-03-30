const DOWNLOAD_URL =
  "https://github.com/georgealexiou/mimic-releases/releases/latest/download/mimic.dmg";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0c0c0e] text-neutral-300 antialiased overflow-x-hidden">
      <Nav />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 max-w-5xl mx-auto">
      <div className="flex items-center gap-2.5">
        <img src="/icon.png" alt="Mimic" className="w-7 h-7 rounded-xl" />
        <span className="text-white font-semibold tracking-tight">Mimic</span>
      </div>
      <a
        href={DOWNLOAD_URL}
        className="text-sm bg-white text-black px-4 py-1.5 rounded-full font-medium hover:bg-neutral-200 transition-colors"
      >
        Download
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative max-w-5xl mx-auto px-8 pt-24 pb-32 text-center">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center -top-20">
        <div className="w-[600px] h-[400px] rounded-full bg-violet-600/20 blur-[120px]" />
      </div>

      <div className="relative">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-neutral-400 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
          Free
        </div>

        <h1 className="text-6xl sm:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
          <span className="text-white">Your clipboard,</span>
          <br />
          <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            finally powerful.
          </span>
        </h1>

        <p className="text-lg text-neutral-400 max-w-md mx-auto mb-10">
          Hit <Kbd>⌘</Kbd> <Kbd>shift</Kbd> <Kbd>V</Kbd>. Paste it. Transform
          it. Share it.
        </p>

        <div className="flex items-center justify-center gap-4">
          <a
            href={DOWNLOAD_URL}
            className="bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:bg-neutral-200 transition-colors"
          >
            Download for macOS
          </a>
          <span className="text-sm text-neutral-500">for macOS 26.0+</span>
        </div>

        {/* Demo video */}
        <div className="mt-16 rounded-2xl border border-white/10 overflow-hidden max-w-3xl mx-auto">
          <video
            src="/demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      title: "One hotkey, anywhere",
      description:
        "Hit ⌘⇧V from any app. Mimic appears exactly where your cursor is, then vanishes the moment you're done.",
    },
    {
      title: "Nothing gets lost",
      description:
        "Everything you copy is saved. Navigate your history with arrow keys, paste with Return. No mouse needed.",
    },
    {
      title: "Do more with what you copy",
      description:
        "Tab into actions, summarize, convert a link to a QR code, transform text, and more. All on-device.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-8 pb-32">
      <div className="grid sm:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
        {features.map((f) => (
          <div key={f.title} className="flex flex-col gap-3 p-8 bg-[#0c0c0e]">
            <h2 className="text-white font-semibold">{f.title}</h2>
            <p className="text-neutral-500 text-sm leading-relaxed">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 text-center text-sm text-neutral-600">
      <p>
        Made by{" "}
        <a
          href="https://x.com/georgealexiou_"
          className="text-neutral-400 hover:text-white transition-colors"
        >
          George Alexiou
        </a>
      </p>
    </footer>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex items-center rounded-md bg-white/10 border border-white/15 px-1.5 py-0.5 text-sm text-neutral-300">
      {children}
    </kbd>
  );
}
