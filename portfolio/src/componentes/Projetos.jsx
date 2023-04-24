import React from 'react';
import { Link } from 'react-router-dom';
import projetos from '../projetos-db/projetos';
import '../styles/ProjetosList.css'

const ProjetosList = () => {
  return (
    <div className="projetos-container">
      {projetos.map((projeto) => (
        <div className="projeto-card" key={projeto.id}>
          <Link to={`/projects/${projeto.id}`}>
            <img className="projeto-imagem" src={projeto.image} alt={projeto.title} />
          </Link>
          <div className="projeto-info">
            <Link className="projeto-titulo" to={`/projects/${projeto.id}`}>{projeto.title}</Link>
            <div className="projeto-links">
              <a className="projeto-link" href={projeto.codeLink} target="_blank" rel="noopener noreferrer">Código</a>
              <a className="projeto-link" href={projeto.appLink} target="_blank" rel="noopener noreferrer">Aplicação</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjetosList;