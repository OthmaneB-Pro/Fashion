import styled from "styled-components";

export default function ImageContainer() {
  return (
    <ImageContainerStyled
      src="/img/shopping.png"
      alt="Woman_picture"
    ></ImageContainerStyled>
  );
}

const ImageContainerStyled = styled.img`
  position: relative;
  top: 50px;
  width: 800px;
  height: auto;
`;
