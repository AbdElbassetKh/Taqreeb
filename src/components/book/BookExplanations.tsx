import React, { useState } from 'react';
import { Headphones, FileText, Play, Download } from 'lucide-react';
import { Button, Heading, Subheading, Paragraph } from '../DesignSystem';

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
    <section className="mb-12">
      <header className="flex items-center justify-between mb-6">
        <Heading>Explanations</Heading>
        <nav className="flex space-x-2" aria-label="Explanation types">
          {types.map((type) => (
            <Button
              key={type.id}
              onClick={() => setActiveType(type.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition ${
                activeType === type.id
                  ? 'bg-emerald-50 text-emerald-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              aria-pressed={activeType === type.id}
            >
              {type.icon}
              <span>{type.label}</span>
            </Button>
          ))}
        </nav>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredExplanations.map((explanation) => (
          <article key={explanation.id} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-emerald-50 rounded-lg">
                {explanation.type === 'audio' ? (
                  <Headphones className="h-6 w-6 text-emerald-600" />
                ) : (
                  <FileText className="h-6 w-6 text-emerald-600" />
                )}
              </div>
              <div className="flex-1">
                <Subheading className="mb-2">{explanation.title}</Subheading>
                <Paragraph className="text-gray-600">
                  {explanation.type === 'audio' ? explanation.scholar : explanation.author}
                </Paragraph>
                <Paragraph className="text-sm mt-2">
                  {explanation.type === 'audio' ? explanation.duration : `${explanation.pages} pages`}
                </Paragraph>
                <div className="mt-4 flex space-x-3">
                  {explanation.type === 'audio' ? (
                    <Button variant="primary" size="medium" className="flex items-center space-x-2" aria-label={`Listen to ${explanation.title}`}>
                      <Play className="h-4 w-4" />
                      <span>Listen</span>
                    </Button>
                  ) : (
                    <Button variant="primary" size="medium" className="flex items-center space-x-2" aria-label={`Download ${explanation.title}`}>
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BookExplanations;
