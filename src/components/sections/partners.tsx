import Image from "next/image";

import { partners } from "@/lib/partners";

export function PartnersSection() {
  return (
    <section id="partners" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-white">Qlobal partnyor şəbəkəsi</h2>
        <p className="mt-3 text-base text-slate-200/90">
          Avropa, Asiya və Amerika bazarlarında fəaliyyət göstərən lider
          istehsalçılarla uzunmüddətli əməkdaşlıq.
        </p>
      </div>
      <div className="mt-10 grid gap-3 rounded-3xl border border-white/20 bg-white/75 p-6 text-sm text-[var(--brand-strong)] shadow-lg shadow-slate-900/10 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="rounded-2xl border border-transparent px-4 py-3 transition hover:border-[var(--brand)]/40 hover:bg-[var(--brand-soft)]"
          >
            {partner.logo ? (
              <div className="flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={60}
                  className="h-12 w-auto object-contain"
                  loading="lazy"
                  unoptimized
                />
              </div>
            ) : (
              <span className="text-sm font-medium">{partner.name}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
