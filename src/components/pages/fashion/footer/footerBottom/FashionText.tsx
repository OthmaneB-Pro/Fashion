import styled from "styled-components";
import IconContainer from "./IconsContainer";

export default function FashionText() {
  return (
    <FashionTextStyled>
      <h2>FASHION</h2>
      <p>Complete your style with awesome clothes from us.</p>
      <IconContainer />
    </FashionTextStyled>
  );
}

const FashionTextStyled = styled.div`
  p {
    color: #8e8e8e;
  }
`;
