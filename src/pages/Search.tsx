import React, { useState } from 'react';
import { Search as SearchIcon, Filter, Book, User, FileText } from 'lucide-react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'الكل', icon: <SearchIcon className="h-4 w-4" /> },
    { id: 'books', label: 'الكتب', icon: <Book className="h-4 w-4" /> },
    { id: 'authors', label: 'المؤلفون', icon: <User className="h-4 w-4" /> },
    { id: 'articles', label: 'المقالات', icon: <FileText className="h-4 w-4" /> },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث عن الكتب والمؤلفين والمواضيع..."
            className="w-full px-6 py-4 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-arabic"
          />
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        <div className="flex space-x-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition ${
                activeTab === tab.id
                  ? 'bg-emerald-50 text-emerald-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab.icon}
              <span className="font-arabic mr-2">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-800 font-arabic">نتائج البحث</h2>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition">
            <Filter className="h-4 w-4 ml-2" />
            <span className="font-arabic">تصفية</span>
          </button>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <p className="text-gray-500 text-center font-arabic">
              أدخل كلمة البحث للعثور على الكتب والمؤلفين والمقالات
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
