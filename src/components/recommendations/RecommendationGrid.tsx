import React from 'react';
import { ProductCard } from '../ProductCard';
import type { Product } from '../../types';

interface RecommendationGridProps {
  title: string;
  description?: string;
  products: Product[];
}

export function RecommendationGrid({ title, description, products }: RecommendationGridProps) {
  if (products.length === 0) return null;

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {description && (
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}