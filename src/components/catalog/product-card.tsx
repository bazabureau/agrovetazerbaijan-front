import type { Product } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export function ProductCard({ product }: { product: Product }) {
  const categories = product.categories ?? [];

  return (
    <article className="card flex h-full flex-col justify-between gap-4 rounded-2xl border border-border bg-surface p-5">
      <div className="space-y-3">
        <h3 className="text-base font-semibold text-foreground">{product.name}</h3>
        {product.summary && (
          <p className="text-sm text-muted line-clamp-3">{product.summary}</p>
        )}
      </div>
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {categories.slice(0, 3).map((category) => (
            <Badge key={category.slug} variant="outline">
              {category.name}
            </Badge>
          ))}
          {categories.length > 3 && <Badge variant="outline">+{categories.length - 3}</Badge>}
        </div>
      )}
    </article>
  );
}
