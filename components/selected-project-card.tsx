import type { SelectedProject } from "@/lib/site-content";

type SelectedProjectCardProps = {
  project: SelectedProject;
};

export function SelectedProjectCard({ project }: SelectedProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-card border border-line bg-card p-6 shadow-card sm:p-7">
      <p className="text-xs font-medium tracking-[0.06em] text-muted sm:text-sm">
        {project.eyebrow}
      </p>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
        {project.title}
      </h3>
      <p className="mt-4 text-base leading-8 text-muted">{project.summary}</p>
      <div className="mt-6 rounded-[1.25rem] border border-accent/18 bg-accent-soft px-4 py-4">
        <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
          Outcome
        </p>
        <p className="mt-2 text-sm leading-7 text-foreground/90">
          {project.outcome}
        </p>
      </div>
    </article>
  );
}
