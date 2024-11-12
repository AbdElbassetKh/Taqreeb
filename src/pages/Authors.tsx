import React from 'react';
import { MapPin, Book, Users } from 'lucide-react';

const Authors = () => {
  const authors = [
    {
      id: 1,
      name: 'Imam Al-Bukhari',
      period: '194-256 AH',
      location: 'Bukhara',
      expertise: ['Hadith', 'Fiqh'],
      works: 42,
      students: '1000+',
      image: 'https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    // Add more authors
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Classical Scholars</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {authors.map((author) => (
          <div key={author.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden">
            <div className="h-48 relative">
              <img
                src={author.image}
                alt={author.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-xl font-bold">{author.name}</h2>
                <p className="text-sm text-gray-200">{author.period}</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 text-gray-600 mb-4">
                <MapPin className="h-4 w-4" />
                <span>{author.location}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {author.expertise.map((field) => (
                  <span
                    key={field}
                    className="bg-emerald-50 text-emerald-600 text-sm px-3 py-1 rounded-full"
                  >
                    {field}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-1 text-gray-600">
                  <Book className="h-4 w-4" />
                  <span>{author.works} works</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{author.students} students</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Authors;