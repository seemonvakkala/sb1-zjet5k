import React from 'react';
import { CategoryGrid } from '../../components/category/CategoryGrid';
import type { Category } from '../../types/category';

const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Vegetables',
    slug: 'vegetables',
    description: 'Fresh, seasonal vegetables from local farms',
    image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    productCount: 45,
    subcategories: [
      { id: '1-1', name: 'Leafy Greens', slug: 'leafy-greens', productCount: 12 },
      { id: '1-2', name: 'Root Vegetables', slug: 'root-vegetables', productCount: 8 },
      { id: '1-3', name: 'Tomatoes', slug: 'tomatoes', productCount: 6 },
    ],
  },
  {
    id: '2',
    name: 'Fruits',
    slug: 'fruits',
    description: 'Sweet and juicy fruits from organic orchards',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    productCount: 38,
    subcategories: [
      { id: '2-1', name: 'Berries', slug: 'berries', productCount: 9 },
      { id: '2-2', name: 'Citrus', slug: 'citrus', productCount: 7 },
      { id: '2-3', name: 'Stone Fruits', slug: 'stone-fruits', productCount: 5 },
    ],
  },
  {
    id: '3',
    name: 'Dairy',
    slug: 'dairy',
    description: 'Fresh dairy products from local farms',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    productCount: 24,
    subcategories: [
      { id: '3-1', name: 'Milk', slug: 'milk', productCount: 4 },
      { id: '3-2', name: 'Cheese', slug: 'cheese', productCount: 12 },
      { id: '3-3', name: 'Yogurt', slug: 'yogurt', productCount: 8 },
    ],
  },
];

export function Categories() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Browse Categories</h1>
        <p className="mt-2 text-lg text-gray-600">
          Explore our selection of fresh, locally sourced produce and dairy products
        </p>
      </div>

      <CategoryGrid categories={mockCategories} />
    </div>
  );
}