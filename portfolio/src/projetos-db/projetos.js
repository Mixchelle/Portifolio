import img from '../images/star.jpeg';
import color from '../images/color.jpeg';
import trivia from '../images/trivia.jpeg';
import constucao from '../images/construcao.jpeg';

const descricaoProjetoStar = "Este é um projeto para listar planetas do universo Star Wars usando React, Context API e Hooks para gerenciar estados globais.\n\nHabilidades utilizadas\nUtilização da Context API do React para gerenciar estado.\nUtilização dos React Hooks: useState, useContext e useEffect.\nCriação de React Hooks customizados.\nEscrita de testes para garantir uma boa cobertura de testes.\n\nFazer uma requisição para o endpoint /planets da API de Star Wars e preencher uma tabela com os dados retornados, com exceção dos dados da coluna residents.\nCriar um filtro de texto para a tabela que atualize os planetas que se encaixam no filtro à medida que o nome é digitado, sem ter que apertar em um botão para efetuar a filtragem.\nCriar um filtro para valores numéricos com três seletores. A combinação desses três seletores deve filtrar os dados da tabela de acordo com a coluna correspondente e com os valores escolhidos.\nImplementar múltiplos filtros numéricos para que todos os filtros adicionados funcionem de forma conjunta.\nDesenvolver testes para atingir 30% de cobertura total da aplicação.\nNão utilizar filtros repetidos.\nApagar um filtro de valor numérico ao clicar no ícone X de um dos filtros e apagar todas filtragens numéricas simultaneamente ao clicar em outro botão de \"Remover todas filtragens\".\nDesenvolver testes para atingir 60% de cobertura total da aplicação.\nOrdenar as colunas de forma ascendente ou descendente via filtro.\nDesenvolver testes para atingir 90% de cobertura total da aplicação.";


const projetos = [
  {
    id: 1, 
    image: img, 
    title: 'Star Wars Planets Search', 
    description: descricaoProjetoStar, 
    codeLink: 'https://example.com/projeto1', 
    appLink: 'https://mixchelle.github.io/starwars-planets-search/',
  },
  {
    id: 2, 
    image: color, 
    title: 'Color-Guess', 
    description: 'Projeto 2', 
    codeLink: 'https://github.com/Mixchelle/Color-Guess-Project', 
    appLink: 'https://mixchelle.github.io/Color-Guess-Project/',
  },
  {
    id: 3, 
    image: trivia, 
    title: 'Projeto Trivia', 
    description: 'Projeto 3', 
    codeLink: 'https://github.com/Mixchelle/Projeto-Trivia', 
    appLink: 'https://github.com/Mixchelle/Projeto-Trivia',
  },
  {
    id: 4, 
    image: constucao, 
    title: 'Em construção', 
    description: descricaoProjetoStar, 
    codeLink: 'https://example.com/projeto1', 
    appLink: 'https://mixchelle.github.io/starwars-planets-search/',
  },
  {
    id: 5, 
    image: constucao, 
    title: 'Em construção',  
    description: 'Projeto 2', 
    codeLink: 'https://github.com/Mixchelle/Projeto-Trivia', 
    appLink: 'https://mixchelle.github.io/Projeto-Trivia/',
  },
  {
    id: 6, 
    image: constucao, 
    title: 'Em construção', 
    description: 'Projeto 3', 
    codeLink: 'https://github.com/Mixchelle/Projeto-Trivia', 
    appLink: 'https://github.com/Mixchelle/Projeto-Trivia',
  },
  {
    id: 7, 
    image: constucao, 
    title: 'Em construção',  
    description: descricaoProjetoStar, 
    codeLink: 'https://example.com/projeto1', 
    appLink: 'https://mixchelle.github.io/starwars-planets-search/',
  },
  {
    id: 8, 
    image: constucao, 
    title: 'Em construção',  
    description: 'Projeto 2', 
    codeLink: 'https://github.com/Mixchelle/Projeto-Trivia', 
    appLink: 'https://mixchelle.github.io/Projeto-Trivia/',
  },
  {
    id: 9,
    image: constucao, 
    title: 'Em construção',  
    description: 'Projeto 3', 
    codeLink: 'https://github.com/Mixchelle/Projeto-Trivia', 
    appLink: 'https://github.com/Mixchelle/Projeto-Trivia',
  },
  {
    id: 10, 
    image: constucao, 
    title: 'Em construção',  
    description: descricaoProjetoStar, 
    codeLink: 'https://example.com/projeto1', 
    appLink: 'https://mixchelle.github.io/starwars-planets-search/',
  },
  {
    id: 11, 
    image: constucao, 
    title: 'Em construção',  
    description: 'Projeto 2', 
    codeLink: 'https://github.com/Mixchelle/Projeto-Trivia', 
    appLink: 'https://mixchelle.github.io/Projeto-Trivia/',
  },
  {
    id: 12,
    image: constucao, 
    title: 'Em construção',  
    description: 'Projeto 3', 
    codeLink: 'https://github.com/Mixchelle/Projeto-Trivia', 
    appLink: 'https://github.com/Mixchelle/Projeto-Trivia',
  },
];

export default projetos;