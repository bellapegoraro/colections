import {
  HeaderDiv,
  StyledLink,
  PageButtonPrevious,
  PageButtonNext,
  ChangeListButton,
} from "./headerCStyles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
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
      <PageButtonPrevious onClick={() => previousPage()}>
        <ArrowBackIcon />{" "}
      </PageButtonPrevious>
      <span>{page}</span>
      <PageButtonNext onClick={() => nextPage()}>
        <ArrowForwardIcon />
      </PageButtonNext>
    </HeaderDiv>
  );
};

export default HeaderCharacters;
