import { useState, useEffect } from 'react';
import type { Product, User } from '../types';

interface UseRecommendationsProps {
  user: User;
  limit?: number;
}

export function useRecommendations({ user, limit = 4 }: UseRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<{
    personalized: Product[];
    seasonal: Product[];
    popular: Product[];
    loading: boolean;
    error: string | null;
  }>({
    personalized: [],
    seasonal: [],
    popular: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        // TODO: Replace with actual API calls
        const mockRecommendations = {
          personalized: [
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
          ],
          seasonal: [],
          popular: [],
        };

        setRecommendations({
          ...mockRecommendations,
          loading: false,
          error: null,
        });
      } catch (error) {
        setRecommendations(prev => ({
          ...prev,
          loading: false,
          error: 'Failed to fetch recommendations',
        }));
      }
    };

    fetchRecommendations();
  }, [user.id, limit]);

  return recommendations;
}