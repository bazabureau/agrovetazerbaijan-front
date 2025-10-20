import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const articles = [
  {
    title: "Yeni quşçuluq vaksinləri portfelə əlavə olundu",
    date: "2025-06-10",
    excerpt:
      "Agrovet, quşçuluq təsərrüfatlarında respirator xəstəliklərə qarşı effektivliyi təsdiqlənmiş vaksinləri təqdim edir.",
  },
  {
    title: "Baytar klinikaları üçün təlim proqramı",
    date: "2025-05-28",
    excerpt:
      "Müştərilərimiz üçün klinik diaqnostika və farmakoloji protokollar üzrə intensiv təlim sessiyaları təşkil etdik.",
  },
  {
    title: "AI asistenti beta versiyaya keçdi",
    date: "2025-04-20",
    excerpt:
      "Simptom əsaslı məhsul tövsiyə sistemi geniş kataloqla inteqrasiya edildi və istifadəçilərə açıqlandı.",
  },
]

export const metadata = {
  title: "Xəbərlər | Agrovet Azerbaijan",
  description: "Agrovet-in yenilikləri, təlimləri və məhsul elanları ilə tanış olun.",
}

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="flex flex-col pb-24">
        <section className="page-section text-center">
          <h1 className="text-3xl font-semibold text-foreground md:text-4xl">Xəbərlər</h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-muted md:text-base">
            Agrovet-in məhsul yenilikləri, partnyor tədbirləri və texniki məqalələri ilə tanış olun.
          </p>
        </section>

        <section className="page-section pt-0">
          <div className="grid gap-4">
            {articles.map((article) => (
              <article
                key={article.title}
                className="card rounded-2xl border border-border bg-surface px-5 py-5"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-muted">
                  {new Date(article.date).toLocaleDateString("az-Latn-AZ")}
                </span>
                <h2 className="mt-3 text-lg font-semibold text-foreground">{article.title}</h2>
                <p className="mt-2 text-sm text-muted">{article.excerpt}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
