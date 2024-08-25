import styled from "styled-components";
import HomePage from "./homePage/HomePage";
import BannerLogo from "./banner/BannerLogo";
import NewArrivalsPage from "./newArrivals/NewArrivalsPage";

export default function FashionPage() {
  return (
    <FashionPageStyled>
      <HomePage />
      <BannerLogo />
      <NewArrivalsPage />
    </FashionPageStyled>
  );
}

const FashionPageStyled = styled.div``;
