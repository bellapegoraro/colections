import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderDiv = styled.div`
  background-color: #856d61;
  display: flex;
  align-items: center;
  height: 40px;
  width: 100vw;

  span {
    color: #222222;
  }

  input {
    width: 250px;
    border-radius: 10px;
    border: none;
    outline: none;
    height: 21px;
    margin-left: 22%;
    margin-right: 1%;
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
  }

  button:hover {
    cursor: pointer;
    background-color: #548581;
    color: whitesmoke;
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
  margin-left: 17%;
`;

export const PageButtonNext = styled.button`
  width: 55px;
  height: 25px;
  margin-left: 1%;
`;

export const ChangeListButton = styled.button`
  width: 105px;
  height: 25px;
  margin-left: 7%;
`;
