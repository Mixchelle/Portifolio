import Presentation from '../componentes/Presentation';
import Header from '../componentes/Header';
import ProjetosList from '../componentes/Projetos';
import '../App.css';
import Footer from '../componentes/Footer';

function Home() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <h3>
      </h3>
      <ProjetosList />
      <Footer />
    </div> 
  );
}

export default Home;
