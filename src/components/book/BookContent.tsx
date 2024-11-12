import React from 'react';
import { Book } from 'lucide-react';

const BookContent = ({ editions }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Available Editions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {editions.map((edition) => (
          <div key={edition.id} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg mb-2">{edition.name}</h3>
                <p className="text-gray-600">{edition.publisher}, {edition.year}</p>
                <p className="text-gray-500 text-sm mt-2">{edition.pages} pages</p>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition">
                <Book className="h-4 w-4" />
                <span>Read</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookContent;