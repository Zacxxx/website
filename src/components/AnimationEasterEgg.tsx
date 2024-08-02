import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const AnimationEasterEgg: React.FC = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  return (
    <div className="relative group">
      <button
        onClick={() => setShowAnimation(!showAnimation)}
        className="text-gray-600 hover:text-blue-500 transition-colors duration-300 flex items-center"
      >
        <Sparkles size={14} className="mr-1" />
        <span style={{ fontSize: '0.7rem' }}>Animation</span>
      </button>
      {showAnimation && (
        <div className="absolute bottom-full right-0 mb-2 p-2 bg-white shadow-lg rounded-md">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            🌀
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AnimationEasterEgg;