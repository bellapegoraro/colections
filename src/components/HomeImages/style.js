import styled from "styled-components";

const Container = styled.div`
  @media (min-width: 200px) {
    width: 60vw;
  }

  @media (min-width: 1000px) {
    width: 80vw;
  }
`;

const ImagesMobile = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 350px;
  margin-top: 30%;
  margin-left: 35%;
  img {
    width: 200px;
    height: 150px;
  }
  @media (min-width: 700px) {
    height: 550px;
    margin-top: 10%;
    margin-left: 55%;
    img {
      width: 300px;
      height: 250px;
    }
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;

const ImagesDesktop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 12%;
  margin-top: 10%;
  img {
    width: 400px;
    height: 250px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

export { Container, ImagesMobile, ImagesDesktop };
