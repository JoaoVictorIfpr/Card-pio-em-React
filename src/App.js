import React, { Suspense, lazy } from 'react';
import MenuItem from './components/MenuItem';
import cardapio from './data';
import './App.css';
// Import Header normalmente pois é um componente crítico para a primeira renderização
import Header from './components/Header';

// Importando o componente AboutUs com lazy loading
const AboutUs = lazy(() => import('./components/AboutUs'));

function App() {
  return (
    <div className="App">
      <Header />
      <main className="cardapio-container">
        {cardapio.map(item => (
          <MenuItem
            key={item.id}
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            imagem={item.imagem}
            imagemWebp={item.imagemWebp}
            vegetariano={item.vegetariano}
            destaque={item.destaque}
          />
        ))}
      </main>
      
      {/* Usando Suspense para envolver o componente AboutUs com lazy loading */}
      <Suspense fallback={
        <div className="loading-fallback">
          <p>Carregando informações sobre o restaurante...</p>
        </div>
      }>
        <AboutUs />
      </Suspense>
    </div>
  );
}

export default App;