import React from 'react';
import { useParams } from 'react-router-dom';
import projetos from '../projetos-db/projetos';
import CardProjeto from '../componentes/CardProjeto';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import '../styles/cardProjetos.css'

function CardProjetos() {
  const { id } = useParams();
  const projeto = projetos.find(projet => projet.id === Number(id));

  return (
    <div>
      <Header />
      <CardProjeto 
        imagem={projeto.image} 
        titulo={projeto.title} 
        descricao={projeto.description} 
        linkCodigo={projeto.codeLink} 
        linkAplicacao={projeto.appLink} 
      />
      <Footer />
    </div>
  );
}

export default CardProjetos;