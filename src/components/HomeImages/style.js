import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
`;

const ImagesMobile = styled.div``;

const ImagesDesktop = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;

export { Container, ImagesMobile, ImagesDesktop };
