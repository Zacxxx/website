import React, { useState, useEffect, useRef } from 'react';
import { X, Home, Info, Briefcase, Users, Moon, Settings, User, MoreHorizontal, Search } from 'lucide-react';

const CombinedComponents = () => {
  const [isNightMode, setIsNightMode] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [panelContent, setPanelContent] = useState('');
  const [currentPage, setCurrentPage] = useState('home');
  const [menuSize, setMenuSize] = useState({ width: 'w-full', height: 'h-16' });

  useEffect(() => {
    document.body.className = isNightMode ? 'night-mode' : '';
  }, [isNightMode]);

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

  const FloatingPanel = ({ isOpen, onClose, children }) => {
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
          {children}
        </div>
      </div>
    );
  };

  const MenuBar = () => {
    const handleResize = (e, direction) => {
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
            const onMouseMove = (e) => {
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

  const ContentBlock = ({ children }) => (
    <div className="mt-20 mx-auto max-w-4xl bg-white bg-opacity-90 rounded-lg shadow-lg p-8 overflow-auto backdrop-blur-sm">
      {children}
    </div>
  );

  const AnimatedBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      let animationFrameId;

      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();

      const particles = [];
      const particleCount = 100;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5)`,
          vx: Math.random() * 0.5 - 0.25,
          vy: Math.random() * 0.5 - 0.25
        });
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Create gradient background
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, 'rgba(30, 64, 175, 0.4)');
        gradient.addColorStop(0.5, 'rgba(109, 40, 217, 0.4)');
        gradient.addColorStop(1, 'rgba(190, 24, 93, 0.4)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
        });

        animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        window.removeEventListener('resize', resizeCanvas);
        cancelAnimationFrame(animationFrameId);
      };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
  };

  // Simulated backend components
  const DataBack = () => {
    // Simulate Prisma usage
    useEffect(() => {
      console.log('DataBack: Initializing Prisma client');
      return () => console.log('DataBack: Disconnecting Prisma client');
    }, []);
    return null;
  };

  const GeneralBack = () => {
    useEffect(() => {
      console.log('GeneralBack: Setting up general backend services');
      return () => console.log('GeneralBack: Cleaning up general backend services');
    }, []);
    return null;
  };

  const UtilBack = () => {
    useEffect(() => {
      console.log('UtilBack: Initializing utility functions');
      return () => console.log('UtilBack: Cleaning up utility functions');
    }, []);
    return null;
  };

  return (
    <div className={`min-h-screen ${isNightMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <AnimatedBackground />
      <MenuBar />
      <ContentBlock>
        {currentPage === 'home' && <h1 className="text-3xl font-bold">Welcome Home</h1>}
        {currentPage === 'info' && <h1 className="text-3xl font-bold">Information</h1>}
        {currentPage === 'services' && <h1 className="text-3xl font-bold">Our Services</h1>}
        {currentPage === 'partnerships' && <h1 className="text-3xl font-bold">Our Partnerships</h1>}
      </ContentBlock>
      <FloatingPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">{panelContent}</h2>
        <p>This is the content for the {panelContent} panel.</p>
      </FloatingPanel>
      <DataBack />
      <GeneralBack />
      <UtilBack />
    </div>
  );
};

export default CombinedComponents;