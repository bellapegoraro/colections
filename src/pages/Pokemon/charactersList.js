import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";
import {
  StyledCard,
  StyledCardMedia,
  StyledCardActionArea,
  StyledTypography,
  StyledCardActions,
  StyledCardContent,
} from "../../components/characters/characterStyle";

const CharacterList = ({ characterList, filter, favorite }) => {
  const getUrlImagePokemon = (url) => {
    const brokenUrl = url.split("/");
    return brokenUrl[brokenUrl.length - 2];
  };
  return (
    <>
      {filter.length !== 0
        ? filter.map(({ name, url }, index) => (
            <StyledCard key={index}>
              <StyledCardActionArea>
                <StyledCardMedia
                  component="img"
                  alt="pokemon"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getUrlImagePokemon(
                    url
                  )}.png`}
                  title={name}
                />
                <StyledCardContent>
                  <StyledTypography variant="p" component="p">
                    {name}
                  </StyledTypography>
                </StyledCardContent>
              </StyledCardActionArea>
              <StyledCardActions>
                <Button size="small">
                  <FavoriteIcon />
                </Button>
              </StyledCardActions>
            </StyledCard>
          ))
        : characterList.map(({ name, url }, index) => (
            <StyledCard key={index}>
              <StyledCardActionArea>
                <StyledCardMedia
                  component="img"
                  alt="pokemon"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getUrlImagePokemon(
                    url
                  )}.png`}
                  title={name}
                />
                <StyledCardContent>
                  <StyledTypography variant="subtitle1" component="p">
                    {name}
                  </StyledTypography>
                </StyledCardContent>
              </StyledCardActionArea>
              <StyledCardActions>
                <Button
                  size="small"
                  onClick={() =>
                    favorite(
                      name,
                      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getUrlImagePokemon(
                        url
                      )}.png`
                    )
                  }
                >
                  <FavoriteIcon />
                </Button>
              </StyledCardActions>
            </StyledCard>
          ))}
    </>
  );
};

export default CharacterList;
