import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import RickAndMorty from "./pages/RickAndMorty/index";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <div className="App">
      <Link to="/rick-and-morty">Rick And Morty</Link>
      <Link to="/pokemons">Pokemons</Link>
      <Switch>
        <Route exact path="/rick-and-morty">
          <RickAndMorty />
        </Route>
        <Route exact path="/pokemons">
          <Pokemon />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
