import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HomeHero() {
  return (
    <section className="page-section relative flex max-w-6xl flex-col gap-10 overflow-hidden rounded-[2.25rem] border border-border bg-surface px-6 pb-16 pt-14 text-center shadow-subtle md:px-10">
      <div className="pointer-events-none absolute inset-0 bg-grid-neutral opacity-40 mask-fade-b" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-1/2 h-64 w-[32rem] translate-x-1/2 rounded-full bg-brand/15 blur-3xl animate-float-slow" />

      <div className="relative flex justify-center animate-in fade-in">
        <Badge variant="accent" className="animate-in zoom-in-95 duration-700">
          2007-dən bu günə
        </Badge>
      </div>

      <div className="relative space-y-6 animate-in fade-in-0 slide-in-from-bottom-8 duration-700">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Heyvandarlıq və quşçuluq üçün
          <span className="block text-brand"> data əsaslı baytarlıq platforması</span>
        </h1>
        <p className="mx-auto max-w-3xl text-base text-muted md:text-lg">
          Agrovet Azərbaycan təsərrüfatları üçün yüksək keyfiyyətli baytarlıq preparatları, yem əlavələri
          və konsultinq xidməti təqdim edir. AI-assisted kataloq sayəsində simptomlara əsaslanan məhsul seçimi
          saniyələr ərzində tamamlanır.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/products">
              Məhsul kataloquna keç
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/products#assistant">AI asistenti sına</Link>
          </Button>
        </div>
      </div>

      <div className="relative grid gap-4 rounded-2xl border border-border bg-surface/70 p-6 text-left shadow-sm backdrop-blur-sm md:grid-cols-3">
        <div className="animate-in fade-in slide-in-from-left-8 duration-700">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">AI insight</p>
          <h3 className="mt-2 text-sm font-medium text-foreground">
            Simptom əsaslı tövsiyələr 92% uyğunluqla təsdiqlənib
          </h3>
        </div>
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">Operativlik</p>
          <h3 className="mt-2 text-sm font-medium text-foreground">
            Təsərrüfat sorğularına orta cavab müddəti 2 saatdan azdır
          </h3>
        </div>
        <div className="flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-semibold text-brand animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
          <Sparkles className="h-4 w-4" />
          24/7 texniki dəstək xətti
        </div>
      </div>
    </section>
  )
}
