export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  preferences: UserPreferences;
  orderHistory?: OrderHistory[];
}

export interface UserPreferences {
  dietary: DietaryPreference[];
  location: string;
  localOnly?: boolean;
  maxDistance?: number;
  notifications: NotificationPreferences;
}

export type DietaryPreference = 
  | 'organic'
  | 'vegan'
  | 'gluten-free'
  | 'lactose-free'
  | 'pesticide-free';

export interface NotificationPreferences {
  orderUpdates: boolean;
  newArrivals: boolean;
  recommendations: boolean;
  specialOffers: boolean;
}

export interface OrderHistory {
  id: string;
  date: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export type OrderStatus = 
  | 'pending'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled';