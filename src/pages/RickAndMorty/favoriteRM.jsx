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

const FavoriteRickAndMorty = ({ myFavRM, removeRM }) => {
  return (
    <>
      <HeaderDiv>
        <p>Seus personagens favoritos</p>
        <BackDivFav>
          <StyledLink to="/list/rick-and-morty">Voltar</StyledLink>
        </BackDivFav>
      </HeaderDiv>
      <DivCharacters>
        {myFavRM.map((character, index) => (
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
              <ButtonStyled size="small" onClick={() => removeRM(character)}>
                <FavoriteBorderIcon />
              </ButtonStyled>
            </StyledCardActions>
          </StyledCard>
        ))}
      </DivCharacters>
    </>
  );
};

export default FavoriteRickAndMorty;
