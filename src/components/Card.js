// src/components/Card.js
import React from 'react';

function Card({ title, description }) {
  return (
    <div className="p-6 bg-primary text-textPrimary rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-4">{description}</p>
    </div>
  );
}

export default Card;