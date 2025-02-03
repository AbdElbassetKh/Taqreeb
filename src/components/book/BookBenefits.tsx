import React, { useState } from 'react';
import { MessageCircle, Heart, Quote, BookOpen, BarChart2, Clock } from 'lucide-react';

const BookBenefits = () => {
  const [activeTab, setActiveTab] = useState('benefits');
  const [sortBy, setSortBy] = useState('newest');
  const [jumpToNumber, setJumpToNumber] = useState('');
  
  const tabs = [
    { id: 'benefits', label: 'الفوائد', icon: <Heart className="h-4 w-4" /> },
    { id: 'quotes', label: 'الاقتباسات', icon: <Quote className="h-4 w-4" /> },
    { id: 'summaries', label: 'الملخصات', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'diagrams', label: 'المخططات', icon: <BarChart2 className="h-4 w-4" /> }
  ];

  const contributions = {
    benefits: [
      {
        id: 1,
        content: 'باب الإخلاص في هذا الكتاب غيّر فهمي للعبادة',
        likes: 24,
        date: '2024-03-15T10:00:00Z'
      },
      {
        id: 5,
        content: 'شرح التوحيد في هذا الكتاب شامل وواضح',
        likes: 42,
        date: '2024-03-14T15:30:00Z'
      },
      {
        id: 6,
        content: 'ساعدني هذا الكتاب في فهم أهمية اتباع السلف',
        likes: 15,
        date: '2024-03-16T08:45:00Z'
      }
    ],
    quotes: [
      {
        id: 2,
        content: '"واعلم أن صلاح القلب وفساده مرتبط بعلمه ونيته" - ص.45',
        likes: 18,
        date: '2024-03-13T09:20:00Z'
      }
    ],
    summaries: [
      {
        id: 3,
        content: 'النقاط الرئيسية من الفصل الثالث: ١) أهمية اتباع السلف، ٢) الوسطية في فهم الأسماء والصفات، ٣) خطر البدعة',
        likes: 32,
        date: '2024-03-12T14:15:00Z'
      }
    ],
    diagrams: [
      {
        id: 4,
        content: '[رابط المخطط] تمثيل بصري لأقسام التوحيد المذكورة في الكتاب',
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
    return new Intl.DateTimeFormat('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div className="flex space-x-4 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-4 px-4 border-b-2 transition font-arabic ${
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
                placeholder="انتقل إلى #"
                value={jumpToNumber}
                onChange={(e) => setJumpToNumber(e.target.value)}
                className="w-24 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-arabic"
              />
              <button
                type="submit"
                className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition font-arabic"
              >
                انتقل
              </button>
            </form>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-arabic"
          >
            <option value="newest">الأحدث أولاً</option>
            <option value="oldest">الأقدم أولاً</option>
            <option value="likes">الأكثر إعجاباً</option>
          </select>
        </div>
      </div>

      <div className="space-y-6">
        {sortContributions(contributions[activeTab]).map((item, index) => (
          <div
            id={`${activeTab}-${index + 1}`}
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-sm transition duration-300"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-gray-800 font-arabic">{`${index + 1} ${tabs.find(t => t.id === activeTab)?.label}`}</p>
                <p className="text-sm text-gray-500 mt-1 font-arabic">{formatDate(item.date)}</p>
              </div>
              <button className="flex items-center space-x-1 text-gray-500 hover:text-emerald-600">
                <Heart className="h-4 w-4" />
                <span>{item.likes}</span>
              </button>
            </div>
            <p className="mt-4 text-gray-700 font-arabic">{item.content}</p>
            <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
              <button className="flex items-center space-x-1 hover:text-emerald-600">
                <MessageCircle className="h-4 w-4" />
                <span className="font-arabic">رد</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm mt-8">
        <h3 className="font-semibold mb-4 font-arabic">شارك أفكارك</h3>
        <textarea
          placeholder={`شارك ${tabs.find(t => t.id === activeTab)?.label} من هذا الكتاب...`}
          className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-arabic"
          rows={3}
        />
        <div className="mt-4 flex justify-end">
          <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition font-arabic">
            شارك
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookBenefits;
