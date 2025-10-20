import { ClipboardList, FlaskConical, Handshake, Headset, Microscope } from "lucide-react";

const services = [
  {
    title: "Məhsul məlumatları",
    description:
      "Baytarlıq preparatları, yem əlavələri və dezinfektantlar haqqında geniş məlumat bazası.",
    icon: ClipboardList,
  },
  {
    title: "Qiymət və ödəmə şərtləri",
    description:
      "Şəffaf təkliflər, çevik ödəniş planları və iri təsərrüfatlar üçün xüsusi paketlər.",
    icon: Handshake,
  },
  {
    title: "Texniki dəstək",
    description:
      "Mütəxəssis komandamız məhsul seçimi, tətbiq və təhlükəsizlik barədə operativ dəstək verir.",
    icon: Headset,
  },
  {
    title: "Konsultinq",
    description:
      "Heyvandarlıq və quşçuluq təsərrüfatlarının performansını artırmaq üçün strateji məsləhətlər.",
    icon: Microscope,
  },
  {
    title: "Fərdi formulasiya",
    description:
      "İstənilən tərkibli dərman və yem əlavələrinin hazırlanması üçün Ar-Ge resursları.",
    icon: FlaskConical,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-white">
          Heyvandarlıq üçün tam xidmət spektri
        </h2>
        <p className="mt-3 text-base text-slate-200/90">
          Agrovet təsərrüfatların ehtiyaclarını yalnız məhsul təminatı ilə deyil,
          həm də strateji dəstək və konsultinq ilə qarşılayır.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 p-6 text-slate-700 shadow-lg shadow-slate-900/10 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <service.icon className="mb-4 h-10 w-10 text-[var(--brand)]" />
            <h3 className="text-lg font-semibold text-[var(--brand-strong)]">
              {service.title}
            </h3>
            <p className="mt-3 text-sm text-slate-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
