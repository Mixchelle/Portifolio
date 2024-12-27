import React from 'react';


function CardProjeto(props) {
  const { imagem, titulo, descricao, linkCodigo, linkAplicacao } = props;
    return (
      <div className="card-projeto">
        <img src={imagem} alt={titulo} />
        <h2>{titulo}</h2>
        <p>{descricao}</p>
        <a href={linkCodigo} target="_blank" rel="noopener noreferrer">Link do Código</a>
        <a href={linkAplicacao} target="_blank" rel="noopener noreferrer">Link da Aplicação</a>
      </div>
    );
  }
  

export default CardProjeto;
