import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBasket, User, Search, Menu } from 'lucide-react';
import { useStore } from '../store/useStore';

export function Navbar() {
  const user = useStore((state) => state.user);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <ShoppingBasket className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">FarmFresh</span>
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Search products..."
                  type="search"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <Link
              to="/cart"
              className="ml-4 flow-root lg:ml-6"
            >
              <div className="group -m-2 p-2 flex items-center">
                <ShoppingBasket className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
              </div>
            </Link>

            <div className="ml-4 relative flex-shrink-0">
              {user ? (
                <Link to="/profile" className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full"
                    src={user.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
                    alt=""
                  />
                </Link>
              ) : (
                <Link to="/login" className="flex items-center text-gray-700 hover:text-gray-900">
                  <User className="h-6 w-6" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}