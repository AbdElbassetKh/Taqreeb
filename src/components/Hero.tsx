import React from 'react';
import { Search } from 'lucide-react';
import { Button, Heading, Paragraph } from './DesignSystem';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center" loading="lazy" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <Heading className="text-4xl md:text-5xl mb-6">
            Seek knowledge via the archaeological way
          </Heading>
          <Paragraph className="text-xl mb-8 text-emerald-50">
            Access the favorite books of the early centuries through our comprehensive digital library that includes the books of the predecessors, their explanations, and testimonies on them.
          </Paragraph>
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search books, authors, or topics..."
              aria-label="Search books, authors, or topics"
              className="w-full px-6 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <Button className="absolute right-2 top-1/2 -translate-y-1/2 p-2" variant="primary" size="small">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
