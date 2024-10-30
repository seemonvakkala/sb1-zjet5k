import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/Tabs';
import { PreferencesForm } from '../../components/profile/PreferencesForm';
import { RecommendationGrid } from '../../components/recommendations/RecommendationGrid';
import { useRecommendations } from '../../hooks/useRecommendations';
import { useAuthStore } from '../../store/useAuthStore';

export function Profile() {
  const user = useAuthStore(state => state.user);
  const { personalized, seasonal, popular, loading } = useRecommendations({ 
    user: user!,
    limit: 4,
  });

  const handlePreferencesSave = async (preferences: UserPreferences) => {
    // TODO: Implement API call to save preferences
    console.log('Saving preferences:', preferences);
  };

  if (!user) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        <div className="flex items-center space-x-4">
          <img
            src={user.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
            alt=""
            className="h-16 w-16 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        <Tabs defaultValue="recommendations">
          <TabsList>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
            <TabsTrigger value="orders">Order History</TabsTrigger>
          </TabsList>

          <TabsContent value="recommendations" className="space-y-8">
            {loading ? (
              <div>Loading recommendations...</div>
            ) : (
              <>
                <RecommendationGrid
                  title="Recommended for You"
                  description="Based on your preferences and order history"
                  products={personalized}
                />
                <RecommendationGrid
                  title="Seasonal Picks"
                  description="Fresh produce in season now"
                  products={seasonal}
                />
                <RecommendationGrid
                  title="Popular Right Now"
                  description="Trending products in your area"
                  products={popular}
                />
              </>
            )}
          </TabsContent>

          <TabsContent value="preferences">
            <PreferencesForm
              preferences={user.preferences}
              onSave={handlePreferencesSave}
            />
          </TabsContent>

          <TabsContent value="orders">
            {/* TODO: Implement order history component */}
            <div>Order history coming soon...</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}