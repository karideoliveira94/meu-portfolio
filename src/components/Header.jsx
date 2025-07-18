import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import userAvatar from '../assets/user-karina.jpeg';
import logoColapsado from '../assets/logo1.png';
import logoExpandido from '../assets/logo2.png';
import { FaArrowRight, FaArrowLeft, FaCog } from 'react-icons/fa';

const Header = ({ onToggleSidebar, isSidebarCollapsed, onToggleRightSidebar }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/'); // Redireciona para a Home
  };

  return (
    <header className="header-fenox">
      <div
        className={`header-logo ${isSidebarCollapsed ? 'collapsed' : 'expanded'}`}
        onClick={handleLogoClick}
        style={{ cursor: 'pointer' }} // deixa o cursor como "clique"
      >
        <img
          src={isSidebarCollapsed ? logoColapsado : logoExpandido}
          alt="Logo Fenox"
          className="logo"
        />
      </div>

      <div className="header-container">
        <button className="collapse-btn" onClick={onToggleSidebar}>
          {isSidebarCollapsed ? <FaArrowRight /> : <FaArrowLeft />}
        </button>
        <div className="header-container-right align-items-center">
          <button
            className="config-btn config-icon"
            onClick={onToggleRightSidebar}
            aria-label="Open Settings Sidebar"
          >
            <FaCog />
          </button>
          <div className="user-info">
            <div className="user-icon-wrapper">
              <img
                src={userAvatar}
                alt="User Avatar"
                className="user-avatar-img"
                style={{ width: '40px', height: '40px', borderRadius: '50%' }}
              />
              <div className="user-tooltip">
                <span className="user-name">Karina de Oliveira</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
