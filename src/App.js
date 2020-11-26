import "./App.css";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Header from "./components/header/index";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import FavoritePokemon from "./pages/Pokemon/favoriteP";
import RickAndMorty from "./pages/RickAndMorty/index";
import Pokemon from "./pages/Pokemon/index";
import FavoriteRickAndMorty from "./pages/RickAndMorty/favoriteRM";

const App = () => {
  const location = useLocation();
  const [myFavRM, setMyFavRM] = useState([]);
  const [myFavPokemon, setMyFavPokemon] = useState([]);

  const favorite = (character) => {
    console.log(character);
    if (character.url !== undefined && character.id === undefined) {
      setMyFavPokemon([...myFavPokemon, character]);
      localStorage.setItem("myFavPokemon", JSON.stringify(myFavPokemon));
    }
    if (character.id !== undefined) {
      setMyFavRM([...myFavRM, character]);
      localStorage.setItem("myFavRM", JSON.stringify(myFavRM));
    }
  };

  const removeP = (character) => {
    const remove = myFavPokemon.filter((stay) => stay.name !== character.name);
    setMyFavPokemon([...remove]);
    localStorage.setItem("myFavPokemon", JSON.stringify(myFavPokemon));
  };

  const removeRM = (character) => {
    const remove = myFavRM.filter((stay) => stay.name !== character.name);
    setMyFavRM([...remove]);
    localStorage.setItem("myFavRM", JSON.stringify(myFavRM));
  };

  useEffect(() => {
    const pokemon = JSON.parse(localStorage.getItem("myFavPokemon"));
    if (pokemon !== null) {
      setMyFavPokemon([...pokemon]);
    }
    const rickAndMorty = JSON.parse(localStorage.getItem("myFavRM"));
    if (rickAndMorty !== null) {
      setMyFavRM([...rickAndMorty]);
    }
  }, []);

  return (
    <>
      <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}>
        {location.pathname === "/" ? <Header /> : null}
      </motion.div>

      <Switch>
        <Route exact path="/list/:item">
          <RickAndMorty favorite={favorite} removeRM={removeRM} />
        </Route>
        <Route exact path="/list/:item">
          <Pokemon favorite={favorite} removeP={removeP} />
        </Route>
        <Route exact path="/favorites/rick-and-morty">
          <FavoriteRickAndMorty myFavRM={myFavRM} removeRM={removeRM} />
        </Route>
        <Route exact path="/favorites/pokemons">
          <FavoritePokemon myFavPokemon={myFavPokemon} removeP={removeP} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
