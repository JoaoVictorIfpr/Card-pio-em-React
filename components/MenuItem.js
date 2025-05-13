import React, { useState, useEffect } from 'react';
import './MenuItem.css';

function MenuItem({ nome, descricao, preco, imagem, imagemWebp, vegetariano, destaque }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Referência para o elemento que queremos observar
  const itemRef = React.useRef();
  
  // Configuração do Intersection Observer para lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Quando o elemento se torna visível na viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Depois que detectamos que está visível, podemos parar de observar
          observer.unobserve(itemRef.current);
        }
      },
      {
        rootMargin: '200px', // Começa a carregar quando estiver a 200px de distância
        threshold: 0.01 // Basta uma pequena parte do elemento estar visível
      }
    );
    
    // Começar a observar o elemento
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    // Limpeza quando o componente for desmontado
    return () => {
      if (itemRef.current && observer) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);
  
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
    <div className="menu-item" ref={itemRef}>
      {/* Badges para vegetariano e destaque */}
      <div className="badges-container">
        {vegetariano && <span className="item-badge vegetarian-badge">Vegetariano</span>}
        {destaque && <span className="item-badge destaque-badge">Destaque</span>}
      </div>
      
      {/* Usando picture para suporte a WebP com fallback */}
      {imagem && isVisible && (
        <picture>
          {/* Se tivermos uma versão WebP disponível */}
          {imagemWebp && <source srcSet={imagemWebp} type="image/webp" />}
          
          {/* Fallback para imagem padrão */}
          <img 
            src={imagem} 
            alt={nome} 
            className={`item-image ${!imageLoaded ? 'loading' : ''}`}
            loading="lazy" // Implementação de lazy loading nativo do navegador
            decoding="async" // Decodificação assíncrona da imagem
            onLoad={handleImageLoad}
            onError={handleImageError}
            width="140" // Dimensões explícitas para evitar layout shifts
            height="140"
            fetchpriority={destaque ? "high" : "auto"} // Prioridade alta para itens destacados
          />
        </picture>
      )}
      
      {/* Placeholder enquanto a imagem não está visível ou não carregou */}
      {(!isVisible || !imageLoaded) && (
        <div className="item-image loading"></div>
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