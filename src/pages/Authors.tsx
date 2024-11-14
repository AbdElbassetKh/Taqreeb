import React from 'react';
import { MapPin, Book, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Heading, Subheading, Paragraph } from '../components/DesignSystem';

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
    {
      id: 2,
      name: 'Ibn Taymiyyah',
      period: '661-728 AH',
      location: 'Damascus',
      expertise: ['Aqeedah', 'Fiqh', 'Tafsir'],
      works: 350,
      students: '500+',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <Heading className="mb-8">Classical Scholars</Heading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {authors.map((author) => (
          <article
            key={author.id} 
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden group"
          >
            <Link to={`/author/${author.id}`}>
              <div className="h-48 relative">
                <img
                  src={author.image}
                  alt={`Portrait of ${author.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <header className="absolute bottom-4 left-4 text-white">
                  <Subheading>{author.name}</Subheading>
                  <Paragraph className="text-sm text-gray-200">{author.period}</Paragraph>
                </header>
              </div>
            </Link>
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
          </article>
        ))}
      </div>
    </section>
  );
};

export default Authors;
