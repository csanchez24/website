import type { Metadata } from "next";
import Image from "next/image";
import { ActionLink } from "@/components/action-link";
import { ExperienceCard } from "@/components/experience-card";
import { MetricCard } from "@/components/metric-card";
import { PageShell } from "@/components/page-shell";
import { SectionIntro } from "@/components/section-intro";
import { SelectedProjectCard } from "@/components/selected-project-card";
import { siteConfig } from "@/lib/site-config";
import {
  experienceHighlights,
  hero,
  proofPoints,
  selectedProjects,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: siteConfig.title,
  description:
    "Senior full-stack software engineer with 15+ years of experience in business software, integrations, internal platforms, and customer-facing products.",
};

export default function Home() {
  return (
    <PageShell
      currentPath="/"
      mainClassName="flex flex-1 flex-col gap-24 pt-12 sm:gap-28 sm:pt-16 lg:gap-32 lg:pt-20"
    >
      <section
        aria-labelledby="home-hero-heading"
        className="grid gap-12 lg:grid-cols-[minmax(0,1.16fr)_minmax(300px,0.84fr)] lg:gap-16 xl:gap-20"
      >
        <div className="space-y-9">
          <p className="w-fit rounded-full border border-line bg-card px-4 py-2 text-xs font-semibold tracking-[0.2em] text-muted uppercase">
            {siteConfig.location}
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-3 text-sm text-muted">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-line bg-card shadow-card">
                <Image
                  src="/carlos-photo.jpg"
                  alt={siteConfig.name}
                  fill
                  priority
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <p className="font-medium">{siteConfig.title}</p>
            </div>

            <div className="space-y-5">
              <h1
                id="home-hero-heading"
                className="max-w-4xl text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-6xl lg:text-[5.1rem] lg:leading-[0.94]"
              >
                {hero.name}
              </h1>
              <p className="max-w-3xl text-xl leading-8 text-foreground/88 sm:text-[1.75rem] sm:leading-10">
                {hero.headline}
              </p>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {hero.supportingCopy}
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-1">
            <div className="flex flex-wrap gap-3">
              <ActionLink href="/projects" tone="primary">
                View Projects
              </ActionLink>
              <ActionLink
                href="/carlos-sanchez-resume.pdf"
                tone="secondary"
                external
              >
                Download Resume
              </ActionLink>
            </div>
            <div className="flex flex-wrap gap-2">
              <ActionLink href={siteConfig.linkedin} tone="utility" external>
                LinkedIn
              </ActionLink>
              <ActionLink href={siteConfig.github} tone="utility" external>
                GitHub
              </ActionLink>
            </div>
          </div>
        </div>

        <aside className="self-start rounded-card-lg border border-line bg-card p-5 shadow-card-lg sm:p-6">
          <p className="text-sm font-semibold tracking-[0.2em] text-muted uppercase">
            Core Strengths
          </p>
          <ul className="mt-5 space-y-2.5">
            {hero.strengths.map((strength) => (
              <li
                key={strength}
                className="flex items-center gap-3 rounded-[1.2rem] border border-line bg-card-strong px-4 py-3.5"
              >
                <span
                  className="h-2.5 w-2.5 rounded-full bg-accent"
                  aria-hidden
                />
                <span className="text-base font-medium text-foreground">
                  {strength}
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section aria-labelledby="impact-metrics-heading" className="space-y-1">
        <h2 id="impact-metrics-heading" className="sr-only">
          Impact metrics
        </h2>
        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {proofPoints.map((point) => (
            <MetricCard
              key={point.label}
              value={point.value}
              label={point.label}
            />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="selected-work-heading"
        className="grid gap-12 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1fr)] lg:gap-16 xl:gap-20"
      >
        <SectionIntro
          eyebrow="Selected Work"
          titleId="selected-work-heading"
          title="Business software with visible outcomes"
          body="A quick snapshot of the work most relevant to product engineering, internal tools, integrations, and customer-facing software roles."
          action={{ href: "/projects", label: "See all projects" }}
        />

        <div className="grid auto-rows-fr gap-5">
          {selectedProjects.map((project) => (
            <SelectedProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="experience-snapshot-heading"
        className="grid gap-10 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1fr)] lg:gap-14 xl:gap-18"
      >
        <SectionIntro
          eyebrow="Experience Snapshot"
          titleId="experience-snapshot-heading"
          title="Product delivery across enterprise and client work"
          body="The common thread has been building practical software for companies that need reliable delivery, clean integrations, and systems that support real operations."
        />

        <div className="space-y-4">
          {experienceHighlights.map((experience) => (
            <ExperienceCard
              key={experience.company}
              experience={experience}
            />
          ))}
        </div>
      </section>

    </PageShell>
  );
}
