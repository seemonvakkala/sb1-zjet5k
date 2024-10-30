export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  productCount: number;
}

export interface Filter {
  id: string;
  name: string;
  type: 'checkbox' | 'radio' | 'range';
  options?: FilterOption[];
}

export interface FilterOption {
  value: string;
  label: string;
  count: number;
}

export interface SortOption {
  value: string;
  label: string;
}