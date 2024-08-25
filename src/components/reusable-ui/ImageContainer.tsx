import styled from "styled-components";

type ImageContainerType = {
  src: string;
  alt: string;
};

export default function ImageContainer({ src, alt }: ImageContainerType) {
  return (
    <ImageContainerStyled>
      <img src={src} alt={alt} />
    </ImageContainerStyled>
  );
}

const ImageContainerStyled = styled.div`
  width: 350px;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
