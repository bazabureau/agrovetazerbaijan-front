import type { Category } from "@/lib/types";

function buildCategoryList(categories: Category[]): Category[] {
  const list: Category[] = [];
  categories.forEach((category) => {
    if (category.children && category.children.length > 0) {
      list.push(...category.children);
    } else {
      list.push(category);
    }
  });
  return list;
}

export function CategoriesSection({ categories }: { categories: Category[] }) {
  const flattened = buildCategoryList(categories).slice(0, 12);

  if (flattened.length === 0) {
    return null;
  }

  return (
    <section id="categories" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-white">
          Əsas məhsul kateqoriyalarımız
        </h2>
        <p className="mt-3 text-base text-slate-200/90">
          Baytarlıq preparatlarından tutmuş dezinfektantlara qədər təsərrüfatınızın
          ehtiyacına uyğun portfel.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {flattened.map((category) => (
          <div
            key={category.slug}
            className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/85 p-6 text-left text-slate-700 shadow-lg shadow-slate-900/10 backdrop-blur-md transition hover:-translate-y-2 hover:border-[var(--brand)] hover:shadow-2xl"
          >
            <div className="absolute right-6 top-6 h-14 w-14 rounded-full bg-[var(--brand-soft)] transition group-hover:bg-[var(--brand)]/20" />
            <div className="relative">
              <h3 className="text-lg font-semibold text-[var(--brand-strong)]">
                {category.name}
              </h3>
              {category.description && (
                <p className="mt-3 text-sm text-slate-600">
                  {category.description}
                </p>
              )}
              {!category.description && (
                <p className="mt-3 text-sm text-slate-600">
                  Agrovet mütəxəssisləri bu kateqoriya üzrə məhsulların seçimi və
                  tətbiqi üçün məsləhət verir.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
