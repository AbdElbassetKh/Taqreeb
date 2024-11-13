import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Book, Headphones, FileText, Share2, User } from 'lucide-react';
import BookContent from '../components/book/BookContent';
import BookExplanations from '../components/book/BookExplanations';
import BookBenefits from '../components/book/BookBenefits';

const BookDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('content');

  const book = {
    id,
    title: 'Al-Aqidah Al-Wasitiyah',
    arabicTitle: 'العقيدة الواسطية',
    author: 'Ibn Taymiyyah',
    authorId: '1',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    introduction: `Al-Aqidah Al-Wasitiyah is one of the most important works of Sheikh ul-Islam Ibn Taymiyyah, written in response to a request from the judge of Wasit, Iraq. This comprehensive text outlines the core beliefs of Ahl us-Sunnah wal-Jamaah, particularly regarding Allah's names and attributes, the Day of Judgment, divine decree, and the proper understanding of faith.

Written in 698 AH, this work stands out for its clear presentation and strong evidences from the Quran and Sunnah. It has become a standard text in Islamic educational institutions worldwide for teaching Islamic theology.`,
    category: 'Aqeedah',
    language: 'Arabic',
    year: '698 AH',
    editions: [
      {
        id: 1,
        name: 'Dar us Salam Edition',
        publisher: 'Dar us Salam Publications',
        year: '1999',
        pages: 168,
        languages: ['Arabic', 'English'],
        format: 'Hardcover'
      },
      {
        id: 2,
        name: 'Annotated Scholar\'s Edition',
        publisher: 'Maktabah al-Rushd',
        year: '2005',
        pages: 312,
        languages: ['Arabic'],
        format: 'Hardcover with Commentary'
      }
    ],
    explanations: [
      {
        id: 1,
        type: 'audio',
        title: 'Explanation of Al-Aqidah Al-Wasitiyah',
        scholar: 'Sheikh Salih Al-Fawzan',
        duration: '40 hours',
        language: 'Arabic',
        year: '2010'
      },
      {
        id: 2,
        type: 'text',
        title: 'Commentary on Al-Aqidah Al-Wasitiyah',
        author: 'Sheikh Muhammad Al-Uthaymeen',
        pages: 486,
        publisher: 'Dar Ibn Al-Jawzi',
        year: '1995'
      }
    ],
    topics: [
      'Allah\'s Names and Attributes',
      'Angels and Divine Books',
      'Prophets and Messengers',
      'Day of Judgment',
      'Divine Decree',
      'Faith and Its Manifestations'
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Book Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="w-full md:w-1/3">
          <img
            src={book.cover}
            alt={book.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
            <p className="text-2xl font-arabic text-gray-600">{book.arabicTitle}</p>
          </div>
          <Link 
            to={`/author/${book.authorId}`}
            className="flex items-center space-x-2 text-lg text-gray-600 hover:text-emerald-600 mb-6"
          >
            <User className="h-5 w-5" />
            <span>{book.author}</span>
          </Link>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-sm">
              {book.category}
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
              {book.language}
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
              {book.year}
            </span>
          </div>
          <div className="prose max-w-none mb-8">
            {book.introduction.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
            ))}
          </div>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
              <Book className="h-4 w-4" />
              <span>Read Book</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Topics */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-12">
        <h2 className="text-xl font-bold mb-4">Main Topics Covered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {book.topics.map((topic) => (
            <div key={topic} className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-emerald-600 rounded-full"></div>
              <span className="text-gray-700">{topic}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <TabButton 
              icon={<Book />} 
              label="Content" 
              active={activeTab === 'content'} 
              onClick={() => setActiveTab('content')}
            />
            <TabButton 
              icon={<Headphones />} 
              label="Explanations" 
              active={activeTab === 'explanations'} 
              onClick={() => setActiveTab('explanations')}
            />
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'content' && <BookContent editions={book.editions} />}
      {activeTab === 'explanations' && <BookExplanations explanations={book.explanations} />}

      {/* Benefits Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Benefits</h2>
        <BookBenefits />
      </div>
    </div>
  );
};

const TabButton = ({ icon, label, active = false, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
      active
        ? 'border-emerald-600 text-emerald-600'
        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default BookDetail;
