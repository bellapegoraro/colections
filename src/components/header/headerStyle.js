import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderDiv = styled.div`
  background-color: #548581;
  width: 35vw;
  height: 45vh;
  margin: 10% auto;
  color: #111111;
  border-radius: 100px;
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  box-shadow: 0px 1px 8px 3px rgba(105, 103, 103, 0.75);
  text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.6);
  color: whitesmoke;

  @media (max-width: 500px) {
    width: 80vw;
  }
  @media (max-width: 800px) {
    width: 70vw;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #111111;
  :hover {
    color: whitesmoke;
  }
`;
