import styled from "styled-components";
import TitleContainer from "./TitleContainer";
import ParagraphContainer from "./ParagraphContainer";

export default function TextContainer() {
  return (
    <TextContainerStyled>
      <TitleContainer />
      <ParagraphContainer />
      <button className="button-shop">Shop Now</button>
    </TextContainerStyled>
  );
}
const TextContainerStyled = styled.div`
  margin-left: 80px;
  z-index: 10;
  button {
    background: black;
    color: white;
    border-radius: 7px;
    padding: 12px 20px 12px 20px;
    border: none;
    cursor: pointer;
  }
  .button-shop {
    font-size: 22px;
  }
`;
