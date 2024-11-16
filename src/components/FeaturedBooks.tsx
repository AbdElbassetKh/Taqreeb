import React from 'react';

const FeaturedBooks = () => {
  const books = [
    {
      title: "صحيح البخاري",
      author: "الإمام البخاري",
      cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "حديث"
    },
    {
      title: "كتاب التوحيد",
      author: "شيخ الإسلام ابن تيمية",
      cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "عقيدة"
    },
    {
      title: "السنّة",
      author: "الإمام أحمد بن حنبل",
      cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "عقيدة"
    }
  ];

  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 font-arabic">الكتب المميزة</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="h-48 overflow-hidden">
              <img 
                src={book.cover} 
                alt={book.title}
                className="w-full h-full object-cover transform hover:scale-105 transition"
              />
            </div>
            <div className="p-6">
              <span className="text-sm text-emerald-600 font-semibold font-arabic">{book.category}</span>
              <h3 className="text-xl font-bold mt-2 mb-1 font-arabic">{book.title}</h3>
              <p className="text-gray-600 font-arabic">{book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
