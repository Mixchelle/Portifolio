import React from 'react';
import { Link } from 'react-router-dom';
import projetos from '../projetos-db/projetos';
import { Card } from 'react-bootstrap';
import '../styles/ProjetosList.css';

const ProjetosList = () => {
  return (
    <div className="projetos-container">
      
      {projetos.map((projeto) => (

        <Card className="projeto-card" key={projeto.id}>
          <Link to={`/Portifolio/projects/${projeto.id}`}>
              <Card.Img variant="top" src={projeto.image} alt={projeto.title} />
          </Link>
          <Card.Body>
            <Link className="projeto-titulo" to={`/Portifolio/projects/${projeto.id}`}>{projeto.title}</Link>
            <div className="projeto-links">
             <a className="projeto-link" href={projeto.codeLink} target="_blank" rel="noopener noreferrer">Código</a>
              <a className="projeto-link" href={projeto.appLink} target="_blank" rel="noopener noreferrer">Aplicação</a>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>

  );
};

export default ProjetosList;