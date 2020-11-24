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

const CharacterList = ({ characterList, filter }) => {
  return (
    <>
      {filter.length !== 0
        ? filter.map(({ name, image }, index) => (
            <StyledCard key={index}>
              <StyledCardActionArea>
                <StyledCardMedia image={image} title={name} />
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
        : characterList.map(({ name, image, url }, index) => (
            <StyledCard key={index}>
              <StyledCardActionArea>
                <StyledCardMedia
                  StyledCardMedia
                  component="img"
                  alt="pokemon"
                  image={image}
                  title={name}
                />
                <StyledCardContent>
                  <StyledTypography variant="subtitle1" component="p">
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
          ))}
    </>
  );
};

export default CharacterList;
