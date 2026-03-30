import Link from "next/link";

const actionLinkStyles = {
  primary:
    "inline-flex items-center justify-center rounded-full bg-accent px-5 py-3.5 text-sm font-semibold text-accent-foreground shadow-[0_16px_36px_rgba(240,138,54,0.18)] transition-colors hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
  secondary:
    "inline-flex items-center justify-center rounded-full border border-line bg-card-strong px-5 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/40 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/25",
  utility:
    "inline-flex items-center justify-center rounded-full border border-line/80 bg-card/60 px-4 py-3 text-sm font-medium text-foreground/88 transition-colors hover:border-accent/35 hover:bg-card hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/20",
} as const;

export type ActionLinkTone = keyof typeof actionLinkStyles;

type ActionLinkProps = {
  children: React.ReactNode;
  href: string;
  tone: ActionLinkTone;
  external?: boolean;
  className?: string;
};

export function ActionLink({
  children,
  href,
  tone,
  external = false,
  className = "",
}: ActionLinkProps) {
  const combinedClassName = `${actionLinkStyles[tone]} ${className}`.trim();

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={combinedClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClassName}>
      {children}
    </Link>
  );
}
