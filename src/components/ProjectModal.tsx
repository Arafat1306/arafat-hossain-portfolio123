import { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import type { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectVisual({ visualType }: { visualType: ProjectItem['visualType'] }) {
  if (visualType === 'renthub') {
    return (
      <div className="relative grid h-full w-full place-items-center overflow-hidden bg-gradient-to-br from-[#433d67] to-[#1b203d] p-5">
        <div className="w-[78%] rotate-3 rounded-[8px] bg-[#eeeaf8] p-5 text-[#292442] shadow-[0_15px_30px_rgba(0,0,0,0.28)]">
          <div className="font-display text-[1.3rem] font-bold leading-none">RentHub</div>
          <div className="mt-1 text-[0.52rem] font-medium tracking-[0.16em] text-[#4d4575]">
            RENT ANYTHING, ANYTIME
          </div>
          <div className="mt-3.5 flex gap-2">
            <div className="h-9 flex-1 rounded-[5px] bg-[#a8a0d0]" />
            <div className="h-9 flex-1 rounded-[5px] bg-[#e6b9a9]" />
            <div className="h-9 flex-1 rounded-[5px] bg-[#b8c9b2]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative grid h-full w-full place-items-center overflow-hidden bg-gradient-to-br from-[#35444d] to-[#17252e] p-5">
      <div className="w-[82%] rounded-[7px] border border-[#667b77] bg-[#0b1419] p-4 font-mono text-[0.7rem] text-[#b8f36b] shadow-[0_15px_30px_rgba(0,0,0,0.35)]">
        <p className="mb-2 text-[#8b9a9b]">$ ./library.sh</p>
        <p className="font-bold text-[0.75rem]">LIBRARY MANAGEMENT</p>
        <div className="mt-2 space-y-0.5 text-[0.66rem] leading-snug text-[#c2d1cc]">
          <div>1. Add book</div>
          <div>2. View books</div>
          <div>3. Search book</div>
          <div>4. Issue book</div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-[#2f3d48] bg-[#131c25] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0c1117]/80 text-[#f2f5f7] transition-colors hover:bg-[#b8f36b] hover:text-[#111a10] focus-visible:outline-2 focus-visible:outline-[#b8f36b]"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="h-56 w-full sm:h-64">
          <ProjectVisual visualType={project.visualType} />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#9aa8b4]">
            <span className="font-semibold tracking-[0.12em] text-[#b8f36b] uppercase">
              {project.categoryLabel}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{project.year}</span>
            <span aria-hidden="true">·</span>
            <span>{project.role}</span>
          </div>

          <h3
            id="project-modal-title"
            className="font-display mt-2 text-2xl font-bold tracking-tight text-[#f2f5f7]"
          >
            {project.title}
          </h3>

          <p className="mt-3 text-[0.95rem] leading-relaxed text-[#9aa8b4]">
            {project.summary}
          </p>

          <div className="mt-6 border-t border-[#26323c] pt-5">
            <h4 className="font-display text-sm font-semibold text-[#f2f5f7]">
              Key Implementation Highlights
            </h4>
            <ul className="mt-3 space-y-2.5">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[0.88rem] text-[#c0c9d0]"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#b8f36b]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#26323c] pt-5">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#b5c0c7]">
              {project.stack.map((tech, idx) => (
                <span key={tech} className="inline-flex items-center gap-2">
                  {idx > 0 && <span aria-hidden="true">·</span>}
                  <span>{tech}</span>
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-[7px] border border-[#3a4954] px-4 py-2 text-xs font-semibold text-[#f2f5f7] transition-colors hover:border-[#b8f36b] hover:text-[#b8f36b]"
            >
              Close preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
