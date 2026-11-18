import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="border-t border-[#26323c] bg-[#0c1117] py-7">
        <div className="mx-auto flex w-[min(1120px,90%)] flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <a
            href="#home"
            className="font-display text-[1.35rem] font-bold tracking-[-0.04em] text-[#f2f5f7] whitespace-nowrap shrink-0"
          >
            {PORTFOLIO_PROFILE.brand.slice(0, -1)}
            <span className="text-[#b8f36b]">.</span>
          </a>

          <p className="text-xs text-[#84929c]">
            Designed &amp; built for {PORTFOLIO_PROFILE.name}.
          </p>

          <p className="font-mono text-xs text-[#84929c] tabular-nums">
            © {currentYear} {PORTFOLIO_PROFILE.name}
          </p>
        </div>
      </footer>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed right-5 bottom-5 z-40 grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-[#b8f36b] text-[#142015] shadow-lg transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8f36b] ${
          showBackToTop
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2 opacity-0'
        }`}
      >
        <ArrowUp className="h-5 w-5" aria-hidden="true" />
      </button>
    </>
  );
}
