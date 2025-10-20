import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { AssistantSection } from "@/components/sections/assistant"
import { ProductCard } from "@/components/catalog/product-card"
import { fetchAnimals, fetchProducts, fetchRootCategories } from "@/lib/api"

export const metadata = {
  title: "Agrovet Məhsullar | Kompleks baytarlıq kataloqu",
  description: "Baytarlıq preparatları, yem əlavələri və dezinfeksiya vasitələri üçün Agrovet kataloqu.",
}

export default async function ProductsPage() {
  const [categories, animals, productResponse] = await Promise.all([
    fetchRootCategories(),
    fetchAnimals(),
    fetchProducts({ limit: 24 }),
  ])

  const flattenedCategories = categories.flatMap((category) =>
    category.children && category.children.length > 0 ? category.children : [category]
  )

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="flex flex-col pb-24">
        <section className="page-section text-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-foreground md:text-4xl">
              Agrovet məhsul kataloqu
            </h1>
            <p className="mx-auto max-w-3xl text-sm text-muted md:text-base">
              Heyvandarlıq və quşçuluq təsərrüfatları üçün baytarlıq preparatları, vaksinlər, yem əlavələri və dezinfektantlar.
              Kataloq AI asistenti ilə inteqrasiya olunub.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {flattenedCategories.slice(0, 12).map((category) => (
              <span
                key={category.slug}
                className="rounded-full border border-border px-4 py-2 text-xs font-medium text-muted"
              >
                {category.name}
              </span>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-muted">
            {animals.map((animal) => (
              <span
                key={animal.slug}
                className="rounded-full border border-border/70 bg-surface px-3 py-1"
              >
                {animal.name}
              </span>
            ))}
          </div>
        </section>

        <section className="page-section pt-0" id="catalog">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Məhsullar</h2>
              <p className="text-sm text-muted">
                İlk {productResponse.results.length} məhsul göstərilir. Daha detallı axtarış üçün AI asistenti istifadə edin.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {productResponse.results.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>

        <AssistantSection animals={animals} />
      </main>
      <SiteFooter />
    </div>
  )
}
