import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="menu-header">
        <div className="container">
          <div className="logo">
            <h1>Delícias Gourmet</h1>
            <p>Sabor e qualidade em cada prato desde 2010</p>
          </div>
          
          <div className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <nav className={`navigation ${menuOpen ? 'menu-open' : ''}`}>
            <ul>
              <li><a href="#entradas">Entradas</a></li>
              <li><a href="#pratos-principais">Pratos Principais</a></li>
              <li><a href="#sobremesas">Sobremesas</a></li>
              <li><a href="#bebidas">Bebidas</a></li>
            </ul>
          </nav>
          
          <div className="contact-info">
            <button className="order-button">Fazer Pedido</button>
          </div>
        </div>
      </header>
      
      {/* Banner promocional para adicionar mais espaço e estilo */}
      <div className="promo-banner">
        <p>Promoção do dia: <strong>10% OFF</strong> em todos os pratos principais!</p>
      </div>
    </>
  );
};

export default Header;