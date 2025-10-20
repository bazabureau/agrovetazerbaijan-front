import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  Handshake,
  HeartPulse,
  Leaf,
  Lightbulb,
  Microscope,
  Users2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Agrovet haqqında | Agrovet Azerbaijan",
  description:
    "Agrovet Azerbaijan heyvandarlıq və quşçuluq təsərrüfatları üçün yüksək keyfiyyətli preparatlar, yem əlavələri və texniki dəstək təqdim edən innovativ baytarlıq ekosistemidir.",
};

type ValueCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Milestone = {
  year: string;
  title: string;
  description: string;
};

type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const valueCards: ValueCard[] = [
  {
    title: "Tədqiqat yönümlü yanaşma",
    description:
      "Sahə müşahidələri, laborator analizlər və bazar məlumatları əsasında hər məhsul üçün dəqiq istifadə protokolları hazırlayırıq.",
    icon: Microscope,
  },
  {
    title: "Sahə ilə bir addımda",
    description:
      "Baytar həkimlərimiz regionlarda mütəmadi səfərlərdədir və təsərrüfatların ehtiyaclarını real vaxtda qiymətləndirirlər.",
    icon: HeartPulse,
  },
  {
    title: "Davamlılıq və məsuliyyət",
    description:
      "Ətraf mühitə minimum təsir və heyvan rifahının artırılması üçün dayanıqlı praktikaları prioritet edirik.",
    icon: Leaf,
  },
];

const milestones: Milestone[] = [
  {
    year: "2007",
    title: "Agrovetin yaranması",
    description:
      "Heyvandarlıq sektorunda dünya səviyyəli preparatların Azərbaycana gətirilməsi missiyası ilə fəaliyyətə başladıq.",
  },
  {
    year: "2012",
    title: "İlk regional laboratoriya",
    description:
      "Simptom əsaslı diaqnostika üçün regionun aparıcı baytar laboratoriyalarından biri ilə strateji tərəfdaşlıq quruldu.",
  },
  {
    year: "2018",
    title: "AI kataloq əsaslarının qoyulması",
    description:
      "Məhsul metadataları və təsərrüfat məlumatlarını strukturlaşdıraraq AI tövsiyə mühərrikinin təməlini qoyduq.",
  },
  {
    year: "2024",
    title: "Tam rəqəmsal platformaya keçid",
    description:
      "Agrovet Assistant və yeni UI/UX ilə məhsul seçimi, məsləhət və logistika prosesləri tam rəqəmsallaşdırıldı.",
  },
];

