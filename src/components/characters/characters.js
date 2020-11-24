import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {
  StyledCard,
  StyledCardMedia,
  StyledCardActionArea,
  StyledCardContent,
  StyledTypography,
} from "./characterStyle";
const Characters = ({ characterList, filter }) => {
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
            </StyledCard>
          ))
        : characterList.map(({ name, image }, index) => (
            <StyledCard key={index}>
              <StyledCardActionArea>
                <StyledCardMedia image={image} title={name} />
                <StyledCardContent>
                  <StyledTypography variant="p" component="p">
                    {name}
                  </StyledTypography>
                </StyledCardContent>
              </StyledCardActionArea>
            </StyledCard>
          ))}
    </>
  );
};

export default Characters;
