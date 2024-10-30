import React from 'react';
import { X } from 'lucide-react';
import type { Filter } from '../../types/category';

interface FilterSidebarProps {
  filters: Filter[];
  selectedFilters: Record<string, string[]>;
  onFilterChange: (filterId: string, value: string) => void;
  onClearFilters: () => void;
  className?: string;
}

export function FilterSidebar({
  filters,
  selectedFilters,
  onFilterChange,
  onClearFilters,
  className = '',
}: FilterSidebarProps) {
  return (
    <div className={`bg-white p-4 rounded-lg shadow-sm ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <button
          onClick={onClearFilters}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Clear all
        </button>
      </div>

      <div className="space-y-6">
        {filters.map((filter) => (
          <div key={filter.id} className="border-t border-gray-200 pt-4">
            <fieldset>
              <legend className="text-sm font-medium text-gray-900">{filter.name}</legend>
              <div className="mt-2 space-y-2">
                {filter.options?.map((option) => (
                  <div key={option.value} className="flex items-center">
                    <input
                      id={`${filter.id}-${option.value}`}
                      name={filter.id}
                      value={option.value}
                      type={filter.type === 'radio' ? 'radio' : 'checkbox'}
                      checked={selectedFilters[filter.id]?.includes(option.value)}
                      onChange={() => onFilterChange(filter.id, option.value)}
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                    />
                    <label
                      htmlFor={`${filter.id}-${option.value}`}
                      className="ml-3 text-sm text-gray-600"
                    >
                      {option.label} ({option.count})
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>
        ))}
      </div>
    </div>
  );
}