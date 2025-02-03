import React, { useState } from 'react';
import { Search, Book, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent opacity-50" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto py-24 md:py-32 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-arabic leading-tight">
              اطلب العلم على الطريقة الأثرية
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-emerald-50 font-arabic leading-relaxed">
              اكتشف كتب السلف المفضلة عبر مكتبتنا الرقمية الشاملة
              <br />
              التي تضم كتب السلف وشروحها والشهادات عليها
            </p>
          </div>

          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto group">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن الكتب والمؤلفين والمواضيع..."
              className="w-full px-6 py-4 pr-12 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-lg font-arabic text-lg"
            />
            <button 
              type="submit"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-emerald-600 p-3 rounded-lg hover:bg-emerald-700 transition-all duration-300 group-focus-within:bg-emerald-700"
            >
              <Search className="h-5 w-5" />
            </button>
          </form>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 font-arabic">
            <a 
              href="#featured-books"
              className="flex items-center space-x-2 text-lg text-emerald-50 hover:text-white transition-colors"
            >
              <Book className="h-5 w-5 ml-2" />
              <span>تصفح الكتب المميزة</span>
              <ArrowLeft className="h-4 w-4 mr-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
