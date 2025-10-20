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

export type ProductDocument = {
  id: number;
  name: string;
  document_type?: string;
  file_url?: string;
  language?: string;
};

export type SymptomTag = {
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
  usage_instructions?: string;
  active_ingredients?: string;
  packaging?: string;
  precautions?: string;
  contraindications?: string;
  metadata?: Record<string, unknown>;
  categories?: Category[];
  animals?: Animal[];
  symptom_tags?: SymptomTag[];
  documents?: ProductDocument[];
};

export type Recommendation = {
  product: Product;
  score: number;
  rationale: string;
};
