import React, { useState, useEffect } from 'react';
import MenuBar from './components/MenuBar';
import ContentBlock from './components/ContentBlock';
import FloatingPanel from './components/FloatingPanel';
import AnimatedBackground from './components/AnimatedBackground';
import { DataBack, GeneralBack, UtilBack } from './components/backend/BackendServices';
import Router from './Router';

const App = () => {
  const [isNightMode, setIsNightMode] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [panelContent, setPanelContent] = useState('');
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    document.body.className = isNightMode ? 'night-mode' : '';
  }, [isNightMode]);

  return (
    <div className={`min-h-screen ${isNightMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <AnimatedBackground />
      <MenuBar
        setCurrentPage={setCurrentPage}
        setIsNightMode={setIsNightMode}
        isNightMode={isNightMode}
        setIsPanelOpen={setIsPanelOpen}
        setPanelContent={setPanelContent}
      />
      <ContentBlock>
        <Router currentPage={currentPage} />
      </ContentBlock>
      <FloatingPanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        content={panelContent}
      />
      <DataBack />
      <GeneralBack />
      <UtilBack />
    </div>
  );
};

export default App;