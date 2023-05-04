import Presentation from '../componentes/Presentation';
import Header from '../componentes/Header';
import ProjetosList from '../componentes/Projetos';
import '../App.css';
import Footer from '../componentes/Footer';
import ImageContainer from '../componentes/ImageContainer';

function Home() {
  return (
    <div className="App">
      <Header />
      <ImageContainer />
      <Presentation />
      <div className='fundo'>
      <h1 className='projeto_feitos'>Projetos Feitos</h1>
      <ProjetosList />
      </div>
      <Footer />
    </div> 
  );
}

export default Home;
