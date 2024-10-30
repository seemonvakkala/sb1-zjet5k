import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Categories } from './pages/category/Categories';
import { CategoryProducts } from './pages/category/CategoryProducts';

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Categories />} />
            <Route path="/category/:slug" element={<CategoryProducts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}