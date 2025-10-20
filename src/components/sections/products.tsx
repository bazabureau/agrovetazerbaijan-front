import type { Product } from "@/lib/types";

export function ProductsShowcase({ products }: { products: Product[] }) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section id="products" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-white">Seçilmiş məhsullar</h2>
        <p className="mt-3 text-base text-slate-200/90">
          Portfelimizdən bir neçə nümunə — təcrübəli baytar komandamızın tövsiyələri
          və təsdiqi ilə.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.slug}
            className="relative flex h-full flex-col justify-between rounded-3xl border border-white/20 bg-white/85 p-6 text-slate-700 shadow-lg shadow-slate-900/10 backdrop-blur-md"
          >
            <div>
              <h3 className="text-lg font-semibold text-[var(--brand-strong)]">
                {product.name}
              </h3>
              {product.summary && (
                <p className="mt-3 text-sm text-slate-600">{product.summary}</p>
              )}
            </div>

            {product.categories && product.categories.length > 0 && (
              <div className="mt-6 text-xs uppercase tracking-wide text-slate-400">
                {product.categories.map((category) => category.name).join(" · ")}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
