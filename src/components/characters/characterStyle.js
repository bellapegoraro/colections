import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";

import styled from "styled-components";

export const StyledCard = styled(Card)`
  width: 180px;
  height: 220px;
  background-color: #fff3ed;
`;
export const StyledCardActionArea = styled(CardActionArea)`
  background-color: #fff3ed;
`;

export const StyledCardContent = styled(CardContent)`
  background-color: #fff3ed;
`;

export const StyledCardMedia = styled(CardMedia)`
  height: 140px;
  background-color: #fff3ed;
`;

export const StyledTypography = styled(Typography)`
  text-align: right;
  background-color: #fff3ed;
  height: 20px;
`;

export const StyledCardActions = styled(CardActions)`
  background-color: #fff3ed;
  height: 10px;
`;
