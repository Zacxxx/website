// File: src/Router.tsx
import React from 'react';
import Home from './pages/Home';
import Info from './pages/Info';
import Services from './pages/Services';
import Partnerships from './pages/Partnerships';

interface RouterProps {
  currentPage: string;
}

const Router: React.FC<RouterProps> = ({ currentPage }) => {
  switch (currentPage) {
    case 'home':
      return <Home />;
    case 'info':
      return <Info />;
    case 'services':
      return <Services />;
    case 'partnerships':
      return <Partnerships />;
    default:
      return <Home />;
  }
};

export default Router;