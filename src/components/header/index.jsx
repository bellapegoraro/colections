import { HeaderDiv, StyledLink, BackDiv, ButtonPages } from "./headerCStyles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import {
  getPokemonThunk,
  getRickAndMortyThunk,
} from "../../store/modules/Characters/thunk";
import { useDispatch } from "react-redux";
const HeaderCharacters = ({ page }) => {
  const dispatch = useDispatch();
  return (
    <HeaderDiv>
      <BackDiv>
        <StyledLink to="/">
          <HomeIcon />
          Home
        </StyledLink>
      </BackDiv>
      <StyledLink to="/list/rick-and-morty">
        <ButtonPages onClick={() => dispatch(getRickAndMortyThunk(page))}>
          Rick And Morty
        </ButtonPages>
      </StyledLink>
      <StyledLink to="/list/pokemons">
        <ButtonPages onClick={() => dispatch(getPokemonThunk(page))}>
          Pokemons
        </ButtonPages>
      </StyledLink>
      <BackDiv>
        <StyledLink to="/favorites/rick-and-morty">
          <FavoriteIcon />
          Rick And Morty
        </StyledLink>
      </BackDiv>
      <BackDiv>
        <StyledLink to="/favorites/pokemons">
          <FavoriteIcon />
          Pokemons
        </StyledLink>
      </BackDiv>
    </HeaderDiv>
  );
};

export default HeaderCharacters;
