import styled from "styled-components";
import { ImageValue } from "./imageValue";
import ImageLogo from "../../../reusable-ui/ImageLogo";

export default function BannerLogo() {
  return (
    <BannerLogoStyled>
      <div>
        {ImageValue.map((image, index) => (
          <ImageLogo
            key={index}
            src={image.src}
            alt={image.alt}
            className={image.className}
          />
        ))}
      </div>
    </BannerLogoStyled>
  );
}

const BannerLogoStyled = styled.div`
  height: 140px;
  background: #ebd96b;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 110px;
    margin: 0 50px;
  }
  .lacoste {
    width: 160px;
  }
`;
