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
            key={item.id} // A prop 'key' é importante quando renderizamos listas
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            imagem={item.imagem}
          />
        ))}
      </main>
    </div>
  );
}

export default App;