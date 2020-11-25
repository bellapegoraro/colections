import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import styled from "styled-components";

export const StyledCard = styled(Card)`
  width: 180px;
  height: 220px;
  /* background-color: #fff3ed; */
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
  :hover {
    color: #d1a5a3;
  }
`;
