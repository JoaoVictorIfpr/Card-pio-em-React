import React, { useState } from 'react';
import './MenuItem.css';

function MenuItem({ nome, descricao, preco, imagem, imagemWebp }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Handler para quando a imagem terminar de carregar
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  // Handler para caso a imagem falhe ao carregar
  const handleImageError = (e) => {
    console.error(`Erro ao carregar imagem para ${nome}:`, e);
    // Se houver erro, define a imagem como carregada para remover o placeholder
    setImageLoaded(true);
  };

  return (
    <div className="menu-item">
      {/* Usando picture para suporte a WebP com fallback */}
      {imagem && (
        <picture>
          {/* Se tivermos uma versão WebP disponível */}
          {imagemWebp && <source srcSet={imagemWebp} type="image/webp" />}
          
          {/* Fallback para imagem padrão */}
          <img 
            src={imagem} 
            alt={nome} 
            className={`item-image ${!imageLoaded ? 'loading' : ''}`}
            loading="lazy" // Implementação de lazy loading nativo
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </picture>
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