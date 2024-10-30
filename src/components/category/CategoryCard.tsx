import React from 'react';
import { Link } from 'react-router-dom';
import type { Category } from '../../types/category';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-200"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{category.productCount} products</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {category.subcategories.slice(0, 3).map((sub) => (
            <span
              key={sub.id}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              {sub.name}
            </span>
          ))}
          {category.subcategories.length > 3 && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              +{category.subcategories.length - 3} more
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}