import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar';
import Footer from './components/Footer';
import FigmaPage from './pages/Figma';
import CertificadosPage from './pages/Certificados';
import ProjetosPage from './pages/Projetos';
import SobrePage from './pages/Sobre';
import './styles/Layout.css';

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const rightSidebarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    if (!isMobile) setIsSidebarCollapsed(prev => !prev);
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isRightSidebarOpen &&
        rightSidebarRef.current &&
        !rightSidebarRef.current.contains(event.target) &&
        !event.target.closest('.config-icon')
      ) {
        setIsRightSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isRightSidebarOpen]);

  return (
    <div className="app-container">
      <Header
        onToggleSidebar={toggleSidebar}
        isSidebarCollapsed={isSidebarCollapsed}
        onToggleRightSidebar={toggleRightSidebar}
      />

      <div className="layout-wrapper">
        <Sidebar collapsed={isMobile ? false : isSidebarCollapsed} />      

        <main className={`main-content ${(!isMobile && isSidebarCollapsed) ? 'collapsed' : ''}`}>
          <Routes>
            <Route path="/figma" element={<FigmaPage />} />
            <Route path="/certificados" element={<CertificadosPage />} />
            <Route path="/projetos" element={<ProjetosPage />} />
            <Route path="/sobre" element={<SobrePage />} />
          </Routes>

          <Footer />
        </main>

        <RightSidebar
          isOpen={isRightSidebarOpen}
          onClose={() => setIsRightSidebarOpen(false)}
          ref={rightSidebarRef}
        />
      </div>
    </div>    
  );
}

export default App;
