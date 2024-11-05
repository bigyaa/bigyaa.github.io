// src/components/Button.js
import React from 'react';

function Button({ onClick, children }) {
  return (
    <button
      className="px-6 py-3 bg-buttonBackground text-textPrimary font-semibold rounded-md hover:bg-buttonHover"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;