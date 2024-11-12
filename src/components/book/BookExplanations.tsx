import React from 'react';
import { Headphones, FileText } from 'lucide-react';

const BookExplanations = ({ explanations }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Explanations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {explanations.map((explanation) => (
          <div key={explanation.id} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-emerald-50 rounded-lg">
                {explanation.type === 'audio' ? (
                  <Headphones className="h-6 w-6 text-emerald-600" />
                ) : (
                  <FileText className="h-6 w-6 text-emerald-600" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">{explanation.title}</h3>
                <p className="text-gray-600">
                  {explanation.type === 'audio' ? explanation.scholar : explanation.author}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  {explanation.type === 'audio' ? explanation.duration : `${explanation.pages} pages`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookExplanations;