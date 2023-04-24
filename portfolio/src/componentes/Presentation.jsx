import React from 'react';
import imgSrc from '../images/fotoMichelle.jpeg'
import '../styles/Presentation.css'

const Presentation = () => {
  return (
    <div className="presentation">
      <img src={imgSrc} alt="Imagem de apresentação" className="presentation__img" />
      <div className="presentation__text">
        <h2> Michelle Marquez</h2>
        <h4>Developer Full-Stack</h4>
        <p>
        Olá! Eu sou a Michelle, tenho 28 anos e sou natural de Petrópolis, Rio de Janeiro, Brasil. Sou uma desenvolvedora Full Stack Junior iniciante,
         com conhecimentos em várias tecnologias, incluindo React, Node.js, Jest,
         Redux, HTML, CSS, Docker, SQL, MySQL, TypeScript, JWT e outras. 
        </p>
      </div>
    </div>
  );
};

export default Presentation;