import React, { useState } from 'react';
import { Search as SearchIcon, Filter, Book, User, FileText } from 'lucide-react';
import { Button, Heading, Input, Paragraph } from '../components/DesignSystem';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All', icon: <SearchIcon className="h-4 w-4" /> },
    { id: 'books', label: 'Books', icon: <Book className="h-4 w-4" /> },
    { id: 'authors', label: 'Authors', icon: <User className="h-4 w-4" /> },
    { id: 'articles', label: 'Articles', icon: <FileText className="h-4 w-4" /> },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-8">
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for books, authors, or topics..."
          />
          <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        <div className="flex space-x-4 mb-8">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition ${
                activeTab === tab.id
                  ? 'bg-emerald-50 text-emerald-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </Button>
          ))}
        </div>

        <div className="flex items-center justify-between mb-6">
          <Heading className="text-lg">Search Results</Heading>
          <Button variant="secondary" size="medium" className="flex items-center space-x-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
        </div>

        <div className="space-y-4">
          {/* Placeholder for search results */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <Paragraph className="text-center">
              Enter a search term to find books, authors, and articles
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
