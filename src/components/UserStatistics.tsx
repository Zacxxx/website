import React, { useState } from 'react';
import { User } from 'lucide-react';

const UserStatistics: React.FC = () => {
  const [showStats, setShowStats] = useState(false);

  return (
    <div className="relative group">
      <button
        onClick={() => setShowStats(!showStats)}
        className="text-gray-600 hover:text-blue-500 transition-colors duration-300 flex items-center"
      >
        <User size={14} className="mr-1" />
        <span style={{ fontSize: '0.7rem' }}>Statistiques</span>
      </button>
      {showStats && (
        <div className="absolute bottom-full left-0 mb-2 p-2 bg-white shadow-lg rounded-md">
          <p>Temps de connexion: 2h 30min</p>
          <p>Actions réalisées: 15</p>
        </div>
      )}
    </div>
  );
};

export default UserStatistics;