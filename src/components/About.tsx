import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto w-[min(1120px,90%)] py-20 lg:py-24"
    >
      <div className="mb-12">
        <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-[#b8f36b] uppercase">
          01. About Me
        </p>
        <h2 className="font-display text-[clamp(2.1rem,4vw,3.1rem)] leading-[1.12] font-bold tracking-[-0.03em] text-[#f2f5f7]">
          A little about <span className="text-[#b8f36b]">myself.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
        <p className="font-display max-w-[440px] text-[1.5rem] leading-[1.35] font-semibold tracking-[-0.02em] text-[#f2f5f7] sm:text-[1.75rem]">
          I like learning how technology works and using that knowledge to solve
          real problems.
        </p>

        <div className="max-w-[520px] space-y-4 text-[0.98rem] leading-[1.7] text-[#9aa8b4]">
          <p>
            I&apos;m currently studying Computer Science and Engineering at{' '}
            <span className="text-[#f2f5f7]">{PORTFOLIO_PROFILE.university}</span>.
            My interests include web development, software engineering and
            building practical projects.
          </p>
          <p>
            I believe in learning by doing: start with an idea, build a small
            version, improve it, and keep learning along the way.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-bold text-[#b8f36b] transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b8f36b]"
            >
              <span>Have a project in mind?</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
