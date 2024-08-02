import React from 'react';

interface ContentBlockProps {
  children: React.ReactNode;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ children }) => (
  <div className="fixed top-20 left-0 right-0 bottom-20 flex justify-center items-start overflow-hidden">
    <div className="w-11/12 h-full max-w-7xl bg-gradient-to-b from-gray-100/80 to-gray-300/80 backdrop-blur-md rounded-lg shadow-lg overflow-auto">
      <div className="p-8 mb-20"> {/* Ajout de mb-20 pour créer de l'espace en bas */}
        {children}
      </div>
    </div>
  </div>
);

export default ContentBlock;