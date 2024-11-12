import React from 'react';
import { MessageCircle, Heart } from 'lucide-react';

const BookBenefits = () => {
  const benefits = [
    {
      id: 1,
      user: 'Abdullah',
      content: 'The chapter on sincerity really impacted my understanding of worship.',
      likes: 24,
      date: '2 days ago'
    },
    // Add more benefits
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Benefits Shared</h2>
      
      {/* Share benefit form */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <textarea
          placeholder="Share a benefit you learned from this book..."
          className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          rows={3}
        />
        <div className="mt-4 flex justify-end">
          <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition">
            Share Benefit
          </button>
        </div>
      </div>

      {/* Benefits list */}
      <div className="space-y-6">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-gray-800">{benefit.user}</p>
                <p className="text-sm text-gray-500 mt-1">{benefit.date}</p>
              </div>
              <button className="flex items-center space-x-1 text-gray-500 hover:text-emerald-600">
                <Heart className="h-4 w-4" />
                <span>{benefit.likes}</span>
              </button>
            </div>
            <p className="mt-4 text-gray-700">{benefit.content}</p>
            <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
              <button className="flex items-center space-x-1 hover:text-emerald-600">
                <MessageCircle className="h-4 w-4" />
                <span>Reply</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookBenefits;