import React from 'react';
import MenuItem from './components/MenuItem';
import cardapio from './data';
import './App.css';
import Header from './components/Header';

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
            imagemWebp={item.imagemWebp} // Adicionando suporte à versão WebP
          />
        ))}
      </main>
    </div>
  );
}

export default App;