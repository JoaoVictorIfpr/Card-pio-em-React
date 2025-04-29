import hamburguerImg from './assets/images/hamburguer.png';
import pizzaImg from './assets/images/pizza.png';
import saladaImg from './assets/images/salada.png';
import lasanhaImg from './assets/images/lasanha.png';
import sobremesaImg from './assets/images/sobremesa.png';
import sucoImg from './assets/images/suco.png';

import hamburguerWebp from './assets/images/hamburguer.webp';
import pizzaWebp from './assets/images/pizza.webp';
import saladaWebp from './assets/images/salada.webp';
import lasanhaWebp from './assets/images/lasanha.webp';
import sobremesaWebp from './assets/images/sobremesa.webp';
import sucoWebp from './assets/images/suco.webp';

const cardapio = [
  {
    id: 1,
    nome: 'Hambúrguer Clássico',
    descricao: 'Pão artesanal, hambúrguer 180g, queijo, alface e molho especial.',
    preco: 25.90,
    imagem: hamburguerImg,
    imagemWebp: hamburguerWebp
  },
  {
    id: 2,
    nome: 'Pizza Margherita',
    descricao: 'Massa fina, molho de tomate, mussarela fresca e manjericão.',
    preco: 32.50,
    imagem: pizzaImg,
    imagemWebp: pizzaWebp
  },
  {
    id: 3,
    nome: 'Salada Caesar',
    descricao: 'Alface, frango grelhado, parmesão, croutons e molho caesar.',
    preco: 18.75,
    imagem: saladaImg,
    imagemWebp: saladaWebp
  },
  {
    id: 4,
    nome: 'Lasanha à Bolonhesa',
    descricao: 'Camadas de massa, molho bolonhesa, bechamel e muito queijo.',
    preco: 29.90,
    imagem: lasanhaImg,
    imagemWebp: lasanhaWebp
  },
  {
    id: 5,
    nome: 'Brownie com Sorvete',
    descricao: 'Brownie de chocolate com noz e bola de sorvete de creme.',
    preco: 16.00,
    imagem: sobremesaImg,
    imagemWebp: sobremesaWebp
  },
  {
    id: 6,
    nome: 'Suco Natural de Laranja',
    descricao: 'Suco 100% natural, feito na hora com laranjas frescas.',
    preco: 8.50,
    imagem: sucoImg,
    imagemWebp: sucoWebp
  }
];

export default cardapio;