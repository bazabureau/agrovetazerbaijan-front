import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Layers3, Package, Search, ShieldCheck } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { fetchProducts, fetchRootCategories } from "@/lib/api";
import type { Category, Product } from "@/lib/types";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Məhsul kataloqu | Agrovet Azerbaijan",
  description:
    "Baytarlıq preparatları, yem əlavələri və təsərrüfat dəstək məhsullarını Agrovet kataloqunda kəşf edin. Kateqoriyalara və simptomlara görə filtrləyərək ən uyğun həlli tapın.",
};

type ProductsPageProps = {
  searchParams?: {
    q?: string;
    category?: string;
    animal?: string;
  };
};

function flattenCategories(categories: Category[]): Category[] {
  const result: Category[] = [];
  categories.forEach((category) => {
    result.push(category);
    if (category.children && category.children.length > 0) {
      result.push(...flattenCategories(category.children));
    }
  });
  return result;
}

function buildFilterHref({
  query,
  category,
  animal,
}: {
  query?: string;
  category?: string | null;
  animal?: string | null;
}) {
  const params = new URLSearchParams();
  if (query) params.set("q", query);
  if (animal) params.set("animal", animal);
  if (category) params.set("category", category);
  const queryString = params.toString();
  return `/products${queryString ? `?${queryString}` : ""}`;
}

function getProductHighlights(product: Product) {
  const highlights: { label: string; value: string }[] = [];
  if (product.active_ingredients) {
    highlights.push({ label: "Aktiv maddələr", value: product.active_ingredients });
  }
  if (product.packaging) {
    highlights.push({ label: "Qablaşdırma", value: product.packaging });
  }
  if (product.usage_instructions) {
    highlights.push({ label: "İstifadə istiqaməti", value: product.usage_instructions });
  }
  if (product.precautions) {
    highlights.push({ label: "Təhlükəsizlik qeydləri", value: product.precautions });
  }
  return highlights.slice(0, 2);
}

