import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="menu-header">
      <div className="container">
        <div className="logo">
          <h1>Delícias Gourmet</h1>
          <p>Sabor e qualidade em cada prato</p>
        </div>
        
        <nav className="navigation">
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
  );
};

export default Header;