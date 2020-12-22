import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

export const StyledCard = styled(Card)`
  width: 180px;
  height: 220px;

  @media (max-width: 500px) {
    width: 140px;
  }
`;

export const StyledCardMedia = styled(CardMedia)`
  height: 140px;
`;

export const StyledTypography = styled(Typography)`
  text-align: right;
  height: 20px;
`;

export const StyledCardActions = styled(CardActions)`
  height: 10px;
`;

export const ButtonStyled = styled(Button)`
  width: 50%;
  :hover {
    color: #d6342d;
  }
`;

export const DivCharacters = styled.div`
  margin: 0 auto;
  padding: 10px;
  width: 75vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 500px) {
    justify-content: center;
    width: 100vw;
    padding: 5px 0 0 0;
  }
`;
