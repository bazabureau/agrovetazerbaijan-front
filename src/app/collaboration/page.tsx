import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export const metadata = {
  title: "Əməkdaşlıq | Agrovet Azerbaijan",
  description: "Agrovet ilə distribyutorluq, satış və texniki əməkdaşlıq imkanları haqqında məlumat alın.",
}

export default function CollaborationPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="flex flex-col pb-24">
        <section className="page-section text-center">
          <h1 className="text-3xl font-semibold text-foreground md:text-4xl">Əməkdaşlıq təklifi</h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-muted md:text-base">
            Distribyutorlar, baytar klinikaları və böyük təsərrüfatlar üçün fərdi məhsul portfeli, təlim və texniki
            dəstək paketləri təklif edirik.
          </p>
        </section>

        <section className="page-section pt-0">
          <form className="grid gap-5 text-sm text-muted">
            <div className="grid gap-2">
              <Label htmlFor="company">Şirkət / təsərrüfat adı</Label>
              <Input id="company" placeholder="Agro Farm MMC" />
            </div>
            <div className="grid gap-2 md:grid-cols-2 md:gap-5">
              <div className="grid gap-2">
                <Label htmlFor="contact">Əlaqə şəxsi</Label>
                <Input id="contact" placeholder="Ad və soyad" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">E-poçt</Label>
                <Input id="email" type="email" placeholder="info@domain.az" />
              </div>
            </div>
            <div className="grid gap-2 md:grid-cols-2 md:gap-5">
              <div className="grid gap-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input id="phone" placeholder="(+994)" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="focus">Əməkdaşlıq istiqaməti</Label>
                <Input id="focus" placeholder="Məsələn: vaksin distribyusiyası" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Qısa təsvir</Label>
              <Textarea
                id="message"
                rows={5}
                placeholder="Təsərrüfat həcmi, məhsul marağı və digər tələbləri qeyd edin"
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="rounded-full px-6 py-3">
                Təklif göndər
              </Button>
            </div>
          </form>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
