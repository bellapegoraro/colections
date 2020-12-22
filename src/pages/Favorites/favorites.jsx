import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { DivCharacters } from "../../components/List/listStyle";
import { useLocation } from "react-router-dom";
import {
  StyledCard,
  StyledCardMedia,
  StyledTypography,
  StyledCardActions,
  ButtonStyled,
} from "../../components/List/listStyle";
import { useSelector, useDispatch } from "react-redux";
import { removeCharacterThunk } from "../../store/modules/Favorites/thunk";

const Favorite = () => {
  const location = useLocation();
  const favorite = useSelector((state) => state.favorite);
  const filteredP = favorite.filter(
    (character) => character.image === undefined
  );
  const favoriteRM = favorite.filter((character) => character.type === "");
  console.log(favoriteRM);
  const dispatch = useDispatch();
  const getUrlImagePokemon = (url) => {
    const brokenUrl = url.split("/");
    return brokenUrl[brokenUrl.length - 2];
  };

  return (
    <>
      <DivCharacters>
        {location.pathname === "/favorites/pokemons"
          ? filteredP.map((character, index) => (
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
                  <ButtonStyled
                    size="small"
                    onClick={() =>
                      dispatch(removeCharacterThunk(character.name))
                    }
                  >
                    <FavoriteBorderIcon />
                  </ButtonStyled>
                </StyledCardActions>
              </StyledCard>
            ))
          : favoriteRM.map((character, index) => (
              <StyledCard key={index}>
                <CardActionArea>
                  <StyledCardMedia
                    component="img"
                    alt="pokemon"
                    image={character.image}
                    title={character.name}
                  />
                  <CardContent>
                    <StyledTypography variant="caption" component="p">
                      {character.name}
                    </StyledTypography>
                  </CardContent>
                </CardActionArea>
                <StyledCardActions>
                  <ButtonStyled
                    size="small"
                    onClick={() =>
                      dispatch(removeCharacterThunk(character.name))
                    }
                  >
                    <FavoriteBorderIcon />
                  </ButtonStyled>
                </StyledCardActions>
              </StyledCard>
            ))}
      </DivCharacters>
    </>
  );
};

export default Favorite;
