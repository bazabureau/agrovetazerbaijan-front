import Image from "next/image"

import { partners } from "@/lib/partners"

export function HomePartnersTicker() {
  const sequence = [...partners, ...partners]

  return (
    <section className="page-section pt-0">
      <div className="overflow-hidden rounded-3xl border border-border bg-surface/80 p-5">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
          Etibarlı partnyorlarımız
        </p>
        <div className="relative mt-6 h-20 overflow-hidden">
          <div className="flex w-max animate-marquee gap-6 pr-6">
            {sequence.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex min-w-[190px] items-center justify-center gap-3 rounded-xl border border-border/70 bg-surface px-5 py-3 text-sm text-muted transition hover:-translate-y-1 hover:border-brand/40 hover:text-brand"
              >
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={48}
                    className="h-10 w-auto object-contain"
                  />
                ) : (
                  <span className="text-sm font-medium">{partner.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
