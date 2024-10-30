import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import type { LoginCredentials, RegisterCredentials } from '../../types/auth';

interface AuthFormProps {
  type: 'login' | 'register';
}

export function AuthForm({ type }: AuthFormProps) {
  const { login, register, isLoading, error } = useAuthStore();
  const [formData, setFormData] = useState<RegisterCredentials>({
    email: '',
    password: '',
    name: '',
    userType: 'customer',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (type === 'login') {
      const { email, password } = formData;
      await login({ email, password });
    } else {
      await register(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
          {error}
        </div>
      )}

      {type === 'register' && (
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <div className="mt-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="input-primary pl-10"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="input-primary pl-10"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="input-primary pl-10"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>

      {type === 'register' && (
        <div>
          <label htmlFor="userType" className="block text-sm font-medium text-gray-700">
            Account Type
          </label>
          <select
            id="userType"
            name="userType"
            className="input-primary"
            value={formData.userType}
            onChange={handleChange}
          >
            <option value="customer">Customer</option>
            <option value="farmer">Farmer</option>
          </select>
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="btn-primary w-full"
      >
        {isLoading ? 'Loading...' : type === 'login' ? 'Sign In' : 'Create Account'}
      </button>
    </form>
  );
}