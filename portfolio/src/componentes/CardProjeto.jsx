import React from 'react';

function CardProjeto(props) {
  const { image, title, description, codeLink, appLink } = props;

  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={codeLink} target="_blank" rel="noopener noreferrer">Link do Código</a>
      <a href={appLink} target="_blank" rel="noopener noreferrer">Link da Aplicação</a>
    </div>
  );
}

export default CardProjeto;
