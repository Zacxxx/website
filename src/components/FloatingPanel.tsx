// File: components/FloatingPanel.tsx
import React, { useRef, useEffect } from 'react';
import { X } from 'lucide-react';

const FloatingPanel = ({ isOpen, onClose, content }) => {
  const panelRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      className={`
        fixed inset-0 flex items-center justify-center
        transition-opacity duration-300
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    >
      <div
        ref={panelRef}
        className={`
          bg-white shadow-xl rounded-lg p-6 w-96 h-96 overflow-auto
          transform transition-all duration-300
          ${isOpen ? 'scale-100 rotate-0' : 'scale-95 rotate-3'}
        `}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4">{content}</h2>
        <p>This is the content for the {content} panel.</p>
      </div>
    </div>
  );
};

export default FloatingPanel;