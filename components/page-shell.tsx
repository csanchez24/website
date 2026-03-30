import { SiteHeader } from "./site-header";

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
    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
      <div className="-mx-5 sm:-mx-8 lg:-mx-12">
        <SiteHeader currentPath={currentPath} />
      </div>
      <main className={mainClassName}>{children}</main>
    </div>
  );
}
