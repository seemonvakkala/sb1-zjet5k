import React from 'react';
import { X } from 'lucide-react';
import type { Filter } from '../../types/category';

interface ActiveFiltersProps {
  filters: Filter[];
  selectedFilters: Record<string, string[]>;
  onRemoveFilter: (filterId: string, value: string) => void;
}

export function ActiveFilters({
  filters,
  selectedFilters,
  onRemoveFilter,
}: ActiveFiltersProps) {
  const activeFilters = Object.entries(selectedFilters).flatMap(([filterId, values]) => {
    const filter = filters.find((f) => f.id === filterId);
    return values.map((value) => ({
      id: filterId,
      value,
      label: filter?.options?.find((opt) => opt.value === value)?.label || value,
    }));
  });

  if (activeFilters.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {activeFilters.map((filter) => (
        <span
          key={`${filter.id}-${filter.value}`}
          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800"
        >
          {filter.label}
          <button
            type="button"
            onClick={() => onRemoveFilter(filter.id, filter.value)}
            className="ml-1 inline-flex items-center p-0.5 rounded-full hover:bg-green-200"
          >
            <X className="h-4 w-4" />
          </button>
        </span>
      ))}
    </div>
  );
}