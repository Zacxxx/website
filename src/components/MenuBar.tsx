// File: src/components/MenuBar.tsx
import React, { useState } from 'react';
import { Home, Info, Briefcase, Users, Moon, Settings, User, MoreHorizontal } from 'lucide-react';
import Button01 from './Button01';
import Button02 from './Button02';
import SearchBar from './SearchBar';

interface MenuBarProps {
  setCurrentPage: (page: string) => void;
  setIsNightMode: (isNightMode: boolean) => void;
  isNightMode: boolean;
  setIsPanelOpen: (isOpen: boolean) => void;
  setPanelContent: (content: string) => void;
}

const MenuBar: React.FC<MenuBarProps> = ({ setCurrentPage, setIsNightMode, isNightMode, setIsPanelOpen, setPanelContent }) => {
  const [menuSize, setMenuSize] = useState({ width: 'w-full', height: 'h-16' });

  const handleResize = (e: MouseEvent, direction: 'width' | 'height') => {
    if (direction === 'width') {
      const newWidth = Math.max(300, Math.min(e.clientX, window.innerWidth));
      setMenuSize(prev => ({ ...prev, width: `w-[${newWidth}px]` }));
    } else if (direction === 'height') {
      const newHeight = Math.max(64, Math.min(e.clientY, window.innerHeight / 2));
      setMenuSize(prev => ({ ...prev, height: `h-[${newHeight}px]` }));
    }
  };

  return (
    <div className={`fixed top-0 left-0 ${menuSize.width} ${menuSize.height} bg-white bg-opacity-80 shadow-md p-4 flex flex-col justify-between transition-all duration-300 ease-in-out`}>
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <Button01 onClick={() => setCurrentPage('home')}><Home size={20} /></Button01>
          <Button01 onClick={() => setCurrentPage('info')}><Info size={20} /></Button01>
          <Button01 onClick={() => setCurrentPage('services')}><Briefcase size={20} /></Button01>
          <Button01 onClick={() => setCurrentPage('partnerships')}><Users size={20} /></Button01>
          <Button01 onClick={() => setIsNightMode(!isNightMode)}><Moon size={20} /></Button01>
        </div>
        <div className="flex items-center space-x-4">
          <SearchBar />
          <Button02 onClick={() => { setIsPanelOpen(true); setPanelContent('projects'); }}>Projects</Button02>
          <Button02 onClick={() => { setIsPanelOpen(true); setPanelContent('options'); }}>
            <Settings size={20} />
          </Button02>
          <Button02 onClick={() => { setIsPanelOpen(true); setPanelContent('user'); }}>
            <User size={20} />
          </Button02>
          <Button02 onClick={() => { setIsPanelOpen(true); setPanelContent('more'); }}>
            <MoreHorizontal size={20} />
          </Button02>
        </div>
      </div>
      <div 
        className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize" 
        onMouseDown={(e) => {
          const onMouseMove = (e: MouseEvent) => {
            handleResize(e, 'width');
            handleResize(e, 'height');
          };
          const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
          };
          document.addEventListener('mousemove', onMouseMove);
          document.addEventListener('mouseup', onMouseUp);
        }}
      />
    </div>
  );
};

export default MenuBar;