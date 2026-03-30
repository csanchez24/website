import Link from "next/link";
import { navigationLinks } from "../lib/site-content";

type SiteHeaderProps = {
  currentPath: string;
};

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <Link
          href="/"
          className="text-[0.72rem] font-semibold tracking-[0.22em] text-foreground uppercase sm:text-sm sm:tracking-[0.24em]"
        >
          Carlos J. Sanchez
        </Link>
        <nav
          aria-label="Primary"
          className="flex w-full items-center gap-1 overflow-x-auto text-[0.8125rem] text-muted sm:w-auto sm:gap-2 sm:text-sm"
        >
          {navigationLinks.map((item) => {
            const isActive = item.href === currentPath;
            const linkClassName = [
              "rounded-full px-2.5 py-2 whitespace-nowrap transition-colors duration-200 sm:px-3",
              isActive
                ? "bg-card-strong text-foreground"
                : "hover:bg-card hover:text-foreground",
            ].join(" ");

            if (item.external) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={linkClassName}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={linkClassName}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
