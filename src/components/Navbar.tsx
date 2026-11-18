import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-white/[0.06] bg-[#0c1117]/88 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] w-[min(1120px,90%)] items-center justify-between gap-8">
        {/* Zone 1: Single text element brand mark */}
        <a
          href="#home"
          className="font-display text-[1.65rem] font-bold tracking-[-0.04em] text-[#f2f5f7] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b8f36b]"
        >
          {PORTFOLIO_PROFILE.brand.slice(0, -1)}
          <span className="text-[#b8f36b]">.</span>
        </a>

        {/* Zone 2: 4 concise single-line navigation links */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-8 text-[0.92rem] text-[#c0c9d0]"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#b8f36b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b8f36b]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + mobile menu trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-[7px] border border-[#46534a] px-4 py-2 text-[0.9rem] font-medium text-[#f2f5f7] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#b8f36b] hover:text-[#b8f36b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8f36b]"
          >
            <span>Contact me</span>
            <ArrowUpRight className="h-4 w-4 text-[#b8f36b]" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-[#f2f5f7] transition-colors hover:bg-white/5 md:hidden focus-visible:outline-2 focus-visible:outline-[#b8f36b]"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-[#26323c] bg-[#111a21] px-[5%] py-5 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="py-1 text-base text-[#c0c9d0] transition-colors hover:text-[#b8f36b]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-1 inline-flex w-fit items-center gap-2 rounded-[7px] border border-[#46534a] px-4 py-2.5 text-sm font-medium text-[#f2f5f7] transition-colors hover:border-[#b8f36b]"
            >
              <span>Contact me</span>
              <ArrowUpRight className="h-4 w-4 text-[#b8f36b]" aria-hidden="true" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
