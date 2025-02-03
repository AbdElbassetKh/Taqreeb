import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, BookOpen } from 'lucide-react';

const FeaturedBooks = () => {
  const books = [
    {
      id: 1,
      title: "صحيح البخاري",
      author: "الإمام البخاري",
      cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "حديث",
      rating: 5,
      readers: 15420
    },
    {
      id: 2,
      title: "كتاب التوحيد",
      author: "شيخ الإسلام ابن تيمية",
      cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "عقيدة",
      rating: 4.9,
      readers: 12350
    },
    {
      id: 3,
      title: "السنّة",
      author: "الإمام أحمد بن حنبل",
      cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "عقيدة",
      rating: 4.8,
      readers: 9840
    }
  ];

  return (
    <section id="featured-books" className="py-20 container mx-auto px-4">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 font-arabic">الكتب المميزة</h2>
        <Link 
          to="/library" 
          className="flex items-center text-emerald-600 hover:text-emerald-700 transition-colors font-arabic"
        >
          عرض جميع الكتب
          <ArrowLeft className="h-4 w-4 mr-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <Link 
            key={book.id}
            to={`/book/${book.id}`} 
            className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                src={book.cover} 
                alt={book.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute top-4 right-4 bg-emerald-50 text-emerald-600 text-sm px-3 py-1 rounded-full font-arabic">
                {book.category}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold font-arabic group-hover:text-emerald-600 transition-colors">
                  {book.title}
                </h3>
                <div className="flex items-center text-amber-400">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="mr-1 text-sm text-gray-600">{book.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4 font-arabic">{book.author}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center font-arabic">
                  <BookOpen className="h-4 w-4 ml-1" />
                  <span>{book.readers.toLocaleString('ar-SA')} قارئ</span>
                </div>
                <span className="text-emerald-600 font-arabic">اقرأ المزيد</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
