import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import RickAndMorty from "./pages/RickAndMorty/index";
import Pokemon from "./pages/Pokemon";
import Header from "./components/header/index";
import Favorites from "./components/Favorites/index";
// import FavoriteRickAndMorty from "./pages/RickAndMorty/favoriteRM";
// import FavoritePokemon from "./pages/Pokemon/favoriteP";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === "/" ? <Header /> : null}
      <Switch>
        <Route exact path="/list/:item">
          <RickAndMorty />
        </Route>
        <Route exact path="/list/:item">
          <Pokemon />
        </Route>

        {/* <Route exact path="/favorites">
          <Favorites />
        </Route> */}
        {/* <Route exact path="/favorites/rick-and-morty">
          <FavoriteRickAndMorty />
        </Route>
        <Route exact path="/favorites/pokemons">
          <FavoritePokemon />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
