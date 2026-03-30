import type { ContactChannel } from "@/lib/site-content";

type ContactCardProps = {
  channel: ContactChannel;
};

export function ContactCard({ channel }: ContactCardProps) {
  const cardClassName = [
    "group block h-full rounded-card border p-6 shadow-card transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30",
    channel.featured
      ? "border-accent/40 bg-card-strong shadow-card-lg hover:border-accent/55 hover:bg-card-strong"
      : "border-line bg-card hover:border-accent/24 hover:bg-card-strong",
  ].join(" ");

  return (
    <a
      href={channel.href}
      target={channel.external ? "_blank" : undefined}
      rel={channel.external ? "noreferrer" : undefined}
      className={cardClassName}
    >
      <p className="text-sm font-semibold tracking-[0.18em] uppercase text-muted">
        {channel.label}
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
        {channel.title}
      </h2>
      {channel.secondaryLine ? (
        <p className="mt-2 text-sm leading-6 text-muted">
          {channel.secondaryLine}
        </p>
      ) : null}
    </a>
  );
}
