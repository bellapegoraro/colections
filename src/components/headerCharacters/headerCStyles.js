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
    margin-left: 5%;
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
    width: 65vw;
    text-align: center;
    color: whitesmoke;
    text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 500px) {
    width: 100vw;
    font-size: 0.8em;
    input {
      margin-left: 5%;
      width: 22vw;
    }
    button {
      font-size: 0.65em;
    }
    span {
      color: white;
      font-size: 0.9em;
    }
    p {
      width: 65vw;
    }
  }

  @media (max-width: 800px) {
    width: 100vw;
    input {
      margin-left: 3%;
    }
    button {
      font-size: 0.8em;
    }
    p {
      width: 68vw;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 10px;
  color: #444444;
  :hover {
    color: whitesmoke;
  }
`;

export const StyledLinkP = styled(Link)`
  text-decoration: none;
  padding: 5px 40px 5px 30px;
  color: #444444;
  :hover {
    color: whitesmoke;
  }
  @media (max-width: 500px) {
    padding: 5px 5px 5px 5px;
  }
`;

export const PageButtonPrevious = styled.button`
  width: 55px;
  margin-right: 1%;
  height: 25px;
  margin-left: 10%;

  @media (max-width: 500px) {
    margin-left: 3%;
    margin-right: 1%;
    display: flex;
    justify-content: center;
    width: 30px;
  }

  @media (max-width: 800px) {
    margin-left: 2%;
    width: 45px;
  }
`;

export const PageButtonNext = styled.button`
  width: 55px;
  height: 25px;
  margin-left: 1%;

  @media (max-width: 500px) {
    width: 30px;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 800px) {
    width: 45px;
    margin-right: 1%;
  }
`;

export const ChangeListButton = styled.button`
  width: 150px;
  height: 25px;
  margin-left: 7%;

  @media (max-width: 500px) {
    font-size: 0.7em;
    padding: 0;
    margin-left: 1%;
    width: 25vw;
  }

  @media (max-width: 800px) {
    margin-left: 2%;
  }
`;

export const FavoriteDiv = styled.div`
  background-color: #aed1cf;
  margin-left: 9%;
  width: 50px;
  text-align: center;
  border-radius: 10px;
  height: 25px;
  box-shadow: 4px 3px 12px -2px rgba(0, 0, 0, 0.75);

  @media (max-width: 500px) {
    margin-left: 4%;
    width: 35px;
  }

  @media (max-width: 800px) {
    margin-left: 2%;
  }
`;

export const StyledLinkFav = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    color: #d1a5a3;
  }
`;

export const BackDiv = styled.div`
  background-color: #aed1cf;
  margin-left: 5%;
  height: 22px;
  border-radius: 10px;
  font-weight: bolder;
  padding: 3px 2px 0 2px;
  text-transform: uppercase;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  box-shadow: 4px 3px 12px -2px rgba(0, 0, 0, 0.75);
  @media (max-width: 500px) {
    display: none;
  }

  @media (max-width: 800px) {
    margin-left: 2%;
  }
`;

export const BackDivFav = styled.div`
  background-color: #aed1cf;
  margin-left: 5%;
  height: 22px;
  border-radius: 10px;
  font-weight: bolder;
  padding: 3px 2px 0 2px;
  text-transform: uppercase;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  box-shadow: 4px 3px 12px -2px rgba(0, 0, 0, 0.75);
`;
