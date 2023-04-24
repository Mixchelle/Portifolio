import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CardProjetos from './pages/cardProjects';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projects/:id" component={CardProjetos} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
