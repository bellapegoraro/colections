import { Switch, Route } from "react-router-dom";
import RickAndMorty from "../../pages/RickAndMorty/rickAndMorty";
import Pokemon from "../../pages/Pokemon/pokemon";
import Favorite from "../../pages/Favorites/favorites";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/list/rick-and-morty">
        <RickAndMorty />
      </Route>
      <Route exact path="/list/pokemons">
        <Pokemon />
      </Route>
      <Route exact path="/favorites/rick-and-morty">
        <Favorite />
      </Route>
      <Route exact path="/favorites/pokemons">
        <Favorite />
      </Route>
    </Switch>
  );
};

export default Routes;
