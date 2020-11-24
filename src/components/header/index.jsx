import { StyledLink, HeaderDiv } from "./headerStyle";

const Header = () => {
  return (
    <HeaderDiv>
      <p>Navegue pelas API's e escolha seus personagens favoritos!</p>
      <StyledLink to="/list/rick-and-morty">Rick And Morty</StyledLink>{" "}
      <StyledLink to="/list/pokemons">Pokemons</StyledLink>
    </HeaderDiv>
  );
};

export default Header;
