import React from 'react';

const Button01 = ({ children, onClick }) => (
  <button
    className={`
      px-4 py-2 rounded-md transition-all duration-300 
      hover:bg-gray-200 hover:shadow-lg active:scale-95 
      relative overflow-hidden group
    `}
    onClick={onClick}
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></span>
    <span className="absolute inset-0 flex items-center justify-center">
      <span className="h-full w-0 bg-blue-500 opacity-25 group-hover:w-full transition-all duration-300 ease-out"></span>
    </span>
  </button>
);

export default Button01;