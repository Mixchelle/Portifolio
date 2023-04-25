import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/Header.css'


function Header() {
  return (
  <div>
 <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#">Projetos</Nav.Link>
          <Nav.Link href="#">Contato</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div className="icons">
          <ul>
            <li><a href="https://www.linkedin.com/in/mixchelle/" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
            <li><a href="https://github.com/Mixchelle" target="_blank" rel="noreferrer"><FaGithub /></a></li>
            <li><a href="https://wa.me/5524992494731" target="_blank" rel="noreferrer"><FaWhatsapp /></a></li>
            <li><a href="https://www.facebook.com/miixchellw" target="_blank" rel="noreferrer"><FaFacebook /></a></li>
            <li><a href="https://www.instagram.com/miixchelle/" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
           </ul>
        </div>
    </Navbar>
  </div>
  );
}

export default Header;