import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/list/rick-and-morty">Rick And Morty</Link> -----------------
      <Link to="/list/pokemons">Pokemons</Link>
    </header>
  );
};

export default Header;
