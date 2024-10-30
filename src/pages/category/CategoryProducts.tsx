import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FilterSidebar } from '../../components/filters/FilterSidebar';
import { ActiveFilters } from '../../components/filters/ActiveFilters';
import { SortSelect } from '../../components/filters/SortSelect';
import { ProductCard } from '../../components/ProductCard';
import type { Filter, SortOption } from '../../types/category';
import type { Product } from '../../types';

const mockFilters: Filter[] = [
  {
    id: 'source',
    name: 'Source',
    type: 'checkbox',
    options: [
      { value: 'local', label: 'Local Farms', count: 24 },
      { value: 'organic', label: 'Organic', count: 18 },
      { value: 'pesticide-free', label: 'Pesticide Free', count: 12 },
    ],
  },
  {
    id: 'price',
    name: 'Price Range',
    type: 'radio',
    options: [
      { value: 'under-10', label: 'Under $10', count: 15 },
      { value: '10-20', label: '$10 - $20', count: 20 },
      { value: 'over-20', label: 'Over $20', count: 8 },
    ],
  },
];

const sortOptions: SortOption[] = [
  { value: 'newest', label: 'Newest Arrivals' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'popular', label: 'Most Popular' },
];

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Organic Spinach',
    description: 'Fresh organic spinach from local farms',
    price: 4.99,
    category: 'vegetables',
    farmerId: '1',
    organic: true,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    sustainabilityScore: 4.5,
  },
  // Add more mock products as needed
];

export function CategoryProducts() {
  const { slug } = useParams<{ slug: string }>();
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [sortBy, setSortBy] = useState('newest');

  const handleFilterChange = (filterId: string, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[filterId] || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return {
        ...prev,
        [filterId]: updated,
      };
    });
  };

  const handleRemoveFilter = (filterId: string, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterId]: prev[filterId].filter((v) => v !== value),
    }));
  };

  const handleClearFilters = () => {
    setSelectedFilters({});
  };

  return (
    <div className="flex gap-8">
      <FilterSidebar
        className="w-64 flex-shrink-0"
        filters={mockFilters}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
      />

      <div className="flex-1 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            {slug?.charAt(0).toUpperCase() + slug?.slice(1)}
          </h1>
          <SortSelect
            options={sortOptions}
            value={sortBy}
            onChange={setSortBy}
          />
        </div>

        <ActiveFilters
          filters={mockFilters}
          selectedFilters={selectedFilters}
          onRemoveFilter={handleRemoveFilter}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}