import { ClipboardList, Microscope, ShieldCheck, Workflow } from "lucide-react"

const capabilities = [
  {
    title: "Məhsul məlumatları",
    description: "Baytarlıq preparatları və yem əlavələri üçün strukturlaşdırılmış kataloq.",
    icon: ClipboardList,
  },
  {
    title: "AI tövsiyə mühərriki",
    description: "Simptomlara əsaslanan intelligent məhsul seçici və doza xatırlatmaları.",
    icon: Workflow,
  },
  {
    title: "Konsultinq və formulasiya",
    description: "Təsərrüfat performansını artırmaq üçün fərdi formulasiya və məsləhət.",
    icon: Microscope,
  },
  {
    title: "Keyfiyyət və təhlükəsizlik",
    description: "Qlobal partnyor auditləri, sənədləşmə və tətbiq protokolları.",
    icon: ShieldCheck,
  },
]

export function HomeCapabilities() {
  return (
    <section className="page-section">
      <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-3 animate-in fade-in slide-in-from-left-8">
          <h2 className="text-2xl font-semibold text-foreground">Agrovet ekosistemi</h2>
          <p className="text-sm text-muted">
            Məhsul portfeli, AI dəstəyi və mütəxəssis komandası ilə təsərrüfatın hər mərhələsində dayaq olur.
          </p>
        </div>
        <div className="grid flex-1 gap-4 md:grid-cols-2">
          {capabilities.map((item, index) => (
            <div
              key={item.title}
              className="card group flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 transition duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl animate-in fade-in slide-in-from-bottom-6"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <item.icon className="h-6 w-6 text-brand transition duration-500 group-hover:scale-110" />
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
