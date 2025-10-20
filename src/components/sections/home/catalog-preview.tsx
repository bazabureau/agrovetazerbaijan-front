import Link from "next/link"
import { ArrowRight } from "lucide-react"

import type { Category, Product } from "@/lib/types"
import { Button } from "@/components/ui/button"

export function HomeCatalogPreview({
  categories,
  products,
}: {
  categories: Category[]
  products: Product[]
}) {
  const flattened = categories.flatMap((category) =>
    category.children && category.children.length > 0 ? category.children : [category]
  )
  const topCategories = flattened.slice(0, 6)
  const featuredProducts = products.slice(0, 4)

  return (
    <section className="page-section">
      <div className="grid gap-8 rounded-3xl border border-border bg-surface p-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 animate-in fade-in slide-in-from-left-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Kateqoriya panoraması</h2>
              <p className="mt-2 text-sm text-muted">
                Heyvan növü və təsərrüfat məqsədinə görə strukturlaşdırılmış kataloq.
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/products">
                Kataloqa bax
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {topCategories.map((category, index) => (
              <div
                key={category.slug}
                className="rounded-xl border border-border/80 bg-surface px-4 py-4 transition duration-500 hover:-translate-y-1 hover:border-brand/40 animate-in fade-in slide-in-from-bottom-5"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <p className="text-sm font-semibold text-foreground">{category.name}</p>
                {category.description && (
                  <p className="mt-2 text-xs text-muted line-clamp-2">{category.description}</p>
                )}
              </div>
            ))}
            {topCategories.length === 0 && (
              <p className="col-span-full text-sm text-muted">
                Kateqoriya məlumatı hazırda mövcud deyil. Kataloqa keçərək məhsulları nəzərdən keçirin.
              </p>
            )}
          </div>
        </div>
        <div className="space-y-6 animate-in fade-in slide-in-from-right-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Seçilmiş məhsullar</h3>
            <p className="mt-2 text-sm text-muted">
              Baytar mütəxəssislərimizin tövsiyə etdiyi son məhsullar.
            </p>
          </div>
          <div className="grid gap-3">
            {featuredProducts.map((product, index) => (
              <div
                key={product.slug}
                className="rounded-xl border border-border/80 bg-surface px-4 py-4 transition duration-500 hover:-translate-y-1 hover:border-brand/40 animate-in fade-in slide-in-from-bottom-5"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <p className="text-sm font-semibold text-foreground">{product.name}</p>
                {product.summary && (
                  <p className="mt-2 text-xs text-muted line-clamp-2">{product.summary}</p>
                )}
              </div>
            ))}
            {featuredProducts.length === 0 && (
              <p className="text-sm text-muted">Məhsul məlumatı tapılmadı. Daha sonra yenidən yoxlayın.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
