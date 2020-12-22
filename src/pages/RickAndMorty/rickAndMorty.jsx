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
import { useSelector, useDispatch } from "react-redux";
import { favoriteCharacterThunk } from "../../store/modules/Favorites/thunk";
import { motion } from "framer-motion";

const CharactersRickAndMorty = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.rickAndMorty);
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
                <StyledTypography variant="caption" component="p">
                  {character.name}
                </StyledTypography>
              </CardContent>
              <StyledCardMedia
                component="img"
                alt="pokemon"
                image={character.image}
                title={character.name}
              />
            </CardActionArea>
            <StyledCardActions>
              <ButtonStyled
                size="small"
                onClick={() => {
                  dispatch(favoriteCharacterThunk(character));
                }}
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

export default CharactersRickAndMorty;
