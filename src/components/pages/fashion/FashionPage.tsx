import styled from "styled-components";
import HomePage from "./homePage/HomePage";
import BannerLogo from "./banner/BannerLogo";

export default function FashionPage() {
  return (
    <FashionPageStyled>
      <HomePage/>
      <BannerLogo/>
    </FashionPageStyled>
  );
}

const FashionPageStyled = styled.div`
  
`;
