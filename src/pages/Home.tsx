import React from 'react';
import { Link } from 'react-router-dom';
import { Library, Users, Search } from 'lucide-react';
import Hero from '../components/Hero';
import FeaturedBooks from '../components/FeaturedBooks';

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
            <h3 className="text-xl font-bold mb-2">Browse Library</h3>
            <p className="text-gray-600">Explore our comprehensive collection of classical texts</p>
          </Link>

          <Link
            to="/authors"
            className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center text-center group"
          >
            <div className="p-4 bg-emerald-50 rounded-full mb-4 group-hover:bg-emerald-100">
              <Users className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Browse Authors</h3>
            <p className="text-gray-600">Discover classical scholars and their contributions</p>
          </Link>

          <Link
            to="/search"
            className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center text-center group"
          >
            <div className="p-4 bg-emerald-50 rounded-full mb-4 group-hover:bg-emerald-100">
              <Search className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Search</h3>
            <p className="text-gray-600">Find specific books, topics, or authors</p>
          </Link>
        </div>
      </div>
      <FeaturedBooks />
    </>
  );
};

export default Home;
