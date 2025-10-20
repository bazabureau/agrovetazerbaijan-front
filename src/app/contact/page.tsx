import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export const metadata = {
  title: "Əlaqə | Agrovet Azerbaijan",
  description: "Agrovet komandası ilə əlaqə saxlayın, məhsul və xidmətlər barədə suallarınızı göndərin.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="flex flex-col pb-24">
        <section className="page-section text-center">
          <h1 className="text-3xl font-semibold text-foreground md:text-4xl">Bizimlə əlaqə</h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-muted md:text-base">
            Məhsullar, qiymətlər və texniki dəstək haqqında suallarınızı komandanıza yönləndirin. Sizinlə ən qısa zamanda
            əlaqə saxlanılacaq.
          </p>
        </section>

        <section className="page-section grid gap-8 pt-0 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 rounded-3xl border border-border bg-surface px-6 py-8">
            <form className="grid gap-5 text-sm text-muted">
              <div className="grid gap-2 md:grid-cols-2 md:gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="name">Ad və soyad</Label>
                  <Input id="name" placeholder="Adınızı daxil edin" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">E-poçt</Label>
                  <Input id="email" type="email" placeholder="info@domain.az" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Mövzu</Label>
                <Input id="subject" placeholder="Məsələn: Məhsul sifarişi" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Mesaj</Label>
                <Textarea id="message" rows={5} placeholder="Sualınızı və ya müraciətinizi qeyd edin" />
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="rounded-full px-6 py-3">
                  Mesaj göndər
                </Button>
              </div>
            </form>
          </div>

          <div className="space-y-4 rounded-3xl border border-border bg-surface px-6 py-8 text-sm text-muted">
            <h2 className="text-lg font-semibold text-foreground">Ofis və əlaqə</h2>
            <p>Tel: (+994 12) 000 00 00</p>
            <p>E-poçt: info@agrovetazerbaijan.az</p>
            <p>Ünvan: Bakı şəhəri, Nərimanov r., Aqro parkı, Agrovet mərkəzi</p>
            <div className="rounded-2xl border border-border bg-muted/10 px-4 py-5 text-xs text-muted">
              İş saatları: B.e - Cümə, 09:00 - 18:00. Təxirəsalınmaz hallarda 24/7 növbətçi xətt aktivdir.
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
