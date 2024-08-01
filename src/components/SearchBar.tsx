// File: components/SearchBar.tsx
import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => (
  <div className="relative group">
    <input
      type="text"
      placeholder="Search me"
      className="px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 transition-all duration-300 ease-in-out group-hover:w-64"
    />
    <Search size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-25 rounded-full transition-opacity duration-300 pointer-events-none" />
  </div>
);

export default SearchBar;