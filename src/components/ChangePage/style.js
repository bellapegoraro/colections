import styled from "styled-components";

export const DivPages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    height: 20px;
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
`;

export const PageButtonPrevious = styled.button`
  width: 55px;
  margin-right: 6%;
  height: 25px;
`;

export const PageButtonNext = styled.button`
  width: 55px;
  height: 25px;
  margin-left: 5%;
`;
