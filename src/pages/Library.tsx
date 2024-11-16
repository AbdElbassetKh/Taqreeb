import React, { useState } from 'react';
import { Filter, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Library = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['الكل', 'الحديث', 'الفقه', 'العقيدة', 'التفسير', 'التاريخ'];
  const books = [
    {
      id: 1,
      title: 'صحيح البخاري',
      author: 'الإمام البخاري',
      category: 'الحديث',
      language: 'عربي/إنجليزي',
      pages: 2891,
      cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'العقيدة الواسطية',
      author: 'ابن تيمية',
      category: 'العقيدة',
      language: 'عربي/إنجليزي',
      pages: 168,
      cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredBooks = selectedCategory === 'الكل' 
    ? books 
    : books.filter(book => book.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 font-arabic">المكتبة الرقمية</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition">
          <Filter className="h-4 w-4 ml-2" />
          <span className="font-arabic">تصفية</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="font-semibold mb-4 font-arabic">التصنيفات</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-right px-3 py-2 rounded-lg transition font-arabic ${
                    selectedCategory === category
                      ? 'bg-emerald-50 text-emerald-600'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <Link 
                to={`/book/${book.id}`}
                key={book.id} 
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden group"
              >
                <div className="relative h-48">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="bg-emerald-50 text-emerald-600 text-xs px-2 py-1 rounded-full font-arabic">
                      {book.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-lg mb-1 font-arabic">{book.title}</h3>
                      <p className="text-gray-600 text-sm font-arabic">{book.author}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm text-gray-500 font-arabic">
                      <span>{book.language}</span>
                      <span>{book.pages} صفحة</span>
                    </div>
                    <button className="mt-4 w-full flex items-center justify-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition">
                      <BookOpen className="h-4 w-4 ml-2" />
                      <span className="font-arabic">اقرأ الآن</span>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
