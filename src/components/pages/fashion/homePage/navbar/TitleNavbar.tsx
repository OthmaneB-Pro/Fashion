import styled from "styled-components";

export default function TitleNavbar() {
  return (
    <TitleNavbarStyled>
      <img src="/img/logo_fashion.PNG" alt="logo" /> FASHION
    </TitleNavbarStyled>
  );
}

const TitleNavbarStyled = styled.h1`
  font-size: 28px;

  img {
    width: 31px;
    height: 29px;
  }
`;
