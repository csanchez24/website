import type { Metadata } from "next";
import Image from "next/image";
import { ActionLink } from "../components/action-link";
import { ExperienceCard } from "../components/experience-card";
import { MetricCard } from "../components/metric-card";
import { PageShell } from "../components/page-shell";
import { SectionIntro } from "../components/section-intro";
import { SelectedProjectCard } from "../components/selected-project-card";
import {
  experienceHighlights,
  hero,
  proofPoints,
  selectedProjects,
} from "../lib/site-content";
import { siteConfig } from "../lib/site-config";

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
              Ottawa, Ontario, Canada
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-3 text-sm text-muted">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-line bg-card shadow-[0_14px_30px_rgba(0,0,0,0.18)]">
                  <Image
                    src="/carlos-photo.jpg"
                    alt="Carlos J. Sanchez"
                    fill
                    priority
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <p className="font-medium">Full-Stack Software Engineer</p>
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
                <ActionLink
                  href="https://www.linkedin.com/in/carlosjsancheze/"
                  tone="utility"
                  external
                >
                  LinkedIn
                </ActionLink>
                <ActionLink
                  href="https://github.com/csanchez24"
                  tone="utility"
                  external
                >
                  GitHub
                </ActionLink>
              </div>
            </div>
          </div>

          <aside className="self-start rounded-[2rem] border border-line bg-card p-5 shadow-[0_24px_56px_rgba(0,0,0,0.18)] sm:p-6">
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

        <section
          aria-labelledby="home-final-cta-heading"
          className="rounded-[2rem] border border-line bg-card-strong p-6 shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
                Let&apos;s Connect
              </p>
              <h2
                id="home-final-cta-heading"
                className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
              >
                Open to product, platform, and full-stack engineering
                opportunities
              </h2>
              <p className="text-base leading-7 text-muted sm:text-lg">
                I&apos;m open to roles focused on product engineering, internal
                platforms, API integrations, and customer-facing software. You
                can explore my projects, download my resume, or connect with me
                directly.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:max-w-md lg:justify-end">
              <ActionLink
                href="/carlos-sanchez-resume.pdf"
                tone="primary"
                external
              >
                Resume
              </ActionLink>
              <ActionLink
                href="https://www.linkedin.com/in/carlosjsancheze/"
                tone="utility"
                external
              >
                LinkedIn
              </ActionLink>
              <ActionLink
                href="https://github.com/csanchez24"
                tone="utility"
                external
              >
                GitHub
              </ActionLink>
              <ActionLink href="/contact" tone="utility">
                Contact
              </ActionLink>
            </div>
          </div>
        </section>
    </PageShell>
  );
}
