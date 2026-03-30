import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";

type PageShellProps = {
  children: React.ReactNode;
  currentPath: string;
  mainClassName: string;
};

export function PageShell({
  children,
  currentPath,
  mainClassName,
}: PageShellProps) {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 sm:px-8 lg:px-12">
      <div className="-mx-5 sm:-mx-8 lg:-mx-12">
        <SiteHeader currentPath={currentPath} />
      </div>
      <main className={mainClassName}>{children}</main>
      <footer className="mt-20 border-t border-line/80 pt-8 pb-10 text-sm text-muted sm:mt-24">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}</p>
      </footer>
    </div>
  );
}
