import React, { useEffect, useState } from 'react';
import { Chrono } from 'react-chrono';

function Timeline({experiences}) {
  const [experienceData, setExperienceData] = useState(experiences);

  if (!experienceData) return <p>Loading...</p>;

  const items = experienceData.map((job) => ({
    title: `${job.title} at ${job.company}`,
    cardTitle: job.title,
    cardSubtitle: job.company,
    cardDetailedText: job.description,
    date: job.date
  }));

  return (
    <div className="p-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold mb-8">Experience</h2>
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          classNames={{
            card: 'bg-white text-black p-4 rounded-lg shadow-md',
            cardDetailedText: 'text-lg mt-2',
            cardSubTitle: 'text-xl text-secondary',
            cardText: 'text-base text-gray-600',
            cardTitle: 'text-2xl font-semibold text-accent',
            controls: 'my-controls',
            date: 'text-sm text-textSecondary mt-1',
            title: 'text-2xl font-bold text-gray-900',
          }}
          scrollable={{ scrollbar: true }}
        />
      </div>
  );
}

export default Timeline;