const capabilities: Capability[] = [
  {
    title: "Baytar ekspertizasının mərkəzi",
    description:
      "Klinik simptomların interpretasiyası və təsərrüfat ssenarilərinə uyğun məhsul kombinləri hazırlanır.",
    icon: Users2,
  },
  {
    title: "Operativ tədarük zənciri",
    description:
      "Soyuq zəncir logistikasını və regional paylama nöqtələrini optimallaşdıraraq məhsulların vaxtında çatdırılmasına zəmanət veririk.",
    icon: Building2,
  },
  {
    title: "Uzunmüddətli partnyorluq",
    description:
      "35-dən çox beynəlxalq istehsalçı ilə strateji əməkdaşlıq müstəsna keyfiyyəti və orijinal məhsul təminatını mümkün edir.",
    icon: Handshake,
  },
  {
    title: "İnnovasiya və təlim",
    description:
      "AI əsaslı təlim sessiyaları və təsərrüfat ssenarilərinə uyğun masterclass proqramları müştərilər üçün həllər yaradır.",
    icon: Lightbulb,
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-col">
        <div className="pb-24">
      <section className="page-section pb-10">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-border bg-surface px-6 py-14 shadow-subtle md:px-12 md:py-16">
          <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[38rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-36 right-1/3 h-72 w-[40rem] translate-x-1/3 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative space-y-10">
            <Badge variant="accent" className="w-fit rounded-full px-5 py-1 text-xs uppercase">
              Agrovet ekosistemi
            </Badge>

            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                Heyvandarlıq sektorunda{" "}
                <span className="text-brand">dayanıqlı innovasiya missiyası</span>
              </h1>
              <p className="max-w-3xl text-base text-muted md:text-lg">
                Agrovet Azerbaijan 2007-ci ildən etibarən baytarlıq və zoobaytarlıq
                məhsullarının idxalı, distribusiyası və konsultinqini yeni səviyyəyə
                qaldırır. Şirkətimiz təsərrüfatların rentabelliyini artırmaq üçün elmə əsaslanan
                proqramlar və AI həllər təqdim edir.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Təsis ili", value: "2007" },
                { label: "Qlobal partnyor", value: "35+" },
                { label: "Məhsul portfeli", value: "400+" },
                { label: "Regional müştəri", value: "1200+" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border bg-surface/80 px-5 py-6 text-center shadow-sm backdrop-blur"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                    {item.label}
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="grid gap-6 md:grid-cols-[0.7fr_1fr]">
          <Card className="rounded-[2rem] border border-border/80 bg-surface/90 p-8">
            <CardHeader className="space-y-3 p-0">
              <CardTitle className="text-2xl text-foreground">Kimik?</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Baytar həkim, qida mühəndisi və data mütəxəssislərindən ibarət komandamız
                hər bir təsərrüfat üçün fərdi proqramlar tərtib edir. Əsas hədəfimiz məhsuldarlığın
                yüksəldilməsi və xəstəlik risklərinin minimuma endirilməsidir.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 p-0">
              <div className="rounded-2xl border border-dashed border-border/70 bg-muted/5 p-5 text-sm text-muted">
                <p>
                  İdxal etdiyimiz preparatlar Avropa və ABŞ istehsalçılarının GMP sertifikatlı
                  zavodlarında hazırlanır. Agrovet keyfiyyət laboratoriyası hər partiyanı
                  yoxlayaraq ölkəyə daxil olmadan əvvəl uyğunluğa əmin olur.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border/70 bg-surface p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted">Əsas fokus</p>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    Heyvandarlıq və quşçuluq təsərrüfatları üçün komplekt həllər
                  </p>
                </div>
                <div className="rounded-xl border border-border/70 bg-surface p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted">Motto</p>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    Elm, texnologiya və sahə təcrübəsi bir platformada
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-5 md:grid-cols-3">
            {valueCards.map((item) => (
              <Card
                key={item.title}
                className="rounded-[1.75rem] border border-border/70 bg-surface/90 p-6 shadow-subtle transition hover:-translate-y-1"
              >
                <CardHeader className="p-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-4 text-lg text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm leading-relaxed text-muted">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="rounded-[2.5rem] border border-border bg-surface/95 p-6 shadow-subtle md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
                17 illik transformasiya səyahətimiz
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted md:text-base">
                Təsərrüfatların inkişafına yönəlmiş layihələrdən AI əsaslı platformaya qədər
                olan yolumuz davamlı innovasiya və nəzarətli keyfiyyət prosesləri ilə
                dəstəklənir.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {milestones.map((milestone) => (
              <Card
                key={milestone.year}
                className="relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-surface/90 p-6"
              >
                <div className="pointer-events-none absolute -top-12 right-0 h-24 w-24 rounded-full bg-brand/10 blur-3xl" />
                <CardHeader className="space-y-2 p-0">
                  <Badge variant="accent" className="w-fit rounded-full px-4 py-1 text-xs">
                    {milestone.year}
                  </Badge>
                  <CardTitle className="text-xl text-foreground">{milestone.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm leading-relaxed text-muted">
                    {milestone.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="rounded-[2.5rem] border border-border bg-surface px-6 py-12 shadow-subtle md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
                Çevik komandalar, ölçülə bilən nəticələr
              </h2>
              <p className="text-sm text-muted md:text-base">
                Konsultinq mütəxəssislərimiz təsərrüfat başına məhsuldarlığı 28%-ə qədər
                artırmaq üçün sahədə təlimlər, diaqnostik protokollar və formulasiya
                simulyasiyaları təşkil edir.
              </p>
            </div>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact">
                Birgə layihəyə başlayaq
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {capabilities.map((capability) => (
              <Card
                key={capability.title}
                className="rounded-[1.75rem] border border-border/80 bg-surface/90 p-6 shadow-sm transition hover:-translate-y-1"
              >
                <CardHeader className="flex flex-row items-start gap-4 p-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <capability.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-lg text-foreground">
                      {capability.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-muted">
                      {capability.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="rounded-[2.75rem] border border-border bg-gradient-to-br from-[#10235d] via-[#1c3279] to-[#233d99] px-6 py-14 text-white shadow-[0_40px_120px_-60px_rgba(16,35,93,0.85)] md:px-12">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4">
              <Badge
                variant="accent"
                className="w-fit rounded-full border-transparent bg-white/15 px-4 py-1 text-xs text-white/80"
              >
                Missiyamız davam edir
              </Badge>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Təsərrüfatınız üçün növbəti innovativ addımı birlikdə ataq
              </h2>
              <p className="max-w-2xl text-base text-white/80 md:text-lg">
                Məhsul portfelini optimallaşdırmaq, xəstəliklərin qarşısını almaq və
                dayanıqlı istehsala keçmək üçün Agrovet komandası yanınızdadır.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full px-8 text-brand">
                <Link href="/products">
                  Məhsul kataloquna bax
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-white">
                <Link href="/contact">Mütəxəssis görüşü təyin et</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
