import { create } from 'zustand';
import type { User, Product } from '../types';

interface Store {
  user: User | null;
  products: Product[];
  setUser: (user: User | null) => void;
  setProducts: (products: Product[]) => void;
}

export const useStore = create<Store>((set) => ({
  user: null,
  products: [],
  setUser: (user) => set({ user }),
  setProducts: (products) => set({ products }),
}));