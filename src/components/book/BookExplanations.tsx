import React, { useState } from 'react';
import { Headphones, FileText, Play, Download } from 'lucide-react';

const BookExplanations = ({ explanations }) => {
  const [activeType, setActiveType] = useState('all');

  const types = [
    { id: 'all', label: 'All' },
    { id: 'audio', label: 'Audio', icon: <Headphones className="h-4 w-4" /> },
    { id: 'text', label: 'Written', icon: <FileText className="h-4 w-4" /> }
  ];

  const filteredExplanations = activeType === 'all' 
    ? explanations 
    : explanations.filter(exp => exp.type === activeType);

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Explanations</h2>
        <div className="flex space-x-2">
          {types.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveType(type.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition ${
                activeType === type.id
                  ? 'bg-emerald-50 text-emerald-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {type.icon}
              <span>{type.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredExplanations.map((explanation) => (
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
                <div className="mt-4 flex space-x-3">
                  {explanation.type === 'audio' ? (
                    <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
                      <Play className="h-4 w-4" />
                      <span>Listen</span>
                    </button>
                  ) : (
                    <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookExplanations;
