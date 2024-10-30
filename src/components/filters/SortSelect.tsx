import React from 'react';
import type { SortOption } from '../../types/category';

interface SortSelectProps {
  options: SortOption[];
  value: string;
  onChange: (value: string) => void;
}

export function SortSelect({ options, value, onChange }: SortSelectProps) {
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="sort" className="text-sm font-medium text-gray-700">
        Sort by
      </label>
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input-primary text-sm"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}