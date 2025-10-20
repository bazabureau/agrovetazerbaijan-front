export type Category = {
  id: number;
  name: string;
  slug: string;
  description?: string;
  display_order?: number;
  children?: Category[];
};

export type Animal = {
  id: number;
  name: string;
  slug: string;
  description?: string;
};

export type Product = {
  id: number;
  name: string;
  slug: string;
  summary?: string;
  description?: string;
  metadata?: Record<string, unknown>;
  categories?: Category[];
};

export type Recommendation = {
  product: Product;
  score: number;
  rationale: string;
};
