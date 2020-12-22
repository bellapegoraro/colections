import {
  HeaderDiv,
  StyledLink,
  Div,
  FavIcon,
  HouseIcon,
} from "./headerCStyles";
import {
  getPokemonThunk,
  getRickAndMortyThunk,
} from "../../store/modules/Characters/thunk";
import { useDispatch } from "react-redux";
const HeaderCharacters = ({ page }) => {
  const dispatch = useDispatch();
  return (
    <HeaderDiv>
      <Div>
        <StyledLink to="/">
          <HouseIcon />
          Home
        </StyledLink>
      </Div>
      <StyledLink to="/list/rick-and-morty">
        <Div onClick={() => dispatch(getRickAndMortyThunk(page))}>
          Rick And Morty
        </Div>
      </StyledLink>
      <StyledLink to="/list/pokemons">
        <Div onClick={() => dispatch(getPokemonThunk(page))}>Pokemons</Div>
      </StyledLink>
      <Div>
        <StyledLink to="/favorites/rick-and-morty">
          <FavIcon />
          Rick And Morty
        </StyledLink>
      </Div>
      <Div>
        <StyledLink to="/favorites/pokemons">
          <FavIcon />
          Pokemons
        </StyledLink>
      </Div>
    </HeaderDiv>
  );
};

export default HeaderCharacters;
