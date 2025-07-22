import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RightSidebar.css';

const RightSidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const sidebarRef = useRef(null);

  const [mode, setMode] = useState(() => localStorage.getItem('theme-theme') || 'light');
  const [themeColor, setThemeColor] = useState(() => localStorage.getItem('theme-color') || 'default');

  // Aplicação de tema e cor
  useEffect(() => {
    const body = document.body;

    body.classList.remove('light-theme', 'dark-theme');
    body.classList.remove(
      'theme-color-default',
      'theme-color-blue',
      'theme-color-red',
      'theme-color-green',
      'theme-color-lilac',
      'theme-color-custom'
    );

    body.classList.add(`${mode}-theme`);

    // Sempre aplica a cor, independentemente do modo
    if (themeColor === 'custom') {
      const savedCustomColor = localStorage.getItem('custom-color') || '#1c2b47';
      document.body.style.setProperty('--theme-custom-color', savedCustomColor);
    }

    body.classList.add(`theme-color-${themeColor}`);

    localStorage.setItem('theme-theme', mode);
    localStorage.setItem('theme-color', themeColor);
  }, [mode, themeColor]);

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  const handleColorChange = (newColor) => {
    setThemeColor(newColor);
  };

  const handleCustomColorChange = (e) => {
    const color = e.target.value;
    document.body.style.setProperty('--theme-custom-color', color);
    localStorage.setItem('custom-color', color); // Salva cor personalizada
    setThemeColor('custom');
  };

  // Fechar ao clicar fora
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest('.config-icon')
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleLogout = () => {
    localStorage.clear(); // ou remova apenas o token
    navigate('/');
    };


  const colorPickerValue = themeColor === 'custom'
    ? localStorage.getItem('custom-color') || '#1c2b47'
    : '#1c2b47';

  return (
    <div className={`right-sidebar ${isOpen ? 'open' : ''}`} ref={sidebarRef}>
        <div className="sidebar-header">
            <button onClick={onClose} id="close-right-sidebar">
            <i className="fas fa-times"></i>
            </button>
        </div>
        <div className="sidebar-content">
            <div>
                <div className="sidebar-content_temas">
                    <h5>Modo</h5>
                    <div className="theme-toggle" id="toggle-mode">
                        <i
                        id="btn-light"
                        className={`fas fa-sun ${mode === 'light' ? 'active' : ''}`}
                        title="Tema Claro"
                        onClick={() => handleModeChange('light')}
                        style={{ cursor: 'pointer' }}
                        ></i>
                        <i
                        id="btn-dark"
                        className={`fas fa-moon ${mode === 'dark' ? 'active' : ''}`}
                        title="Tema Escuro"
                        onClick={() => handleModeChange('dark')}
                        style={{ cursor: 'pointer' }}
                        ></i>
                    </div>
                </div>

                <div className="sidebar-content_temas">
                    <h5>Temas</h5>
                    <div
                        className="theme-toggle"
                        id="toggle-colors"
                        style={mode === 'dark' ? { opacity: 0.5, pointerEvents: 'none' } : {}}
                    >
                        {[
                        { id: 'default', color: '#1c2b47' },
                        { id: 'blue', color: '#0078d4' },
                        { id: 'red', color: '#891b22' },
                        { id: 'green', color: '#3c6745' },
                        { id: 'lilac', color: '#584673' }
                        ].map(({ id, color }) => (
                        <i
                            key={id}
                            id={`btn-${id}`}
                            className={`fas fa-circle ${themeColor === id ? 'active' : ''}`}
                            style={{ color, cursor: 'pointer' }}
                            title={`Tema ${id.charAt(0).toUpperCase() + id.slice(1)}`}
                            onClick={() => handleColorChange(id)}
                        ></i>
                        ))}

                        <div
                        id="btn-custom"
                        title="Cor Personalizada"
                        style={{
                            cursor: 'pointer',
                            display: 'inline-block',
                            marginLeft: '8px',
                            opacity: mode === 'dark' ? 0.5 : 1,
                            pointerEvents: mode === 'dark' ? 'none' : 'auto'
                        }}
                        >
                        <i className="fas fa-eye-dropper cor-personalizada"></i>
                        <input
                            type="color"
                            id="color-picker"
                            value={colorPickerValue}
                            onChange={handleCustomColorChange}
                            style={{ marginLeft: '5px' }}
                        />
                        </div>
                    </div>
                </div>

                <div className="sidebar-content_sites">
                    <h5>Onde me encontrar</h5>
                    <div className="card-container">
                        {[
                        { href: 'https://www.linkedin.com/in/karinadeoliveira/', icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn' },
                        { href: 'https://github.com/karideoliveira94', icon: 'fa-brands fa-github', label: 'Github' },
                        ].map(({ href, icon, label }) => (
                        <a href={href} className="card-sites-link" target="_blank" rel="noopener noreferrer" key={href}>
                            <div className="card-sites">
                            <div className="card-sites-icon">
                                <i className={`fas ${icon}`}></i>
                            </div>
                            <div className="card-sites-title">
                                <span>{label}</span>
                            </div>
                            </div>
                        </a>
                        ))}
                    </div>
                </div>

                {/* <div className="sidebar-content_sites">
                    <h5>Sistemas de Gestão</h5>
                    <div className="card-container">
                        {[
                        { href: 'https://dev.azure.com/fnxtecnologia', icon: 'fa-brands fa-microsoft', label: 'DevOps' },
                        { href: 'https://podio.com/fenoxteccombr/fenox', icon: 'fa-solid fa-display-chart-up', label: 'Podio' },
                        { href: 'http://denatran4.serpro.gov.br/siscsv/denatranportal2/logon.aspx', icon: 'fa-solid fa-cars', label: 'Siscsv' },
                        { href: 'https://sga.detran.ba.gov.br/', icon: 'fa-regular fa-headset', label: 'SGA Chamado Detran BA' },
                        { href: 'https://portal.chatbotmaker.io/', icon: 'fa-solid fa-comments', label: 'Suri' },
                        { href: 'https://app.tangerino.com.br/Tangerino/pages/LoginPage', icon: 'far fa-fingerprint', label: 'Tangerino' },
                        ].map(({ href, icon, label }) => (
                        <a href={href} className="card-sites-link" target="_blank" rel="noopener noreferrer" key={href}>
                            <div className="card-sites">
                            <div className="card-sites-icon">
                                <i className={icon}></i>
                            </div>
                            <div className="card-sites-title">
                                <span>{label}</span>
                            </div>
                            </div>
                        </a>
                        ))}
                    </div>
                </div> */}
            </div>
            <div id="nav-footer-content">
                <div className="account-dropdown_footer">
                    <button onClick={handleLogout}>
                    <i className="fas fa-power-off"></i> Logout
                    </button>
                </div>
            </div>
      </div>
    </div>
  );
};

export default RightSidebar;
