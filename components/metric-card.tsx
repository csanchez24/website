type MetricCardProps = {
  value: string;
  label: string;
};

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <article className="flex h-full min-h-[168px] flex-col justify-between rounded-[1.75rem] border border-line bg-card p-6 shadow-[0_20px_48px_rgba(0,0,0,0.16)] sm:p-7">
      <p className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {value}
      </p>
      <p className="max-w-[24ch] text-sm leading-6 text-muted">{label}</p>
    </article>
  );
}
