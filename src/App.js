import "./App.css";
import { useLocation } from "react-router-dom";
import Header from "./components/header/index";
import { useState, useEffect } from "react";
import Routes from "./components/Routes/index";
import { Switch, Route } from "react-router-dom";
import FavoritePokemon from "./pages/Pokemon/favoriteP";
import ContainerRM from "./components/Containers/containerRM";
import ContainerP from "./components/Containers/containerP";
import FavoriteRickAndMorty from "./pages/RickAndMorty/favoriteRM";

const App = () => {
  const location = useLocation();
  const [myFavRM, setMyFavRM] = useState([]);
  const [myFavPokemon, setMyFavPokemon] = useState([]);

  const favoriteP = (character) => {
    setMyFavPokemon([...myFavPokemon, character]);
    localStorage.setItem("myFavPokemon", JSON.stringify(myFavPokemon));
  };

  const favoriteRM = (character) => {
    setMyFavRM([...myFavRM, character]);
    localStorage.setItem("myFavRM", JSON.stringify(myFavRM));
  };

  // const removeFavoriteP = (character) => {
  //   // const remove = myFavPokemon.filter((stay) => stay.name !== character.name);
  //   // setMyFavPokemon([...remove]);
  //   console.log("iai");
  // };

  useEffect(() => {
    const pokemon = JSON.parse(localStorage.getItem("myFavPokemon"));
    if (pokemon !== null) {
      setMyFavPokemon([...pokemon]);
    }
    const rickAndMorty = JSON.parse(localStorage.getItem("myFavRM"));
    if (rickAndMorty !== null) {
      setMyFavRM([...rickAndMorty]);
    }
    console.log(pokemon);
    console.log(rickAndMorty);
  }, []);

  return (
    <div className="App">
      {location.pathname === "/" ? <Header /> : null}
      <Switch>
        <Route exact path="/list/:item">
          <ContainerRM favoriteRM={favoriteRM} />
        </Route>
        <Route exact path="/list/:item">
          <ContainerP favoriteP={favoriteP} />
        </Route>
        <Route exact path="/favorites/rick-and-morty">
          <FavoriteRickAndMorty myFavRM={myFavRM} />
        </Route>
        <Route exact path="/favorites/pokemons">
          <FavoritePokemon myFavPokemon={myFavPokemon} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
