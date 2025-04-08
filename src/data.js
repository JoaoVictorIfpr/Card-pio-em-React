import hamburguerImg from './assets/images/hamburguer.png';
import pizzaImg from './assets/images/pizza.png';
import saladaImg from './assets/images/salada.png';

const cardapio = [
  {
    id: 1,
    nome: 'Hambúrguer Clássico',
    descricao: '...',
    preco: 25.90,
    imagem: hamburguerImg // Use a variável importada
  },
  {
    id: 2,
    nome: 'Pizza Margherita',
    descricao: '...',
    preco: 32.50,
    imagem: pizzaImg // Use a variável importada
  },
  {
    id: 3,
    nome: 'Salada Caesar',
    descricao: '...',
    preco: 18.75,
    imagem: saladaImg // Use a variável importada
  },
  // ... outros itens
];

export default cardapio;