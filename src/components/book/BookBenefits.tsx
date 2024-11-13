import React, { useState } from 'react';
import { MessageCircle, Heart, Quote, BookOpen, BarChart2, ArrowUpDown, Clock } from 'lucide-react';

const BookBenefits = () => {
  const [activeTab, setActiveTab] = useState('benefits');
  const [sortBy, setSortBy] = useState('newest');
  const [jumpToNumber, setJumpToNumber] = useState('');
  
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
        content: 'The chapter on sincerity really impacted my understanding of worship.',
        likes: 24,
        date: '2024-03-15T10:00:00Z'
      },
      {
        id: 5,
        content: 'The explanation of Tawheed in this book is very comprehensive.',
        likes: 42,
        date: '2024-03-14T15:30:00Z'
      },
      {
        id: 6,
        content: 'This book helped me understand the importance of following the Salaf.',
        likes: 15,
        date: '2024-03-16T08:45:00Z'
      }
    ],
    quotes: [
      {
        id: 2,
        content: '"And know that the heart\'s rectification and corruption is tied to its knowledge and intention." - p.45',
        likes: 18,
        date: '2024-03-13T09:20:00Z'
      }
    ],
    summaries: [
      {
        id: 3,
        content: 'Key points from Chapter 3: 1) The importance of following the Salaf, 2) The middle path in understanding Names and Attributes, 3) The danger of innovation.',
        likes: 32,
        date: '2024-03-12T14:15:00Z'
      }
    ],
    diagrams: [
      {
        id: 4,
        content: '[Diagram Link] Visual representation of the categories of Tawheed discussed in the book',
        likes: 45,
        date: '2024-03-11T11:30:00Z'
      }
    ]
  };

  const sortContributions = (items) => {
    const sorted = [...items];
    if (sortBy === 'likes') {
      sorted.sort((a, b) => b.likes - a.likes);
    } else if (sortBy === 'newest') {
      sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === 'oldest') {
      sorted.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }
    return sorted;
  };

  const handleJumpTo = (e) => {
    e.preventDefault();
    const number = parseInt(jumpToNumber);
    if (number) {
      const element = document.getElementById(`${activeTab}-${number}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        element.classList.add('bg-emerald-50');
        setTimeout(() => {
          element.classList.remove('bg-emerald-50');
        }, 2000);
      }
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-8">
      {/* Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
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
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <form onSubmit={handleJumpTo} className="flex items-center space-x-2">
              <input
                type="number"
                min="1"
                placeholder="Jump to #"
                value={jumpToNumber}
                onChange={(e) => setJumpToNumber(e.target.value)}
                className="w-20 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition"
              >
                Go
              </button>
            </form>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="likes">Most Liked</option>
          </select>
        </div>
      </div>

      {/* Content list */}
      <div className="space-y-6">
        {sortContributions(contributions[activeTab]).map((item, index) => (
          <div
            id={`${activeTab}-${index + 1}`}
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-sm transition duration-300"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-gray-800">{`${activeTab.slice(0, -1).charAt(0).toUpperCase() + activeTab.slice(0, -1).slice(1)} ${index + 1}`}</p>
                <p className="text-sm text-gray-500 mt-1">{formatDate(item.date)}</p>
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
