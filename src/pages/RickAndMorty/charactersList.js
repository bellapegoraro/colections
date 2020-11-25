import FavoriteIcon from "@material-ui/icons/Favorite";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import {
  StyledCard,
  StyledCardMedia,
  StyledTypography,
  StyledCardActions,
  ButtonStyled,
} from "../../components/characters/characterStyle";
import { useState } from "react";

const CharacterList = ({ characterList, filter }) => {
  const [myFavRM, setMyFavRM] = useState([]);

  const favorite = (character) => {
    setMyFavRM([...myFavRM, character]);
    localStorage.setItem("myFavRM", JSON.stringify(myFavRM));
    console.log(myFavRM);
  };

  return (
    <>
      {filter.length !== 0
        ? filter.map((filtered, index) => (
            <StyledCard key={index}>
              <CardActionArea>
                <StyledCardMedia image={filtered.image} title={filtered.name} />
                <CardContent>
                  <StyledTypography variant="p" component="p">
                    {filtered.name}
                  </StyledTypography>
                </CardContent>
              </CardActionArea>
              <StyledCardActions>
                <ButtonStyled size="small" onClick={() => favorite(filter)}>
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
                <ButtonStyled size="small" onClick={() => favorite(character)}>
                  <FavoriteIcon />
                </ButtonStyled>
              </StyledCardActions>
            </StyledCard>
          ))}
    </>
  );
};

export default CharacterList;
