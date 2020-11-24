import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import RickAndMorty from "./pages/RickAndMorty/index";
import Pokemon from "./pages/Pokemon";
import Header from "./components/header/index";
import Favorites from "./pages/Favorites/index";
import FavoriteRickAndMorty from "./pages/Favorites/favoriteRM";
import FavoritePokemon from "./pages/Favorites/favoriteP";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === "/" ? <Header /> : null}
      <Switch>
        <Route exact path="/list/:item">
          <RickAndMorty />
          <Pokemon />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/favorites/rick-and-morty">
          <FavoriteRickAndMorty />
        </Route>
        <Route exact path="/favorites/pokemons">
          <FavoritePokemon />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
