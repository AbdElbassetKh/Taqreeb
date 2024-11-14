import React from 'react';
import { Heading, Subheading, Paragraph } from './DesignSystem';

const FeaturedBooks = () => {
  const books = [
    {
      title: "Sahih Al-Bukhari",
      author: "Imam Al-Bukhari",
      cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Hadith"
    },
    {
      title: "Kitab At-Tawheed",
      author: "Sheikh ul-Islam Ibn Taymiyyah",
      cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Aqeedah"
    },
    {
      title: "Riyad As-Saliheen",
      author: "Imam An-Nawawi",
      cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Ethics"
    }
  ];

  return (
    <section className="py-16 container mx-auto px-4">
      <Heading className="mb-8">Featured Books</Heading>
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
              <span className="text-sm text-emerald-600 font-semibold">{book.category}</span>
              <Subheading className="mt-2 mb-1">{book.title}</Subheading>
              <Paragraph>{book.author}</Paragraph>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
