import FavoriteIcon from "@material-ui/icons/Favorite";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { DivCharacters } from "../../components/List/listStyle";
import {
  StyledCard,
  StyledCardMedia,
  StyledTypography,
  StyledCardActions,
  ButtonStyled,
} from "../../components/List/listStyle";
import { favoriteCharacterThunk } from "../../store/modules/Favorites/thunk";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

const Characters = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.pokemon);
  const getUrlImagePokemon = (url) => {
    const brokenUrl = url.split("/");
    return brokenUrl[brokenUrl.length - 2];
  };
  return (
    <DivCharacters>
      {characters.map((character, index) => (
        <motion.div
          whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
          key={index}
        >
          <StyledCard>
            <CardActionArea>
              <CardContent>
                <StyledTypography variant="subtitle1" component="p">
                  {character.name}
                </StyledTypography>
              </CardContent>
              <StyledCardMedia
                component="img"
                alt="pokemon"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getUrlImagePokemon(
                  character.url
                )}.png`}
                title={character.name}
              />
            </CardActionArea>
            <StyledCardActions>
              <ButtonStyled
                size="small"
                onClick={() => dispatch(favoriteCharacterThunk(character))}
              >
                <FavoriteIcon />
              </ButtonStyled>
            </StyledCardActions>
          </StyledCard>
        </motion.div>
      ))}
    </DivCharacters>
  );
};

export default Characters;
