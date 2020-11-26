import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import {
  StyledCard,
  StyledCardMedia,
  StyledTypography,
  StyledCardActions,
  ButtonStyled,
} from "../../components/List/listStyle";

const CharacterList = ({ characterList, filter, removeP, favorite }) => {
  const getUrlImagePokemon = (url) => {
    const brokenUrl = url.split("/");
    return brokenUrl[brokenUrl.length - 2];
  };
  return (
    <>
      {filter.length !== 0
        ? filter.map((filtered, index) => (
            <StyledCard key={index}>
              <CardActionArea>
                <StyledCardMedia
                  component="img"
                  alt="pokemon"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getUrlImagePokemon(
                    filtered.url
                  )}.png`}
                  title={filtered.name}
                />
                <CardContent>
                  <StyledTypography variant="p" component="p">
                    {filtered.name}
                  </StyledTypography>
                </CardContent>
              </CardActionArea>
              <StyledCardActions>
                <ButtonStyled size="small" onClick={() => favorite(filtered)}>
                  <FavoriteIcon />
                </ButtonStyled>
              </StyledCardActions>
            </StyledCard>
          ))
        : characterList.map((character, index) => (
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
                  <StyledTypography variant="subtitle1" component="p">
                    {character.name}
                  </StyledTypography>
                </CardContent>
              </CardActionArea>
              <StyledCardActions>
                <ButtonStyled size="small" onClick={() => favorite(character)}>
                  <FavoriteIcon />
                </ButtonStyled>
                <ButtonStyled size="small" onClick={() => removeP(character)}>
                  <FavoriteBorderIcon />
                </ButtonStyled>
              </StyledCardActions>
            </StyledCard>
          ))}
    </>
  );
};

export default CharacterList;
