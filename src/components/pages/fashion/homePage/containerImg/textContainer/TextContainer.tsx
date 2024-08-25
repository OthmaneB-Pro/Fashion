import styled from "styled-components";
import TitleContainer from "./TitleContainer";
import ParagraphContainer from "./ParagraphContainer";
import Button from "../../../../../reusable-ui/Button";

export default function TextContainer() {
  return (
    <TextContainerStyled>
      <TitleContainer />
      <ParagraphContainer />
      <Button label="Shop Now" className="button-shop" />
    </TextContainerStyled>
  );
}
const TextContainerStyled = styled.div`
  margin-left: 80px;
  z-index: 10;
  
  .button-shop {
    font-size: 22px;
  }
`;
