export interface AuthState {
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
  userType: 'customer' | 'farmer';
}

export interface SocialAuthProvider {
  id: string;
  name: string;
  icon: string;
}