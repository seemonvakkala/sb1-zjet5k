import { create } from 'zustand';
import type { User } from '../types';
import type { AuthState, LoginCredentials, RegisterCredentials } from '../types/auth';

interface AuthStore extends AuthState {
  user: User | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  login: async (credentials) => {
    set({ isLoading: true, error: null });
    try {
      // TODO: Implement actual API call
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email: credentials.email,
        preferences: {
          dietary: [],
          location: '',
        },
      };
      set({ user: mockUser, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to login', isLoading: false });
    }
  },
  register: async (credentials) => {
    set({ isLoading: true, error: null });
    try {
      // TODO: Implement actual API call
      const mockUser: User = {
        id: '1',
        name: credentials.name,
        email: credentials.email,
        preferences: {
          dietary: [],
          location: '',
        },
      };
      set({ user: mockUser, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to register', isLoading: false });
    }
  },
  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      // TODO: Implement actual API call
      set({ user: null, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to logout', isLoading: false });
    }
  },
  resetPassword: async (email) => {
    set({ isLoading: true, error: null });
    try {
      // TODO: Implement actual API call
      set({ isLoading: false });
    } catch (error) {
      set({ error: 'Failed to reset password', isLoading: false });
    }
  },
}));