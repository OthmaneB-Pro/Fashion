import styled from "styled-components";

type ImageLogoType = {
  src: string;
  alt: string;
  className?: string;
};

export default function ImageLogo({ src, alt, className }: ImageLogoType) {
  return <ImageLogoStyled className={className} src={src} alt={alt} />;
}

const ImageLogoStyled = styled.img``;
