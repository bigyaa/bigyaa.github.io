import React, { useEffect, useState } from 'react';
import { Chrono } from 'react-chrono';

function Timeline({ experiences }) {
  const [experienceData, setExperienceData] = useState(experiences);

  if (!experienceData) return <p>Loading...</p>;

  const items = experienceData.map((job) => ({
    title: `${job.title} at ${job.company}`,
    cardTitle: job.title,
    cardSubtitle: job.company,
    cardDetailedText: job.description,
    date: job.date,
  }));

  return (
    <div className="p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold mb-8 text-gray-900 text-center">
        Experience
      </h2>
      <div className="max-w-6xl mx-auto">
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: '#3B82F6', // Blue for timeline line and active elements
            secondary: '#F3F4F6', // Light gray for inactive elements
            cardBgColor: '#FFFFFF', // White for card background
            cardForeColor: '#1F2937', // Dark gray for card text
            titleColor: '#1F2937', // Dark gray for titles
            titleColorActive: '#3B82F6', // Blue for active titles
          }}
          classNames={{
            card: 'bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300',
            cardDetailedText: 'text-lg mt-2 text-gray-700',
            cardSubTitle: 'text-xl text-blue-600 font-semibold',
            cardText: 'text-base text-gray-600',
            cardTitle: 'text-2xl font-bold text-gray-900',
            controls: 'my-controls',
            date: 'text-sm text-gray-500 mt-1',
            title: 'text-2xl font-bold text-gray-900',
          }}
          scrollable={{ scrollbar: true }}
          enableOutline
          hideControls={false}
          cardHeight={150}
          cardWidth={500}
          useReadMore={false}
          focusActiveItemOnLoad
        />
      </div>
    </div>
  );
}

export default Timeline;