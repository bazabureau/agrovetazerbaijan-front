import Image from "next/image"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { partners } from "@/lib/partners"

export const metadata = {
  title: "Partnyorlarımız | Agrovet Azerbaijan",
  description: "Agrovet-in əməkdaşlıq etdiyi beynəlxalq baytarlıq və yem əlavəsi istehsalçıları.",
}

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="flex flex-col pb-24">
        <section className="page-section text-center">
          <h1 className="text-3xl font-semibold text-foreground md:text-4xl">Partnyorlarımız</h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-muted md:text-base">
            Avropa, Asiya və Amerika bazarlarında fəaliyyət göstərən lider istehsalçılarla işləyir,
            məhsullarımızın keyfiyyətini beynəlxalq standartlarla təmin edirik.
          </p>
        </section>

        <section className="page-section pt-0">
          <div className="grid gap-4 md:grid-cols-2">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="card flex items-center justify-between rounded-2xl border border-border bg-surface px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={48}
                      className="h-10 w-auto object-contain"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-xs font-semibold text-brand">
                      {partner.name.charAt(0)}
                    </div>
                  )}
                  <span className="text-sm font-medium text-foreground">{partner.name}</span>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-muted">etibarlı tərəfdaş</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
