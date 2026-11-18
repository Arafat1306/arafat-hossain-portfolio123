import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback: ignore if clipboard API unavailable
    }
  };

  return (
    <section id="contact" className="bg-[#b8f36b] py-20 text-[#142015] lg:py-24">
      <div className="mx-auto w-[min(1120px,90%)]">
        <p className="mb-4 text-xs font-bold tracking-[0.14em] text-[#38572d] uppercase">
          04. Get in Touch
        </p>

        <h2 className="font-display max-w-4xl text-[clamp(2.8rem,6.5vw,5.2rem)] leading-[1.04] font-bold tracking-[-0.03em] text-[#142015]">
          Have an idea?
          <br />
          <span className="text-[#4a6f37]">Let&apos;s build it.</span>
        </h2>

        <p className="mt-6 mb-8 max-w-xl text-base text-[#374c33] sm:text-lg">
          I&apos;m open to learning opportunities, collaborations and interesting
          projects.
        </p>

        <div className="flex flex-wrap items-center gap-3.5">
          <a
            href={`mailto:${PORTFOLIO_PROFILE.email}`}
            className="inline-flex min-h-[46px] items-center gap-3 rounded-[7px] bg-[#132119] px-5 py-3 text-[0.92rem] font-bold text-[#eff9e8] whitespace-nowrap shrink-0 transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#132119]"
          >
            <Mail className="h-4 w-4 text-[#b8f36b]" aria-hidden="true" />
            <span>Send me an email</span>
            <ArrowUpRight className="h-4 w-4 text-[#b8f36b]" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex min-h-[46px] cursor-pointer items-center gap-2.5 rounded-[7px] border border-[#142015]/30 bg-transparent px-4 py-3 text-[0.88rem] font-semibold text-[#142015] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#142015]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#142015]"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" aria-hidden="true" />
                <span>Copied {PORTFOLIO_PROFILE.email}</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" aria-hidden="true" />
                <span>Copy email</span>
              </>
            )}
          </button>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-7 text-sm font-bold text-[#142015]">
          {PORTFOLIO_PROFILE.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#142015]"
            >
              <span>{social.label}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
