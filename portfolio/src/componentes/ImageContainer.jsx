import React from 'react';
import imageHeader from '../images/mimi.jpeg';
import '../styles/ImageContainer.css';

function ImageContainer() {
  return (
    <section className="image-container">
      <img src={imageHeader} alt="nome michelle" className='image'/>
      <div className="border-gradient"></div>
    </section>
  );
}

export default ImageContainer;
