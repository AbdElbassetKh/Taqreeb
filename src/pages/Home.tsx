import React from 'react';
import { Link } from 'react-router-dom';
import { Library, Users, Search } from 'lucide-react';
import Hero from '../components/Hero';
import FeaturedBooks from '../components/FeaturedBooks';
import Categories from '../components/Categories';

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/library"
            className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center text-center group"
          >
            <div className="p-4 bg-emerald-50 rounded-full mb-4 group-hover:bg-emerald-100">
              <Library className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 font-arabic">تصفح المكتبة</h3>
            <p className="text-gray-600 font-arabic">اكتشف مجموعتنا الشاملة من النصوص التراثية</p>
          </Link>

          <Link
            to="/authors"
            className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center text-center group"
          >
            <div className="p-4 bg-emerald-50 rounded-full mb-4 group-hover:bg-emerald-100">
              <Users className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 font-arabic">تصفح المؤلفين</h3>
            <p className="text-gray-600 font-arabic">اكتشف علماء السلف وإسهاماتهم</p>
          </Link>

          <Link
            to="/search"
            className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center text-center group"
          >
            <div className="p-4 bg-emerald-50 rounded-full mb-4 group-hover:bg-emerald-100">
              <Search className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 font-arabic">البحث</h3>
            <p className="text-gray-600 font-arabic">ابحث عن كتب أو مواضيع أو مؤلفين محددين</p>
          </Link>
        </div>
      </div>
      <Categories />
      <FeaturedBooks />
    </>
  );
};

export default Home;
