import { useState } from 'react';
import { ArrowDownRight } from 'lucide-react';
import { PORTFOLIO_PROFILE, QUICK_TRAITS } from '../data/portfolioData';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="mx-auto w-[min(1120px,90%)] pt-14 pb-20 lg:pt-16 lg:pb-24"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
        {/* Left column: Typographic hierarchy & primary actions */}
        <div>
          <p className="mb-5 text-xs font-semibold tracking-[0.14em] text-[#b8f36b] uppercase">
            {PORTFOLIO_PROFILE.availability}
          </p>

          <h1 className="font-display max-w-[660px] text-[clamp(2.65rem,5vw,4.5rem)] leading-[1.08] font-bold tracking-[-0.03em] text-[#f2f5f7]">
            Hi, I&apos;m <span className="text-[#b8f36b]">{PORTFOLIO_PROFILE.name}.</span>
            <br />
            Building things for the web.
          </h1>

          <p className="mt-6 mb-8 max-w-[530px] text-[1.06rem] leading-relaxed text-[#9aa8b4]">
            I&apos;m a Computer Science student who enjoys turning ideas into useful,
            clean and user-friendly digital experiences.
          </p>

          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              className="inline-flex min-h-[44px] items-center gap-4 rounded-[7px] bg-[#b8f36b] px-5 py-3 text-[0.92rem] font-bold text-[#111a10] whitespace-nowrap shrink-0 transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8f36b]"
            >
              <span>Explore my work</span>
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-[44px] items-center rounded-[7px] border border-[#43505b] px-5 py-3 text-[0.92rem] font-bold text-[#f2f5f7] whitespace-nowrap shrink-0 transition-all duration-150 hover:-translate-y-0.5 hover:border-[#b8f36b]/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8f36b]"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>

        {/* Right column: Circular portrait photo */}
        <div className="flex justify-center lg:justify-end">
          {!imgError ? (
            <div className="w-full max-w-[360px] aspect-square overflow-hidden rounded-full border-2 border-[#26323c] bg-[#131c25] shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
              <img
                src={PORTFOLIO_PROFILE.avatarPhoto}
                alt={`${PORTFOLIO_PROFILE.name} portrait`}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="h-full w-full rounded-full object-cover object-top"
              />
            </div>
          ) : (
            <div className="grid w-full max-w-[360px] aspect-square place-items-center rounded-full border-2 border-[#26323c] bg-gradient-to-br from-[#1c2a32] to-[#111a21] font-display text-5xl font-bold text-[#b8f36b]">
              {PORTFOLIO_PROFILE.initials}
            </div>
          )}
        </div>
      </div>

      {/* Full-width quick traits strip below the split */}
      <div className="mt-12 grid grid-cols-1 gap-6 border-t border-[#26323c] pt-8 sm:grid-cols-3">
        {QUICK_TRAITS.map((trait) => (
          <div key={trait.index} className="flex items-baseline gap-4">
            <span className="font-mono text-lg font-bold text-[#b8f36b] tabular-nums">
              {trait.index}
            </span>
            <span className="text-sm text-[#9aa8b4]">{trait.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
