import { Sparkles } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function HomeAssistantIntro() {
  return (
    <section className="page-section pt-0">
      <div className="flex flex-col gap-6 rounded-3xl border border-border bg-surface px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-brand/10 text-brand">
            <Sparkles className="h-6 w-6" />
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">
              AI məhsul asistenti ilə saniyələrə qənaət edin
            </h2>
            <p className="text-sm text-muted">
              Simptomları daxil edin, heyvan növünü seçin və Agrovet kataloqundan uyğun məhsul tövsiyələrini
              dərhal əldə edin. Analitik skor və izahat sayəsində qərar vermək asandır.
            </p>
          </div>
        </div>
        <Button asChild size="lg" className="rounded-full">
          <Link href="/products#assistant">Assistentə keç</Link>
        </Button>
      </div>
    </section>
  )
}
