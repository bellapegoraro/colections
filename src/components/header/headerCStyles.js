import styled from "styled-components";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";

export const HeaderDiv = styled.div`
  background-color: #856d61;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 6px 12px -2px rgba(0, 0, 0, 0.75);
  margin-bottom: 2%;

  @media (min-width: 200px) {
    justify-content: space-around;
    height: 40px;
    width: 100%;
  }

  @media (min-width: 1000px) {
    height: 50px;
    width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0 10px;
  color: #222222;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    color: whitesmoke;
  }

  @media (min-width: 200px) {
    font-size: 6.5px;
    padding: 0;
  }

  @media (min-width: 700px) {
    font-size: 10px;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #aed1cf;
  margin-left: 3%;
  height: 38px;
  width: 200px;
  border-radius: 10px;
  font-weight: bolder;
  padding: 3px 2px 0 2px;
  text-transform: uppercase;
  align-items: center;
  box-shadow: 4px 3px 12px -2px rgba(0, 0, 0, 0.75);

  @media (min-width: 200px) {
    width: 55px;
    height: 25px;
    margin: 0;
  }
  @media (min-width: 700px) {
    width: 100px;
    margin: 0;
  }

  @media (min-width: 1000px) {
    width: 180px;
  }
`;

export const FavIcon = styled(FavoriteIcon)`
  font-size: 30px;

  @media (min-width: 200px) {
    font-size: 10px;
  }
  @media (min-width: 700px) {
    font-size: 20px;
  }
`;

export const HouseIcon = styled(HomeIcon)`
  font-size: 30px;

  @media (min-width: 200px) {
    font-size: 10px;
  }
  @media (min-width: 700px) {
    font-size: 20px;
  }
`;
