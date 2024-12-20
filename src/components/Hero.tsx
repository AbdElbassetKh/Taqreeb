import React from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-arabic">
            اطلب العلم على الطريقة الأثرية
          </h1>
          <p className="text-xl mb-8 text-emerald-50 font-arabic">
            اكتشف كتب السلف المفضلة عبر مكتبتنا الرقمية الشاملة التي تضم كتب السلف وشروحها والشهادات عليها
          </p>
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="ابحث عن الكتب والمؤلفين والمواضيع..."
              className="w-full px-6 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-arabic"
            />
            <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-emerald-600 p-2 rounded-lg hover:bg-emerald-700 transition">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
