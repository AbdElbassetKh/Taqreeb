import React from 'react';
import { Book, Bookmark, FileText, Heart, MessageCircle, Music } from 'lucide-react';

const Categories = () => {
  const categories = [
    { icon: <Book className="h-6 w-6" />, name: "الكتب", count: "+2,500" },
    { icon: <Music className="h-6 w-6" />, name: "الدروس الصوتية", count: "+1,000" },
    { icon: <FileText className="h-6 w-6" />, name: "المقالات", count: "+5,000" },
    { icon: <MessageCircle className="h-6 w-6" />, name: "الشروح", count: "+3,000" },
    { icon: <Heart className="h-6 w-6" />, name: "السير", count: "+500" },
    { icon: <Bookmark className="h-6 w-6" />, name: "المجموعات", count: "+100" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 font-arabic">تصفح الأقسام</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition flex items-center space-x-4 cursor-pointer"
            >
              <div className="p-3 bg-emerald-50 rounded-lg text-emerald-600">
                {category.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 font-arabic">{category.name}</h3>
                <p className="text-gray-500 font-arabic">{category.count} عنصر</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
