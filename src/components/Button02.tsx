import React from 'react';

const Button02 = ({ children, onClick }) => (
  <button
    className={`
      px-4 py-2 rounded-md bg-blue-500 text-white
      transition-all duration-300 hover:bg-blue-600
      active:scale-95 relative overflow-hidden
    `}
    onClick={onClick}
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute inset-0 bg-white opacity-0 hover:opacity-25 transition-opacity duration-300"></span>
  </button>
);

export default Button02;