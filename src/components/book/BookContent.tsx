import React from 'react';
import { Book } from 'lucide-react';
import { Button, Heading, Subheading, Paragraph } from '../DesignSystem';

const BookContent = ({ editions }) => {
  return (
    <div className="mb-12">
      <Heading className="mb-6">Available Editions</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {editions.map((edition) => (
          <div key={edition.id} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <Subheading className="mb-2">{edition.name}</Subheading>
                <Paragraph>{edition.publisher}, {edition.year}</Paragraph>
                <Paragraph className="text-sm mt-2">{edition.pages} pages</Paragraph>
              </div>
              <Button variant="secondary" size="medium" className="flex items-center space-x-2">
                <Book className="h-4 w-4" />
                <span>Read</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookContent;
