import { API_BASE_URL } from "@/lib/config";
import type { Animal, Category, Product, Recommendation } from "@/lib/types";

async function safeFetch<T>(
  path: string,
  init?: RequestInit
): Promise<T | null> {
  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
      ...init,
    });

    if (!response.ok) {
      console.warn(`Failed request to ${path}:`, response.statusText);
      return null;
    }

    return (await response.json()) as T;
  } catch (error) {
    console.warn(`Request error for ${path}:`, error);
    return null;
  }
}

export async function fetchRootCategories(): Promise<Category[]> {
  const payload = await safeFetch<Category[]>(
    "/api/catalog/categories/?root_only=true"
  );
  if (!payload) {
    return [];
  }
  return payload;
}

export async function fetchAnimals(): Promise<Animal[]> {
  const payload = await safeFetch<Animal[]>("/api/catalog/animals/");
  return payload ?? [];
}

export async function fetchHighlightedProducts(): Promise<{
  products: Product[];
  total: number;
}> {
  const payload = await safeFetch<{ results?: Product[]; count?: number }>(
    "/api/catalog/products/?limit=6"
  );
  if (!payload) {
    return { products: [], total: 0 };
  }
  if (Array.isArray(payload)) {
    return { products: payload.slice(0, 6), total: payload.length };
  }
  return {
    products: payload.results ?? [],
    total: payload.count ?? payload.results?.length ?? 0,
  };
}

export async function fetchProducts(params: {
  search?: string;
  category?: string;
  animal?: string;
  limit?: number;
} = {}): Promise<{ results: Product[]; count: number }> {
  const searchParams = new URLSearchParams();
  if (params.search) searchParams.set("search", params.search);
  if (params.category) searchParams.set("category", params.category);
  if (params.animal) searchParams.set("animal", params.animal);
  searchParams.set("limit", String(params.limit ?? 30));

  const query = searchParams.toString();
  const payload = await safeFetch<{ results?: Product[]; count?: number }>(
    `/api/catalog/products/${query ? `?${query}` : ""}`
  );

  const resultsArray =
    (Array.isArray(payload) ? payload : payload?.results) ?? [];

  return {
    results: resultsArray,
    count:
      payload?.count ?? (Array.isArray(payload) ? payload.length : resultsArray.length),
  };
}

export async function requestRecommendations(body: {
  symptoms: string[];
  animal?: string;
  limit?: number;
}): Promise<Recommendation[]> {
  try {
    const endpoint =
      typeof window === "undefined"
        ? `${API_BASE_URL}/api/catalog/assistant/recommendations/`
        : "/api/assistant";

    const response = await fetch(
      endpoint,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || "Assistant request failed");
    }

    const payload = (await response.json()) as { recommendations: Recommendation[] };
    return payload.recommendations ?? [];
  } catch (error) {
    console.error("Assistant request error", error);
    throw error;
  }
}
