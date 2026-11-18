import { Code2, Compass, Layout, Server } from 'lucide-react';
import { SKILLS, type SkillItem } from '../data/portfolioData';

function SkillIcon({ name }: { name: SkillItem['iconName'] }) {
  const props = { className: 'h-6 w-6 text-[#b8f36b]', 'aria-hidden': true as const };
  switch (name) {
    case 'layout':
      return <Layout {...props} />;
    case 'code':
      return <Code2 {...props} />;
    case 'server':
      return <Server {...props} />;
    case 'compass':
      return <Compass {...props} />;
  }
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-[#1c2932] bg-[#101820] py-20 lg:py-24"
    >
      <div className="mx-auto w-[min(1120px,90%)]">
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-[#b8f36b] uppercase">
            02. My Toolkit
          </p>
          <h2 className="font-display text-[clamp(2.1rem,4vw,3.1rem)] leading-[1.12] font-bold tracking-[-0.03em] text-[#f2f5f7]">
            Skills I&apos;m <span className="text-[#b8f36b]">working with.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((skill) => (
            <article
              key={skill.id}
              className="flex flex-col justify-between rounded-[10px] border border-[#293640] bg-[#151f28] p-6 transition-colors duration-150 hover:border-[#41535f]"
            >
              <div>
                <div className="mb-5">
                  <SkillIcon name={skill.iconName} />
                </div>
                <h3 className="font-display text-[1.15rem] font-semibold tracking-tight text-[#f2f5f7]">
                  {skill.title}
                </h3>
                <p className="mt-2 text-[0.84rem] text-[#9aa8b4]">{skill.tools}</p>
                <p className="mt-3 text-[0.8rem] leading-relaxed text-[#7c8c99]">
                  {skill.focus}
                </p>
              </div>

              <div className="mt-6">
                <div className="mb-1.5 flex items-center justify-between text-[0.72rem] text-[#8594a0]">
                  <span>Focus level</span>
                  <span className="font-mono tabular-nums text-[#b8f36b]">
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-[#34414a]">
                  <div
                    className="h-full rounded-full bg-[#b8f36b]"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-xs text-[#75838d]">
          Skill levels are illustrative — reflecting current hands-on coursework and personal projects.
        </p>
      </div>
    </section>
  );
}
