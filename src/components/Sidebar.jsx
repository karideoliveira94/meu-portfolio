import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCertificate, FaGithub, FaUser } from 'react-icons/fa'; 
import '../styles/Sidebar.css';

const Sidebar = ({ collapsed }) => {
  const navigate = useNavigate();
  const [highlightTop, setHighlightTop] = useState(null);

  const FigmaIcon = () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em">
      <defs>
        <clipPath id="clip">
          <rect width="24" height="24" rx="4" ry="4" />
        </clipPath>
      </defs>
      <g clipPath="url(#clip)">
        <circle cx="8" cy="5" r="4" fill="#F24E1E" />
        <circle cx="16" cy="5" r="4" fill="#A259FF" />
        <circle cx="8" cy="12" r="4" fill="#FF7262" />
        <circle cx="16" cy="12" r="4" fill="#1ABCFE" />
        <circle cx="8" cy="19" r="4" fill="#0ACF83" />
      </g>
    </svg>
  );

  const menuItems = [
    {
      label: 'Figma',
      icon: <FigmaIcon />,
      path: '/figma'
    },
    {
      label: 'Projetos GitHub',
      icon: <FaGithub />,
      path: '/projetos'
    },
    {
      label: 'Certificados',
      icon: <FaCertificate />,
      path: '/certificados'
    },    
    {
      label: 'Sobre Mim',
      icon: <FaUser />,
      path: '/sobre'
    }
  ].filter(Boolean);

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div id="nav-content" onMouseLeave={() => setHighlightTop(null)}>
        <div className="submenu-container">
          {menuItems.map((item, index) => (
            <div
              className="nav-button1"
              key={item.label}
              onMouseEnter={() => setHighlightTop(index * 54)}
              onClick={() => navigate(item.path)}
              title={collapsed ? item.label : undefined}
            >
              <div className="icon-wrapper1">{item.icon}</div>
              {!collapsed && <span className="label">{item.label}</span>}
            </div>
          ))}
        </div>
        <div
          id="nav-content-highlight"
          style={{
            top: `${highlightTop}px`,
            opacity: highlightTop === null ? 0 : 1
          }}
        ></div>
      </div>
    </aside>
  );
};

export default Sidebar;
