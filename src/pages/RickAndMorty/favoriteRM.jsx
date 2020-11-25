import FavoriteIcon from "@material-ui/icons/Favorite";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { DivCharacters } from "../../components/apiRequest/requestStyle";
import { HeaderDiv } from "../../components/headerCharacters/headerCStyles";
import {
  StyledCard,
  StyledCardMedia,
  StyledTypography,
  StyledCardActions,
  ButtonStyled,
} from "../../components/characters/characterStyle";

const FavoriteRickAndMorty = () => {
  const favorite = window.localStorage.getItem("myFavRM");

  return (
    <>
      <HeaderDiv>
        <p>Seus personagens favoritos</p>
      </HeaderDiv>
      <DivCharacters>
        {JSON.parse(favorite).map(({ name, image }, index) => (
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
              {/* <ButtonStyled size="small" onClick={() => favorite(character)}>
              <FavoriteIcon />
            </ButtonStyled> */}
            </StyledCardActions>
          </StyledCard>
        ))}
      </DivCharacters>
    </>
  );
};

export default FavoriteRickAndMorty;
