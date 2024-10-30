import React from 'react';
import { Save } from 'lucide-react';
import type { UserPreferences, DietaryPreference } from '../../types/user';

interface PreferencesFormProps {
  preferences: UserPreferences;
  onSave: (preferences: UserPreferences) => void;
}

const DIETARY_OPTIONS: { value: DietaryPreference; label: string }[] = [
  { value: 'organic', label: 'Organic Only' },
  { value: 'vegan', label: 'Vegan' },
  { value: 'gluten-free', label: 'Gluten Free' },
  { value: 'lactose-free', label: 'Lactose Free' },
  { value: 'pesticide-free', label: 'Pesticide Free' },
];

export function PreferencesForm({ preferences, onSave }: PreferencesFormProps) {
  const [form, setForm] = React.useState(preferences);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  const handleDietaryChange = (preference: DietaryPreference) => {
    setForm(prev => ({
      ...prev,
      dietary: prev.dietary.includes(preference)
        ? prev.dietary.filter(p => p !== preference)
        : [...prev.dietary, preference],
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900">Dietary Preferences</h3>
        <div className="mt-4 space-y-4">
          {DIETARY_OPTIONS.map(option => (
            <div key={option.value} className="flex items-center">
              <input
                id={option.value}
                type="checkbox"
                checked={form.dietary.includes(option.value)}
                onChange={() => handleDietaryChange(option.value)}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor={option.value} className="ml-3 text-sm text-gray-700">
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900">Location Settings</h3>
        <div className="mt-4 space-y-4">
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Delivery Location
            </label>
            <input
              type="text"
              id="location"
              value={form.location}
              onChange={e => setForm(prev => ({ ...prev, location: e.target.value }))}
              className="mt-1 input-primary"
            />
          </div>

          <div className="flex items-center">
            <input
              id="localOnly"
              type="checkbox"
              checked={form.localOnly}
              onChange={e => setForm(prev => ({ ...prev, localOnly: e.target.checked }))}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label htmlFor="localOnly" className="ml-3 text-sm text-gray-700">
              Show only local products
            </label>
          </div>

          {form.localOnly && (
            <div>
              <label htmlFor="maxDistance" className="block text-sm font-medium text-gray-700">
                Maximum Distance (km)
              </label>
              <input
                type="number"
                id="maxDistance"
                value={form.maxDistance}
                onChange={e => setForm(prev => ({ ...prev, maxDistance: Number(e.target.value) }))}
                className="mt-1 input-primary"
                min="1"
                max="500"
              />
            </div>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900">Notification Preferences</h3>
        <div className="mt-4 space-y-4">
          {Object.entries(form.notifications).map(([key, value]) => (
            <div key={key} className="flex items-center">
              <input
                id={key}
                type="checkbox"
                checked={value}
                onChange={e => setForm(prev => ({
                  ...prev,
                  notifications: {
                    ...prev.notifications,
                    [key]: e.target.checked,
                  },
                }))}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor={key} className="ml-3 text-sm text-gray-700">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button type="submit" className="btn-primary">
          <Save className="h-4 w-4 mr-2" />
          Save Preferences
        </button>
      </div>
    </form>
  );
}