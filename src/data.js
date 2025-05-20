import hamburguerImg from './assets/images/hamburguer.png';
import pizzaImg from './assets/images/pizza.png';
import saladaImg from './assets/images/salada.png';
import lasanhaImg from './assets/images/lasanha.png';
import sobremesaImg from './assets/images/sobremesa.png';
import sucoImg from './assets/images/suco.png';
// Novos imports para os novos itens
import macarraoImg from './assets/images/macarrao.png';
import cafeImg from './assets/images/cafe.png';
import sanduicheImg from './assets/images/sanduiche.png';

import hamburguerWebp from './assets/images/hamburguer.webp';
import pizzaWebp from './assets/images/pizza.webp';
import saladaWebp from './assets/images/salada.webp';
import lasanhaWebp from './assets/images/lasanha.webp';
import sobremesaWebp from './assets/images/sobremesa.webp';
import sucoWebp from './assets/images/suco.webp';
// Novos imports para versões WebP dos novos itens
import macarraoWebp from './assets/images/macarrao.webp';
import cafeWebp from './assets/images/cafe.webp';
import sanduicheWebp from './assets/images/sanduiche.webp';

const cardapio = [
  {
    id: 1,
    nome: 'Hambúrguer Clássico',
    descricao: 'Pão artesanal, hambúrguer 180g, queijo, alface e molho especial.',
    preco: 25.90,
    imagem: hamburguerImg,
    imagemWebp: hamburguerWebp,
    destaque: true
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
    imagemWebp: saladaWebp,
    vegetariano: true
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
  },
  // Novos itens adicionados ao cardápio
  {
    id: 7,
    nome: 'Macarrão ao Pesto',
    descricao: 'Massa fresca com molho pesto caseiro, tomate cereja e parmesão.',
    preco: 27.50,
    imagem: macarraoImg,
    imagemWebp: macarraoWebp,
    destaque: true
  },
  {
    id: 8,
    nome: 'Café Espresso Duplo',
    descricao: 'Café forte e encorpado com crema perfeita, grãos selecionados.',
    preco: 6.90,
    imagem: cafeImg,
    imagemWebp: cafeWebp
  },
  {
    id: 9,
    nome: 'Sanduíche Vegetariano',
    descricao: 'Pão integral, húmus, abacate, rúcula, tomate e queijo.',
    preco: 19.90,
    imagem: sanduicheImg,
    imagemWebp: sanduicheWebp,
    vegetariano: true
  }
];

export default cardapio;