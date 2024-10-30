import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-200"
        />
        {product.organic && (
          <div className="absolute top-2 right-2">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Organic
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          {!product.inStock && (
            <span className="text-sm text-red-600">Out of Stock</span>
          )}
        </div>
      </div>
    </Link>
  );
}