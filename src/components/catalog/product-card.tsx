import Link from "next/link";

import type { Product } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export function ProductCard({ product }: { product: Product }) {
  const categories = product.categories ?? [];
  const animals = product.animals ?? [];

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-4"
    >
      <article className="card flex h-full flex-col justify-between gap-4 rounded-2xl border border-border bg-surface p-5 transition duration-300 group-hover:-translate-y-1 group-hover:border-brand/50 group-hover:shadow-lg">
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-foreground group-hover:text-brand">
            {product.name}
          </h3>
          {product.summary && (
            <p className="text-sm text-muted line-clamp-3">{product.summary}</p>
          )}
        </div>
        <div className="space-y-3">
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 3).map((category) => (
                <Badge key={category.slug} variant="outline">
                  {category.name}
                </Badge>
              ))}
              {categories.length > 3 && (
                <Badge variant="outline">+{categories.length - 3}</Badge>
              )}
            </div>
          )}
          {animals.length > 0 && (
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              {animals.map((animal) => animal.name).join(" · ")}
            </p>
          )}
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand">
            Ətraflı bax
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </article>
    </Link>
  );
}