function getProductImage(product: Product): string | null {
  const metadata = product.metadata as Record<string, unknown> | undefined;
  if (!metadata) {
    return null;
  }

  const candidateKeys = ["image_url", "imageUrl", "thumbnail_url", "thumbnail", "image"];
  for (const key of candidateKeys) {
    const value = metadata[key];
    if (typeof value === "string" && value.trim() !== "") {
      return value;
    }
  }

  const media = metadata.media;
  if (media && typeof media === "object") {
    for (const key of candidateKeys) {
      const nested = (media as Record<string, unknown>)[key];
      if (typeof nested === "string" && nested.trim() !== "") {
        return nested;
      }
    }
  }

  return null;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const query = typeof searchParams?.q === "string" ? searchParams.q.trim() : "";
  const categorySlug =
    typeof searchParams?.category === "string" ? searchParams.category.trim() : "";
  const animalSlug =
    typeof searchParams?.animal === "string" ? searchParams.animal.trim() : "";

  const [categories, productPayload] = await Promise.all([
    fetchRootCategories(),
    fetchProducts({
      search: query || undefined,
      category: categorySlug || undefined,
      animal: animalSlug || undefined,
      limit: 36,
    }),
  ]);

  const flattenedCategories = flattenCategories(categories);
  const selectedCategory = categorySlug
    ? flattenedCategories.find((category) => category.slug === categorySlug) ?? null
    : null;
  const products = productPayload.results;
  const total = productPayload.count;

  const stats = [
    {
      label: "Kataloq mövcuddur",
      value: "400+",
      description: "Aktiv qeydiyyatda olan preparat və yem əlavəsi",
    },
    {
      label: "Sürətli uyğunluq",
      value: "92%",
      description: "AI tövsiyələrinin təsdiqlənmə payı",
    },
    {
      label: "Qlobal partnyorlar",
      value: "35",
      description: "Beynəlxalq istehsalçılar və texnologiya provayderləri",
    },
  ];

  const filterCategories = categories.flatMap((category) => {
    const items: Category[] = [category];
    if (category.children && category.children.length > 0) {
      items.push(...category.children.slice(0, 3));
    }
    return items;
  });

  return (
    <>
      <SiteHeader />
      <main className="flex flex-col">
        <div className="pb-24">
      <section className="page-section pb-8">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-white/20 bg-gradient-to-br from-[#0f1e4d] via-[#1c3279] to-[#233d99] px-6 py-14 text-white shadow-[0_40px_120px_-60px_rgba(15,30,77,0.8)] md:px-12">
          <div className="pointer-events-none absolute -top-28 left-1/4 h-64 w-[30rem] rounded-full bg-white/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 right-1/3 h-72 w-[38rem] rounded-full bg-accent/25 blur-3xl" />
          <div className="relative space-y-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
              Agrovet kataloq platforması
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Məhsul kataloqu
                <span className="block text-accent">
                  daha sürətli qərar üçün dizayn edilib
                </span>
              </h1>
              <p className="max-w-3xl text-base text-white/80 md:text-lg">
                Simptomlara, heyvan növünə və təsərrüfat ehtiyaclarına uyğun baytarlıq
                preparatlarını saniyələr ərzində tapın. Müasir UI/UX və filtrlər seçim
                prosesini intuitiv edir.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/20 bg-white/10 px-6 py-5 shadow-[0_20px_45px_-40px_rgba(255,255,255,0.7)] backdrop-blur"
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-white/60">
                    {item.label}
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="space-y-6 rounded-[2.5rem] border border-border bg-surface/90 p-6 shadow-subtle md:p-10">
          <form
            method="get"
            className="flex flex-col gap-4 rounded-[1.75rem] border border-dashed border-border/70 bg-muted/5 p-6 md:flex-row md:items-center"
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
              <Input
                name="q"
                defaultValue={query}
                placeholder="Məhsul adı, aktiv maddə və ya təsvirə görə axtar..."
                className="h-14 rounded-[1.5rem] border-border/80 bg-surface/90 pl-12 text-base"
              />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button type="submit" size="lg" className="h-12 rounded-full px-8">
                Kataloqda axtar
                <ArrowRight className="h-4 w-4" />
              </Button>
              {query || categorySlug || animalSlug ? (
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="h-12 rounded-full px-8 text-muted hover:text-brand"
                >
                  <Link href="/products">Filtrləri sıfırla</Link>
                </Button>
              ) : null}
            </div>
          </form>

          {filterCategories.length > 0 && (
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                Kateqoriyalar
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href={buildFilterHref({ query, animal: animalSlug || undefined })}
                  className={cn(
                    buttonVariants({
                      variant: !categorySlug ? "default" : "outline",
                      size: "sm",
                    }),
                    "rounded-full"
                  )}
                >
                  Hamısı
                </Link>
                {filterCategories.map((category) => {
                  const active = category.slug === categorySlug;
                  return (
                    <Link
                      key={category.slug}
                      href={buildFilterHref({
                        query,
                        category: category.slug,
                        animal: animalSlug || undefined,
                      })}
                      className={cn(
                        buttonVariants({
                          variant: active ? "default" : "outline",
                          size: "sm",
                        }),
                        "rounded-full"
                      )}
                    >
                      {category.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {selectedCategory && (
            <div className="rounded-2xl border border-brand/30 bg-brand/5 p-4 text-sm text-brand">
              <p className="font-semibold">{selectedCategory.name}</p>
              <p className="mt-1 text-brand/80">
                {selectedCategory.description ??
                  "Bu kateqoriyada təsərrüfat ehtiyaclarına uyğun seçilmiş məhsulları görüntüləyirsiniz."}
              </p>
            </div>
          )}

          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h2 className="text-xl font-semibold text-foreground">
              {total} məhsul tapıldı
            </h2>
            <div className="flex items-center gap-2 text-sm text-muted">
              <Layers3 className="h-4 w-4" />
              Real vaxtda yenilənən strukturlaşdırılmış məlumat bazası
            </div>
          </div>

          <div id="inventory" className="grid gap-6 md:grid-cols-2">
            {products.length > 0 ? (
              products.map((product) => {
                const tags = product.categories?.slice(0, 2) ?? [];
                const highlights = getProductHighlights(product);
                const imageUrl = getProductImage(product);
                return (
                  <Card
                    key={product.slug}
                    className="group relative overflow-hidden border-border/70 bg-surface/95 shadow-subtle transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-40px_rgba(23,33,70,0.55)]"
                  >
                    <div className="pointer-events-none absolute -top-20 right-0 h-36 w-36 rounded-full bg-brand/10 blur-3xl" />
                    <div className="relative h-48 overflow-hidden rounded-2xl border border-border/60 bg-muted/5">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={`${product.name} məhsul şəkli`}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          loading="lazy"
                          unoptimized
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-brand/5 via-surface to-brand/5 text-brand">
                          <div className="rounded-full bg-brand/10 p-3">
                            <Package className="h-6 w-6" />
                          </div>
                          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand/70">
                            Vizual əlavə olunur
                          </span>
                        </div>
                      )}
                    </div>
                    <CardHeader className="relative space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {tags.length > 0 ? (
                          tags.map((category) => (
                            <Badge key={category.slug} variant="accent">
                              {category.name}
                            </Badge>
                          ))
                        ) : (
                          <Badge variant="outline">Kateqoriya təyin edilməyib</Badge>
                        )}
                      </div>
                      <CardTitle className="text-foreground">{product.name}</CardTitle>
                      <CardDescription>
                        {product.summary ??
                          "Məhsul təfsilatı tezliklə əlavə olunacaq. Ətraflı məlumat üçün komandamızla əlaqə saxlayın."}
                      </CardDescription>
                    </CardHeader>
                    {highlights.length > 0 && (
                      <CardContent>
                        <div className="rounded-2xl border border-dashed border-border/60 bg-muted/5 p-4 text-sm text-muted">
                          <ul className="space-y-2">
                            {highlights.map((highlight) => (
                              <li key={highlight.label}>
                                <span className="font-medium text-foreground">
                                  {highlight.label}:
                                </span>{" "}
                                <span className="text-muted">{highlight.value}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    )}
                    <CardFooter className="relative flex flex-col gap-3 pt-2 sm:flex-row">
                      <Button asChild size="sm" className="rounded-full px-6">
                        <Link href={`/contact?product=${product.slug}`}>
                          Məsləhət al
                          <ShieldCheck className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="rounded-full px-6">
                        <a href="mailto:info@agrovet.az?subject=Agrovet%20məhsulu%20haqqında%20məlumat">
                          E-poçtla sorğu
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })
            ) : (
              <div className="col-span-full rounded-[1.75rem] border border-dashed border-border/70 bg-muted/5 px-6 py-12 text-center text-muted">
                Seçilmiş filtrə uyğun məhsul tapılmadı. Zəhmət olmasa başqa açar söz və ya
                kateqoriya ilə yenidən cəhd edin.
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="rounded-[2.5rem] border border-border bg-surface px-8 py-12 text-center shadow-subtle">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Mütəxəssis dəstəyi ilə daha sürətli qərar verin
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-muted md:text-lg">
            Baytar həkimlərimiz təsərrüfatınızın spesifik tələblərinə görə məhsul seçimi,
            dozaj və tətbiq protokollarının optimallaşdırılmasında sizə kömək edir.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact">
                Komandamızla əlaqə qur
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link href="/products#inventory">Kataloqa qayıt</Link>
            </Button>
          </div>
        </div>
      </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
