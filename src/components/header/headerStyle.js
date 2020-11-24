import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderDiv = styled.div`
  background-color: #548581;
  width: 40vw;
  height: 40vh;
  margin: 10% auto;
  color: #111111;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #111111;
  :hover {
    color: whitesmoke;
  }
`;
