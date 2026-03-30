import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { ProjectCaseStudyCard } from "@/components/project-case-study-card";
import { siteConfig } from "@/lib/site-config";
import { detailedProjects } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected full-stack software engineering projects across integrations, customer-facing product development, internal platforms, and delivery systems.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    url: `${siteConfig.url}/projects`,
    title: `Projects | ${siteConfig.name}`,
    description:
      "Selected full-stack software engineering projects across integrations, customer-facing product development, internal platforms, and delivery systems.",
  },
};

export default function ProjectsPage() {
  return (
    <PageShell
      currentPath="/projects"
      mainClassName="flex flex-1 flex-col gap-14 pt-12 sm:gap-18 sm:pt-16 lg:gap-20 lg:pt-18"
    >
      <section className="max-w-4xl space-y-5">
        <p className="text-sm font-semibold tracking-[0.18em] uppercase text-accent">
          Projects
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Practical software work with measurable impact
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
          These examples show the kind of engineering work I have done across
          integrations, customer-facing product development, internal
          platforms, and delivery systems.
        </p>
      </section>

      <section className="grid gap-7" aria-label="Project case studies">
        {detailedProjects.map((project) => (
          <ProjectCaseStudyCard key={project.title} project={project} />
        ))}
      </section>

    </PageShell>
  );
}
