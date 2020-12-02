import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { DivCharacters } from "../../components/List/listStyle";
import {
  HeaderDiv,
  BackDivFav,
  StyledLink,
} from "../../components/headerCharacters/headerCStyles";
import {
  StyledCard,
  StyledCardMedia,
  StyledTypography,
  StyledCardActions,
  ButtonStyled,
} from "../../components/List/listStyle";

const FavoritePokemon = ({ myFavPokemon, removeP }) => {
  const getUrlImagePokemon = (url) => {
    const brokenUrl = url.split("/");
    return brokenUrl[brokenUrl.length - 2];
  };

  return (
    <>
      <HeaderDiv>
        <p>Seus Pokemons favoritos</p>
        <BackDivFav>
          <StyledLink to="/list/pokemons">Voltar</StyledLink>
        </BackDivFav>
      </HeaderDiv>
      <DivCharacters>
        {myFavPokemon.map((character, index) => (
          <StyledCard key={index}>
            <CardActionArea>
              <StyledCardMedia
                component="img"
                alt="pokemon"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getUrlImagePokemon(
                  character.url
                )}.png`}
                title={character.name}
              />
              <CardContent>
                <StyledTypography variant="caption" component="p">
                  {character.name}
                </StyledTypography>
              </CardContent>
            </CardActionArea>
            <StyledCardActions>
              <ButtonStyled size="small" onClick={() => removeP(character)}>
                <FavoriteBorderIcon />
              </ButtonStyled>
            </StyledCardActions>
          </StyledCard>
        ))}
      </DivCharacters>
    </>
  );
};

export default FavoritePokemon;