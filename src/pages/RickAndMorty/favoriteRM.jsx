import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { DivCharacters } from "../../components/List/listStyle";
import { HeaderDiv } from "../../components/headerCharacters/headerCStyles";
import {
  StyledCard,
  StyledCardMedia,
  StyledTypography,
  StyledCardActions,
  ButtonStyled,
} from "../../components/List/listStyle";

const FavoriteRickAndMorty = ({ myFavRM }) => {
  return (
    <>
      <HeaderDiv>
        <p>Seus personagens favoritos</p>
      </HeaderDiv>
      <DivCharacters>
        {myFavRM.map(({ name, image }, index) => (
          <StyledCard key={index}>
            <CardActionArea>
              <StyledCardMedia
                component="img"
                alt="pokemon"
                image={image}
                title={name}
              />
              <CardContent>
                <StyledTypography variant="caption" component="p">
                  {name}
                </StyledTypography>
              </CardContent>
            </CardActionArea>
            <StyledCardActions>
              <ButtonStyled size="small">
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
