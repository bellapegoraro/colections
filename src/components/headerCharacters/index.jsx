import {
  HeaderDiv,
  StyledLink,
  PageButtonPrevious,
  PageButtonNext,
  ChangeListButton,
  FavoriteDiv,
  StyledLinkFav,
  StyledLinkP,
  BackDiv,
} from "./headerCStyles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SearchIcon from "@material-ui/icons/Search";

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
          <StyledLinkP to="/list/pokemons">Pokemons</StyledLinkP>
        ) : (
          <StyledLink to="/list/rick-and-morty">Rick and Morty</StyledLink>
        )}
      </ChangeListButton>
      <BackDiv>
        <StyledLink to="/">Voltar</StyledLink>
      </BackDiv>
      <input onChange={(e) => handleInput(e)}></input>
      <button onClick={() => handleFilter()}>
        <SearchIcon></SearchIcon>
      </button>
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
