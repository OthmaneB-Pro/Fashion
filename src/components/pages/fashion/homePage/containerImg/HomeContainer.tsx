import styled from "styled-components";
import ImageContainer from "./ImageContainer";
import TextContainer from "./textContainer/TextContainer";

export default function HomeContainer() {
  return (
    <HomeContainerStyled>
      <TextContainer />
      <ImageContainer />
    </HomeContainerStyled>
  );
}

const HomeContainerStyled = styled.div`
  height: 580px;
  background: #f4f6f5;
  display: grid;
  grid-template-columns: 500px 1fr;
  border-radius: 50px;
  overflow: hidden;
`;
