import styled from "styled-components";
import HomePage from "./homePage/HomePage";
import BannerLogo from "./banner/BannerLogo";
import NewArrivalsPage from "./newArrivals/NewArrivalsPage";
import FooterPage from "./footer/FooterPage";

export default function FashionPage() {
  return (
    <FashionPageStyled>
      <HomePage />
      <BannerLogo />
      <NewArrivalsPage />
      <FooterPage/>
    </FashionPageStyled>
  );
}

const FashionPageStyled = styled.div``;
