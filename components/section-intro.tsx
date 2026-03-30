import Link from "next/link";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  body: string;
  titleId?: string;
  action?: {
    href: string;
    label: string;
  };
};

export function SectionIntro({
  eyebrow,
  title,
  body,
  titleId,
  action,
}: SectionIntroProps) {
  return (
    <div className="max-w-xl space-y-5">
      <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </h2>
      <p className="text-base leading-8 text-muted sm:text-lg">{body}</p>
      {action ? (
        <Link
          href={action.href}
          className="inline-flex items-center rounded-full border border-line bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/35 hover:bg-card-strong"
        >
          {action.label}
        </Link>
      ) : null}
    </div>
  );
}
