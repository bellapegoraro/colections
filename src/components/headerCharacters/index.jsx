import {
  HeaderDiv,
  StyledLink,
  PageButtonPrevious,
  PageButtonNext,
  ChangeListButton,
  FavoriteDiv,
  StyledLinkFav,
} from "./headerCStyles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FavoriteIcon from "@material-ui/icons/Favorite";

const HeaderCharacters = ({
  handlePath,
  listItem,
  previousPage,
  nextPage,
  handleInput,
  handleFilter,
  page,
}) => {
  return (
    <HeaderDiv>
      <ChangeListButton onClick={() => handlePath()}>
        {listItem === "rick-and-morty" ? (
          <StyledLink to="/list/pokemons">Pokemon</StyledLink>
        ) : (
          <StyledLink to="/list/rick-and-morty">Rick and Morty</StyledLink>
        )}
      </ChangeListButton>

      <input onChange={(e) => handleInput(e)}></input>
      <button onClick={() => handleFilter()}>Pesquisar</button>
      {listItem === "rick-and-morty" ? (
        <FavoriteDiv>
          <StyledLinkFav to="/favorites/rick-and-morty">
            <FavoriteIcon />
          </StyledLinkFav>
        </FavoriteDiv>
      ) : (
        <FavoriteDiv>
          <StyledLinkFav to="/favorites/pokemons">
            <FavoriteIcon />
          </StyledLinkFav>
        </FavoriteDiv>
      )}
      <PageButtonPrevious onClick={() => previousPage()}>
        <ArrowBackIcon />
      </PageButtonPrevious>
      <span>{page}</span>
      <PageButtonNext onClick={() => nextPage()}>
        <ArrowForwardIcon />
      </PageButtonNext>
    </HeaderDiv>
  );
};

export default HeaderCharacters;
