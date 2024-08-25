import styled from "styled-components";

export default function FooterTopText() {
  return (
    <FooterTextStyled>
      <h1>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h1>
      <p>Type your email down below and be young wild generation</p>
    </FooterTextStyled>
  );
}

const FooterTextStyled = styled.div`
  h1 {
    font-size: 40px;
  }
  p {
    font-size: 22px;
  }
`;
