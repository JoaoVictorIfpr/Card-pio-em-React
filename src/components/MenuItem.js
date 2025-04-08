import React from 'react';
import './MenuItem.css'; // Importe o arquivo de estilo do componente

function MenuItem({ nome, descricao, preco, imagem }) {
  return (
    <div className="menu-item">
      {imagem && (
        <img src={imagem} alt={nome} className="item-image" />
      )}
      <div className="item-details">
        <h3>{nome}</h3>
        <p className="item-description">{descricao}</p>
        <p className="item-price">R$ {preco.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default MenuItem;