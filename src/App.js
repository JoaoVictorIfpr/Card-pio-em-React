import React, { Suspense, lazy, useState } from 'react';
import MenuItem from './components/MenuItem';
import cardapio from './data';
import './App.css';
// Import Header normalmente pois é um componente crítico para a primeira renderização
import Header from './components/Header';

// Importando componentes com lazy loading
const AboutUs = lazy(() => import('./components/AboutUs'));
const ItemDetails = lazy(() => import('./components/ItemDetails'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showContact, setShowContact] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseDetails = () => {
    setSelectedItem(null);
  };

  const toggleContact = () => {
    setShowContact(prev => !prev);
  };

  return (
    <div className="App">
      <Header />
      <div className="app-actions">
        <button className="contact-button" onClick={toggleContact}>
          {showContact ? 'Voltar ao Cardápio' : 'Entre em Contato'}
        </button>
      </div>
      
      {showContact ? (
        <Suspense fallback={
          <div className="loading-fallback">
            <p>Carregando formulário de contato...</p>
          </div>
        }>
          <Contact />
        </Suspense>
      ) : (
        <main className="cardapio-container">
          {cardapio.map(item => (
            <div key={item.id} onClick={() => handleItemClick(item)}>
              <MenuItem
                nome={item.nome}
                descricao={item.descricao}
                preco={item.preco}
                imagem={item.imagem}
                imagemWebp={item.imagemWebp}
                vegetariano={item.vegetariano}
                destaque={item.destaque}
              />
            </div>
          ))}
        </main>
      )}
      
      {/* Usando Suspense para envolver o componente AboutUs com lazy loading */}
      <Suspense fallback={
        <div className="loading-fallback">
          <p>Carregando informações sobre o restaurante...</p>
        </div>
      }>
        <AboutUs />
      </Suspense>

      {/* Modal de detalhes do item com lazy loading */}
      {selectedItem && (
        <Suspense fallback={
          <div className="loading-fallback">
            <p>Carregando detalhes do item...</p>
          </div>
        }>
          <ItemDetails item={selectedItem} onClose={handleCloseDetails} />
        </Suspense>
      )}
    </div>
  );
}

export default App;
