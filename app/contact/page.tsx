import type { Metadata } from "next";
import { ContactCard } from "@/components/contact-card";
import { PageShell } from "@/components/page-shell";
import { siteConfig } from "@/lib/site-config";
import { contactChannels } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Carlos J. Sanchez about engineering opportunities.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: `${siteConfig.url}/contact`,
    title: `Contact | ${siteConfig.name}`,
    description: "Contact Carlos J. Sanchez about engineering opportunities.",
  },
};

export default function ContactPage() {
  return (
    <PageShell
      currentPath="/contact"
      mainClassName="flex flex-1 flex-col gap-14 pt-12 sm:gap-18 sm:pt-16 lg:gap-20 lg:pt-18"
    >
      <section className="max-w-4xl space-y-5">
        <p className="text-sm font-semibold tracking-[0.18em] uppercase text-accent">
          Contact
        </p>
        <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Ways to contact me
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
          Here are the main ways to get in touch. Email is usually the best
          option, and LinkedIn, GitHub, and my resume are included below for
          quick reference.
        </p>
      </section>

      <section
        className="grid gap-5 lg:grid-cols-2"
        aria-label="Contact options"
      >
        {contactChannels.map((channel) => (
          <ContactCard key={channel.label} channel={channel} />
        ))}
      </section>
    </PageShell>
  );
}
