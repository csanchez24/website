import type { ExperienceHighlight } from "@/lib/site-content";

type ExperienceCardProps = {
  experience: ExperienceHighlight;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="rounded-card border border-line bg-card p-6 shadow-card sm:p-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-foreground">
            {experience.company}
          </h3>
          <p className="text-sm text-muted">{experience.role}</p>
        </div>
        <p className="text-sm text-muted">{experience.period}</p>
      </div>
      <p className="mt-5 text-base leading-8 text-muted">
        {experience.summary}
      </p>
    </article>
  );
}
