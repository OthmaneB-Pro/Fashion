import styled from "styled-components";

export default function TitleContainer() {
  return (
    <TitleContainerStyled>
      <span className="back">LET'S</span> EXPLORE
      <span className="back2">UNIQUE</span> CLOTHES.
    </TitleContainerStyled>
  );
}

const TitleContainerStyled = styled.h1`
  width: 500px;
  font-size: 66px;
  margin-bottom: 25px;

  .back {
    position: relative;
    display: inline-block;
  }

  .back::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 60%;
    width: 130%;
    height: 85%;
    background: white;
    transform: translate(-50%, -50%) rotate(175deg);
    z-index: -1;
    padding: 10px;
  }
  .back2 {
    position: relative;
    display: inline-block;
  }

  .back2::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 60%;
    width: 120%;
    height: 85%;
    background: #ebd96b;
    transform: translate(-50%, -50%) rotate(175deg);
    z-index: -1;
    padding: 10px;
  }
`;
