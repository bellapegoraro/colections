import { Link } from "react-router-dom";

const Favorites = () => {
  return (
    <div>
      <Link to="/favorites/rick-and-morty">Rick and Morty</Link>
      <Link to="/favorites/pokemons">Pokemon</Link>
    </div>
  );
};

export default Favorites;
