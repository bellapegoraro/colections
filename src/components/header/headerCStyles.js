import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderDiv = styled.div`
  background-color: #856d61;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 65px;
  width: 100vw;
  box-shadow: 0px 6px 12px -2px rgba(0, 0, 0, 0.75);
  margin-bottom: 2%;

  /* span {
    color: #222222;
    font-size: 1.3em;
    font-weight: bolder;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    height: 42px;
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
  }*/

  @media (max-width: 500px) {
    justify-content: space-around;
    height: 40px;
    width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0 10px;
  font-size: 9px;
  color: #222222;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    color: whitesmoke;
  }

  @media (max-width: 500px) {
    font-size: 6px;
    padding: 0;
  }
`;

export const BackDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #aed1cf;
  margin-left: 3%;
  height: 38px;
  width: 150px;
  border-radius: 10px;
  font-weight: bolder;
  padding: 3px 2px 0 2px;
  text-transform: uppercase;
  align-items: center;
  box-shadow: 4px 3px 12px -2px rgba(0, 0, 0, 0.75);

  @media (max-width: 500px) {
    width: 53px;
    height: 25px;
    margin: 0;
  }
  /* @media (max-width: 800px) {
    width: 90px;
    margin: 0;
  } */
`;

export const ButtonPages = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  text-transform: uppercase;
  height: 42px;
  background-color: #aed1cf;
  font-weight: bolder;
  outline: none;
  box-shadow: 4px 3px 12px -2px rgba(0, 0, 0, 0.75);

  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 25px;
    margin: 0;
    font-size: 0.9em;
  }
`;
