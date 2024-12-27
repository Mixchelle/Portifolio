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
        Olá! Meu nome é Michelle, sou natural de Petrópolis, Rio de Janeiro, Brasil e tenho 28 anos. Atualmente, sou uma desenvolvedora Full Stack Junior, com conhecimentos em várias tecnologias, como React, Node.js, Jest, Redux, HTML, CSS, Docker, SQL, MySQL, TypeScript, JWT e outras. Meu objetivo é continuar a aprender e aprimorar minhas habilidades para me tornar uma desenvolvedora cada vez mais competente e completa. Estou sempre em busca de novos desafios e projetos interessantes para expandir meu conhecimento e aperfeiçoar minhas habilidades técnicas.
        </p>
      </div>
    </div>
  );
};

export default Presentation;