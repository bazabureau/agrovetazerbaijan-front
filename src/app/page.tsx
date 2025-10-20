import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HomeAssistantIntro } from "@/components/sections/home/assistant-intro";
import { HomeCapabilities } from "@/components/sections/home/capabilities";
import { HomeCatalogPreview } from "@/components/sections/home/catalog-preview";
import { HomeHero } from "@/components/sections/home/hero";
import { HomePartnersTicker } from "@/components/sections/home/partners-ticker";
import { HomeStats } from "@/components/sections/home/stats";
import { fetchProducts, fetchRootCategories } from "@/lib/api";

export default async function Home() {
  const [categories, products] = await Promise.all([
    fetchRootCategories(),
    fetchProducts({ limit: 8 }),
  ]);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="flex flex-col pb-24">
        <HomeHero />
        <HomeStats />
        <section id="about" className="page-section pt-0 text-sm text-muted">
          <div className="mx-auto max-w-4xl space-y-4 rounded-3xl border border-border bg-surface p-6">
            <h2 className="text-2xl font-semibold text-foreground">Agrovet haqqında</h2>
            <p>
              AGROVET şirkəti 2007-ci ilin yanvar ayında fəaliyyətə başlayaraq Azərbaycan bazarında
              heyvandarlıq və quşçuluq sahəsində baytarlıq dərman preparatları və yem əlavələrinin
              aparıcı distribyutoru olmuşdur.
            </p>
            <p>
              Şirkət Avropa, Asiya və Amerika istehsalçıları ilə əməkdaşlıq edərək yüksək keyfiyyətli
              məhsulları sərfəli qiymətlərlə təqdim edir və 400-dən çox məhsulu ölkə ərazisində
              qeydiyyatdan keçirmişdir. Məqsədimiz beynəlxalq sərgilərdə əldə edilən innovativ
              texnologiyaları yerli təsərrüfatlara gətirərək kənd təsərrüfatının dayanıqlı inkişafına
              töhfə verməkdir.
            </p>
          </div>
        </section>
        <HomeCapabilities />
        <HomeCatalogPreview categories={categories} products={products.results} />
        <HomePartnersTicker />
        <HomeAssistantIntro />
      </main>
      <SiteFooter />
    </div>
  );
}
