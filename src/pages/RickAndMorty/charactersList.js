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
                <Button size="small" onClick={() => favorite(filter)}>
                  <FavoriteIcon />
                </Button>
              </StyledCardActions>
            </StyledCard>
          ))
        : characterList.map(({ name, image }, index) => (
            <StyledCard key={index}>
              <StyledCardActionArea>
                <StyledCardMedia
                  component="img"
                  alt="pokemon"
                  image={image}
                  title={name}
                />
                <StyledCardContent>
                  <StyledTypography variant="caption" component="p">
                    {name}
                  </StyledTypography>
                </StyledCardContent>
              </StyledCardActionArea>
              <StyledCardActions>
                <Button size="small" onClick={() => favorite(name, image)}>
                  <FavoriteIcon />
                </Button>
              </StyledCardActions>
            </StyledCard>
          ))}
    </>
  );
};

export default CharacterList;
