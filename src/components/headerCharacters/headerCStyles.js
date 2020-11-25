import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderDiv = styled.div`
  background-color: #856d61;
  display: flex;
  align-items: center;
  height: 40px;
  width: 100vw;
  box-shadow: 0px 6px 12px -2px rgba(0, 0, 0, 0.75);
  margin-bottom: 2%;

  span {
    color: #222222;
    font-weight: bolder;
    text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.6);
  }

  input {
    width: 250px;
    border-radius: 10px;
    border: none;
    outline: none;
    height: 21px;
    margin-left: 15%;
    margin-right: 1%;
    box-shadow: 4px 3px 12px -2px rgba(0, 0, 0, 0.75);
  }

  button {
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    color: #444444;
    height: 25px;
    background-color: #aed1cf;
    font-weight: bolder;
    outline: none;
    box-shadow: 4px 3px 12px -2px rgba(0, 0, 0, 0.75);
  }

  button:hover {
    cursor: pointer;
    background-color: #548581;
    color: whitesmoke;
    text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.6);
  }
  p {
    width: 100vw;
    text-align: center;
    color: whitesmoke;
    text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.6);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #444444;
  :hover {
    color: whitesmoke;
  }
`;

export const PageButtonPrevious = styled.button`
  width: 55px;
  margin-right: 1%;
  height: 25px;
  margin-left: 12%;
`;

export const PageButtonNext = styled.button`
  width: 55px;
  height: 25px;
  margin-left: 1%;
`;

export const ChangeListButton = styled.button`
  width: 150px;
  height: 25px;
  margin-left: 7%;
`;

export const FavoriteDiv = styled.div`
  background-color: #aed1cf;
  margin-left: 9%;
  width: 50px;
  text-align: center;
  border-radius: 10px;
  height: 25px;
  box-shadow: 4px 3px 12px -2px rgba(0, 0, 0, 0.75);
`;

export const StyledLinkFav = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    color: #d1a5a3;
  }
`;
