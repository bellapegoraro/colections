import "./App.css";
import { Link, Route, Switch, useHistory, useLocation } from "react-router-dom";
import RickAndMorty from "./pages/RickAndMorty/index";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <div className="App">
      <Link to="/list/rick-and-morty">Rick And Morty</Link>
      <Link to="/list/pokemons">Pokemons</Link>
      <Switch>
        <Route exact path="/list/:item">
          <RickAndMorty />
        </Route>
        <Route exact path="/list/:item">
          <Pokemon />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
