import React from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Seek knowledge via the archaeological way
          </h1>
          <p className="text-xl mb-8 text-emerald-50">
            Access the favorite books of the early centuries through our comprehensive digital library that includes the books of the predecessors, their explanations, and testimonies on them.
          </p>
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search books, authors, or topics..."
              className="w-full px-6 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-600 p-2 rounded-lg hover:bg-emerald-700 transition">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
