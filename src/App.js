import React from 'react';
import MenuItem from './components/MenuItem';
import cardapio from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cardápio Simples</h1>
      </header>
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