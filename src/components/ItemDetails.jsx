import React from 'react';
import './ItemDetails.css';

function ItemDetails({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="item-details-modal">
      <div className="item-details-content">
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="item-details-header">
          <h2>{item.nome}</h2>
          {item.destaque && <span className="item-badge destaque-badge">DESTAQUE</span>}
        </div>
        
        <div className="item-details-body">
          <div className="item-image-container">
            <picture>
              {item.imagemWebp && <source srcSet={item.imagemWebp} type="image/webp" />}
              <img 
                src={item.imagem} 
                alt={item.nome} 
                className="item-details-image"
                width="300"
                height="300"
              />
            </picture>
          </div>
          
          <div className="item-details-info">
            <p className="item-details-description">{item.descricao}</p>
            <div className="item-details-extras">
              <h3>Informações adicionais</h3>
              <p>Tempo de preparo: {Math.floor(Math.random() * 20) + 10} minutos</p>
              <p>Calorias: {Math.floor(Math.random() * 500) + 200} kcal</p>
              <p>Avaliação dos clientes: {(Math.random() * 2 + 3).toFixed(1)}/5</p>
            </div>
            <p className="item-details-price">R$ {item.preco.toFixed(2)}</p>
            <button className="add-to-cart-button">Adicionar ao Pedido</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
