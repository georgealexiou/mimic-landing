import { useEffect, useState, useSyncExternalStore } from "react";

const DOWNLOAD_URL =
  "https://github.com/georgealexiou/mimic-releases/releases/latest/download/mimic.dmg";

const PRODUCT_HUNT_URL = "https://www.producthunt.com/products/mimc";

/* ------------------------------------------------------------------ */
/*  Hash router                                                        */
/* ------------------------------------------------------------------ */

function useHash() {
  return useSyncExternalStore(
    (cb) => {
      window.addEventListener("hashchange", cb);
      return () => window.removeEventListener("hashchange", cb);
    },
    () => window.location.hash,
  );
}

/* ------------------------------------------------------------------ */
/*  App                                                                */
/* ------------------------------------------------------------------ */

export default function App() {
  const hash = useHash();
  const page = hash === "#about" ? "about" : "home";

  return (
    <div className="relative min-h-screen text-neutral-300 antialiased overflow-x-hidden">
      {/* Gradient background */}
      <div className="fixed inset-0 bg-[#0e0e10]">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-[#5C106D]/25 blur-[140px]" />
        <div className="absolute top-[0%] right-[-15%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-[#C17272]/25 blur-[140px]" />
        <div className="absolute bottom-[-15%] left-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-[#5C106D]/20 blur-[140px]" />
        <div className="absolute top-[35%] right-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full bg-[#C17272]/18 blur-[120px]" />
      </div>

      <Nav page={page} />
      <div className="relative">
        {page === "home" ? <HomePage /> : <AboutPage />}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Home page                                                          */
/* ------------------------------------------------------------------ */

function HomePage() {
  return (
    <>
      <Hero />
      <Demo />
      <Features />
      <BottomCTA />
      <Footer />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  About page                                                         */
/* ------------------------------------------------------------------ */

function AboutPage() {
  return (
    <>
      <section className="max-w-xl mx-auto px-6 pt-32 sm:pt-40 pb-16">
        <h1 className="text-3xl font-bold text-white mb-8">About</h1>

        <div className="space-y-5 text-neutral-400 text-sm leading-relaxed">
          <p>
            Hi, I'm{" "}
            <a
              href="https://x.com/georgealexiou_"
              className="text-white hover:text-neutral-300 transition-colors"
            >
              George Alexiou
            </a>
            . I built Mimic because I kept losing things I copied. Switching
            between apps, jumping between tabs, pasting the wrong thing. It
            happened enough times that I decided to fix it.
          </p>

          <p>
            Mimic is a clipboard manager that sits behind{" "}
            <span className="text-neutral-300">⌘⇧V</span>. It saves everything
            you copy, lets you search through it, and has built-in actions to
            transform text before you paste. Summarize, reformat, spell-check.
            All without opening another app.
          </p>

          <p>
            Everything runs on your Mac. No servers, no accounts, no data
            leaving your machine. It's free and I plan to keep it that way.
          </p>

          <p>
            If you have feedback or run into issues, reach out on{" "}
            <a
              href="https://x.com/georgealexiou_"
              className="text-white hover:text-neutral-300 transition-colors"
            >
              X
            </a>{" "}
            or open an issue on{" "}
            <a
              href="https://github.com/georgealexiou/mimic-releases"
              className="text-white hover:text-neutral-300 transition-colors"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Nav                                                                */
/* ------------------------------------------------------------------ */

function Nav({ page }: { page: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-4">
      <div
        className={`flex items-center justify-between px-5 py-3 w-full max-w-xl rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-white/[0.06] backdrop-blur-xl border border-white/[0.1]"
            : "bg-transparent border border-transparent"
        }`}
        style={
          scrolled
            ? {
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.04), 0 4px 20px rgba(0,0,0,0.3)",
              }
            : undefined
        }
      >
        <a href="#" className="flex items-center gap-2.5">
          <img src="/icon.png" alt="Mimic" className="w-8 h-8 rounded-lg" />
          <span className="text-white font-semibold tracking-tight text-sm">
            Mimic
          </span>
        </a>
        <div className="flex items-center gap-4">
          <a
            href="#about"
            className={`text-xs font-medium transition-colors ${
              page === "about"
                ? "text-white"
                : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            About
          </a>
          <a
            href={DOWNLOAD_URL}
            className="text-xs text-neutral-300 bg-white/[0.06] border border-white/[0.1] backdrop-blur px-4 py-1.5 rounded-full font-medium hover:bg-white/[0.1] transition-colors"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="max-w-3xl mx-auto px-6 pt-32 sm:pt-40 pb-16 text-center">
      <img
        src="/icon.png"
        alt="Mimic"
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-[1.75rem] mx-auto mb-6"
        style={{
          boxShadow:
            "0 8px 40px rgba(92,16,109,0.3), 0 2px 12px rgba(0,0,0,0.4)",
        }}
      />

      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3">
        Mimic
      </h1>

      <p className="text-neutral-400 sm:text-lg max-w-md mx-auto mb-10 leading-relaxed">
        A clipboard manager for macOS.
        <br />
        Copy, find, and transform anything. All from one shortcut.
      </p>

      {/* Keyboard shortcut */}
      <div className="flex items-center justify-center gap-2 sm:gap-2.5 mb-10">
        <Key>⌘</Key>
        <Key>⇧</Key>
        <Key wide>V</Key>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href={DOWNLOAD_URL}
          className="bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-neutral-200 transition-colors"
        >
          Download for macOS
        </a>
        <span className="text-xs text-neutral-500">Free · macOS 26+</span>
      </div>

      <div className="flex items-center justify-center mt-6">
        <a
          href={PRODUCT_HUNT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.08] transition-colors text-xs text-neutral-400 hover:text-neutral-200"
        >
          <span style={{ color: "#FF6154" }}>▲</span>
          Featured on Product Hunt
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Key                                                                */
/* ------------------------------------------------------------------ */

function Key({
  children,
  wide,
}: {
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div
      className={`${wide ? "w-16 sm:w-20" : "w-14 sm:w-16"} h-14 sm:h-16 rounded-xl bg-white/[0.06] backdrop-blur-md border border-white/[0.1] flex items-center justify-center text-lg sm:text-xl text-white/50 font-medium select-none cursor-default transition-transform duration-150 hover:translate-y-0.5`}
      style={{
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.04), 0 2px 8px rgba(0,0,0,0.3)",
      }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Demo                                                               */
/* ------------------------------------------------------------------ */

function Demo() {
  return (
    <section className="max-w-3xl mx-auto px-6 pb-24">
      <div
        className="rounded-2xl border border-white/[0.08] overflow-hidden bg-white/[0.03] backdrop-blur-sm"
        style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.3)" }}
      >
        <video
          src="/demo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full block"
        />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Features                                                           */
/* ------------------------------------------------------------------ */

function Features() {
  return (
    <section className="max-w-xl mx-auto px-6 pb-24">
      <div className="rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/[0.08] overflow-hidden divide-y divide-white/[0.06]">
        <FeatureRow title="History">
          Everything you copy is saved. <Dim>↑↓</Dim> to browse,{" "}
          <Dim>↵</Dim> to paste.
        </FeatureRow>
        <FeatureRow title="Actions">
          Summarize, reformat, spell-check. Without leaving your keyboard.{" "}
          <Dim>Tab</Dim> to open, pick one, done.
        </FeatureRow>
        <FeatureRow title="Private">
          On-device only. No cloud, no account, no data leaves your Mac.
        </FeatureRow>
      </div>
    </section>
  );
}

function FeatureRow({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="px-6 py-5 sm:grid sm:grid-cols-[90px_1fr] sm:gap-6">
      <h3 className="text-white font-medium text-sm mb-1 sm:mb-0">{title}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed">{children}</p>
    </div>
  );
}

function Dim({ children }: { children: React.ReactNode }) {
  return <span className="text-neutral-300">{children}</span>;
}

/* ------------------------------------------------------------------ */
/*  Bottom CTA                                                         */
/* ------------------------------------------------------------------ */

function BottomCTA() {
  return (
    <section className="max-w-3xl mx-auto px-6 pb-20 text-center">
      <div className="rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.06] py-14 px-6">
        <img
          src="/icon.png"
          alt="Mimic"
          className="w-14 h-14 rounded-xl mx-auto mb-5"
        />
        <h2 className="text-xl font-bold text-white mb-2">Try Mimic</h2>
        <p className="text-neutral-500 text-sm mb-8">
          Free. One shortcut. Zero setup.
        </p>
        <a
          href={DOWNLOAD_URL}
          className="bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-neutral-200 transition-colors"
        >
          Download for macOS
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-neutral-600">
      <a
        href="#about"
        className="hover:text-neutral-400 transition-colors"
      >
        George Alexiou
      </a>
    </footer>
  );
}
