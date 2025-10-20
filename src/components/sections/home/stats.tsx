const stats = [
  {
    value: "400+",
    label: "Qeydiyyatlı məhsul",
    description: "Təsdiq edilmiş baytarlıq preparatları və yem əlavələri",
  },
  {
    value: "20+",
    label: "Qlobal partnyor",
    description: "Avropa, Asiya və Amerika istehsalçıları ilə əməkdaşlıq",
  },
  {
    value: "24/7",
    label: "Texniki dəstək",
    description: "Baytar mütəxəssislərdən operativ konsultasiyalar",
  },
];

export function HomeStats() {
  return (
    <section className="page-section pb-14 pt-12">
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className="card flex flex-col gap-2 rounded-2xl border border-border bg-surface/90 p-6 transition duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg animate-in fade-in slide-in-from-bottom-6"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <span className="text-3xl font-semibold text-brand">{item.value}</span>
            <span className="text-base font-medium text-foreground">{item.label}</span>
            <p className="text-sm text-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
