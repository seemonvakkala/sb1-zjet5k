export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  farmerId: string;
  organic: boolean;
  inStock: boolean;
  image: string;
  sustainabilityScore: number;
}