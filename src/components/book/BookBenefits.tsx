import React, { useState } from 'react';
import { MessageCircle, Heart, Quote, BookOpen, BarChart2 } from 'lucide-react';

const BookBenefits = () => {
  const [activeTab, setActiveTab] = useState('benefits');
  
  const tabs = [
    { id: 'benefits', label: 'Benefits', icon: <Heart className="h-4 w-4" /> },
    { id: 'quotes', label: 'Quotations', icon: <Quote className="h-4 w-4" /> },
    { id: 'summaries', label: 'Summaries', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'diagrams', label: 'Diagrams', icon: <BarChart2 className="h-4 w-4" /> }
  ];

  const contributions = {
    benefits: [
      {
        id: 1,
        user: 'Abdullah',
        content: 'The chapter on sincerity really impacted my understanding of worship.',
        likes: 24,
        date: '2 days ago'
      }
    ],
    quotes: [
      {
        id: 2,
        user: 'Ahmad',
        content: '"And know that the heart\'s rectification and corruption is tied to its knowledge and intention." - p.45',
        likes: 18,
        date: '3 days ago'
      }
    ],
    summaries: [
      {
        id: 3,
        user: 'Sarah',
        content: 'Key points from Chapter 3: 1) The importance of following the Salaf, 2) The middle path in understanding Names and Attributes, 3) The danger of innovation.',
        likes: 32,
        date: '1 day ago'
      }
    ],
    diagrams: [
      {
        id: 4,
        user: 'Mohammed',
        content: '[Diagram Link] Visual representation of the categories of Tawheed discussed in the book',
        likes: 45,
        date: '4 days ago'
      }
    ]
  };

  return (
    <div className="space-y-8">
      {/* Tabs */}
      <div className="flex space-x-4 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 py-4 px-4 border-b-2 transition ${
              activeTab === tab.id
                ? 'border-emerald-600 text-emerald-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content list */}
      <div className="space-y-6">
        {contributions[activeTab].map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-gray-800">{item.user}</p>
                <p className="text-sm text-gray-500 mt-1">{item.date}</p>
              </div>
              <button className="flex items-center space-x-1 text-gray-500 hover:text-emerald-600">
                <Heart className="h-4 w-4" />
                <span>{item.likes}</span>
              </button>
            </div>
            <p className="mt-4 text-gray-700">{item.content}</p>
            <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
              <button className="flex items-center space-x-1 hover:text-emerald-600">
                <MessageCircle className="h-4 w-4" />
                <span>Reply</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Share form */}
      <div className="bg-white p-6 rounded-lg shadow-sm mt-8">
        <h3 className="font-semibold mb-4">Share your thoughts</h3>
        <textarea
          placeholder={`Share a ${activeTab.slice(0, -1)} from this book...`}
          className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          rows={3}
        />
        <div className="mt-4 flex justify-end">
          <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookBenefits;
