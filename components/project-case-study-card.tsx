import { ActionLink } from "@/components/action-link";
import type { DetailedProject } from "@/lib/site-content";

type ProjectCaseStudyCardProps = {
  project: DetailedProject;
};

export function ProjectCaseStudyCard({ project }: ProjectCaseStudyCardProps) {
  return (
    <article className="rounded-card-lg border border-line bg-card p-6 shadow-card-lg sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.16em] uppercase text-accent">
            {project.category}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-[2rem]">
            {project.title}
          </h2>
        </div>
        <ul className="flex max-w-xl flex-wrap gap-2 lg:justify-end">
          {project.tech.map((item) => (
            <li
              key={item}
              className="rounded-full border border-line bg-card-strong px-3 py-1.5 text-xs font-medium tracking-[0.04em] text-foreground/80"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {project.links?.length ? (
        <div className="mt-6 flex flex-wrap gap-2.5">
          {project.links.map((link) => (
            <ActionLink
              key={`${project.title}-${link.label}`}
              href={link.href}
              tone={link.tone ?? "secondary"}
              external
            >
              {link.label}
            </ActionLink>
          ))}
        </div>
      ) : null}

      <div className="mt-8 grid auto-rows-fr gap-5 lg:grid-cols-3">
        <div className="rounded-[1.5rem] border border-line/80 bg-card-strong p-5">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-muted">
            Challenge
          </p>
          <p className="mt-3 text-base leading-8 text-muted">
            {project.challenge}
          </p>
        </div>
        <div className="rounded-[1.5rem] border border-line/80 bg-card-strong p-5">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-muted">
            Approach
          </p>
          <p className="mt-3 text-base leading-8 text-muted">
            {project.approach}
          </p>
        </div>
        <div className="rounded-[1.5rem] border border-accent/20 bg-accent-soft p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-accent">
            Outcome
          </p>
          <p className="mt-3 text-base leading-8 font-medium text-foreground">
            {project.outcome}
          </p>
        </div>
      </div>
    </article>
  );
}
