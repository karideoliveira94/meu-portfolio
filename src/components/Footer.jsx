import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <p className='m-0'>Copyright ©{new Date().getFullYear()} Karina de Oliveira. Todos os direitos reservados</p>
    </footer>
  );
};

export default Footer;
