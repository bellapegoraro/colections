import { Route, Switch } from "react-router-dom";
import FavoriteRickAndMorty from "../../pages/RickAndMorty/favoriteRM";
import FavoritePokemon from "../../pages/Pokemon/favoriteP";
import RickAndMorty from "../../pages/RickAndMorty/index";
import Pokemon from "../../pages/Pokemon/index";

const Routes = ({
  characterList,
  getData,
  input,
  filter,
  nextPage,
  previousPage,
  handleFilter,
  handleInput,
  page,
  favoriteRM,
  favoriteP,
  removeFavoriteP,
}) => {
  return (
    <Switch>
      <Route exact path="/list/:item">
        <RickAndMorty
          characterList={characterList}
          getData={getData}
          input={input}
          filter={filter}
          nextPage={nextPage}
          previousPage={previousPage}
          handleFilter={handleFilter}
          handleInput={handleInput}
          page={page}
          favoriteRM={favoriteRM}
        />
      </Route>
      <Route exact path="/list/:item">
        <Pokemon
          characterList={characterList}
          getData={getData}
          input={input}
          filter={filter}
          nextPage={nextPage}
          previousPage={previousPage}
          handleFilter={handleFilter}
          page={page}
          handleInput={handleInput}
          favoriteP={favoriteP}
          // removeFavoriteP={removeFavoriteP}
        />
      </Route>
      <Route exact path="/favorites/rick-and-morty">
        <FavoriteRickAndMorty />
      </Route>
      <Route exact path="/favorites/pokemons">
        <FavoritePokemon />
      </Route>
    </Switch>
  );
};

export default Routes;
