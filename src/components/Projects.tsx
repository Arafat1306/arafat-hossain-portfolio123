import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  PROJECTS,
  type ProjectCategory,
  type ProjectItem,
} from '../data/portfolioData';
import ProjectModal, { ProjectVisual } from './ProjectModal';

const FILTER_OPTIONS: { value: ProjectCategory; label: string }[] = [
  { value: 'all', label: 'All projects' },
  { value: 'web', label: 'Web development' },
  { value: 'academic', label: 'Academic' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const visibleProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="mx-auto w-[min(1120px,90%)] py-20 lg:py-24"
    >
      <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-[#b8f36b] uppercase">
            03. Selected Work
          </p>
          <h2 className="font-display text-[clamp(2.1rem,4vw,3.1rem)] leading-[1.12] font-bold tracking-[-0.03em] text-[#f2f5f7]">
            Things I&apos;ve <span className="text-[#b8f36b]">built.</span>
          </h2>
        </div>

        <p className="text-[0.86rem] text-[#9aa8b4]">
          A few practice and academic projects.
        </p>
      </div>

      {/* Interactive Filter Tabs */}
      <div
        role="group"
        aria-label="Filter projects"
        className="mb-8 inline-flex flex-wrap items-center gap-1 rounded-lg border border-[#26323c] bg-[#131c25] p-1"
      >
        {FILTER_OPTIONS.map((option) => {
          const isActive = activeFilter === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => setActiveFilter(option.value)}
              aria-pressed={isActive}
              className={`min-h-[38px] cursor-pointer rounded-md px-4 py-1.5 text-[0.82rem] font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#b8f36b] ${
                isActive
                  ? 'bg-[#b8f36b] font-semibold text-[#142014]'
                  : 'text-[#aeb9c1] hover:text-[#f2f5f7]'
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-[12px] border border-[#27343e] bg-[#131c25] transition-all duration-200 hover:-translate-y-1.5 hover:border-[#637b62]"
          >
            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              className="flex h-full w-full cursor-pointer flex-col text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8f36b]"
            >
              {/* Visual Preview Container */}
              <div className="relative h-[205px] w-full overflow-hidden">
                <span className="font-mono absolute top-3.5 left-4 z-10 text-xs font-medium text-white/75 tabular-nums">
                  {project.number}
                </span>
                <ProjectVisual visualType={project.visualType} />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[0.65rem] font-bold tracking-[0.12em] text-[#b8f36b] uppercase">
                        {project.categoryLabel}
                      </p>
                      <h3 className="font-display mt-1.5 text-[1.22rem] font-semibold tracking-tight text-[#f2f5f7]">
                        {project.title}
                      </h3>
                    </div>

                    <ArrowUpRight
                      className="mt-1 h-5 w-5 shrink-0 text-[#b8f36b] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </div>

                  <p className="mt-3 text-[0.84rem] leading-relaxed text-[#9aa8b4]">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-[#222d37] pt-3.5 font-mono text-[0.72rem] text-[#9aa8b4]">
                  {project.stack.map((tech, idx) => (
                    <span key={tech} className="inline-flex items-center gap-2">
                      {idx > 0 && <span aria-hidden="true">·</span>}
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            </button>
          </article>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
