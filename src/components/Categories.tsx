import React from 'react';
import { Book, Bookmark, FileText, Heart, MessageCircle, Music, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    { icon: <Book className="h-6 w-6" />, name: "الكتب", count: "+2,500", color: "emerald" },
    { icon: <Music className="h-6 w-6" />, name: "الدروس الصوتية", count: "+1,000", color: "blue" },
    { icon: <FileText className="h-6 w-6" />, name: "المقالات", count: "+5,000", color: "indigo" },
    { icon: <MessageCircle className="h-6 w-6" />, name: "الشروح", count: "+3,000", color: "purple" },
    { icon: <Heart className="h-6 w-6" />, name: "السير", count: "+500", color: "pink" },
    { icon: <Bookmark className="h-6 w-6" />, name: "المجموعات", count: "+100", color: "yellow" }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100",
      blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-100",
      indigo: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100",
      purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-100",
      pink: "bg-pink-50 text-pink-600 group-hover:bg-pink-100",
      yellow: "bg-yellow-50 text-yellow-600 group-hover:bg-yellow-100"
    };
    return colors[color] || colors.emerald;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 font-arabic">تصفح الأقسام</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-arabic">
            اكتشف مجموعة واسعة من المصادر العلمية المتنوعة، من الكتب الأساسية إلى الشروح والدروس
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              to={`/library?category=${encodeURIComponent(category.name)}`}
              key={index}
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center space-x-4"
            >
              <div className={`p-4 rounded-xl transition-colors duration-300 ${getColorClasses(category.color)}`}>
                {category.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-800 mb-1 font-arabic">{category.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 font-arabic">{category.count} عنصر</p>
                  <ArrowLeft className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
