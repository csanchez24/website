import type { Metadata } from "next";
import { ActionLink } from "../../components/action-link";
import { PageShell } from "../../components/page-shell";
import { ProjectCaseStudyCard } from "../../components/project-case-study-card";
import { detailedProjects } from "../../lib/site-content";
import { siteConfig } from "../../lib/site-config";

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

        <section className="rounded-4xl border border-line bg-card-strong px-6 py-8 shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:px-8 sm:py-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm font-semibold tracking-[0.18em] uppercase text-accent">
                Role Fit
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                The best fit is a product or platform team that values both
                execution and technical clarity.
              </h2>
              <p className="text-base leading-8 text-muted">
                My background is strongest where product, operations, and
                integrations overlap, and where teams need someone who can
                translate business requirements into working software with clean
                implementation and reliable delivery.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ActionLink href="/contact" tone="primary">
                Contact
              </ActionLink>
              <ActionLink
                href="/carlos-sanchez-resume.pdf"
                tone="secondary"
                external
              >
                Download Resume
              </ActionLink>
            </div>
          </div>
        </section>
    </PageShell>
  );
}
