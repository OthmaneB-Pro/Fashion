import styled from "styled-components";
import FooterTopText from "./FooterTopText";
import SearchFooter from "./SearchFooter";

export default function FooterTopPage() {
  return (
    <FooterTopStyled>
      <div className="container-text">
        <FooterTopText />
        <SearchFooter />
      </div>
    </FooterTopStyled>
  );
}

const FooterTopStyled = styled.div`
  margin-top: 100px;
  background: #e5c643;
  height: 400px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container-text {
    width: 640px;
    text-align: center;
  }
`;
