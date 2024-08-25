import styled from "styled-components";
import Button from "../../../../reusable-ui/Button";

export default function FooterTopPage() {
  return (
    <FooterTopStyled>
      <div className="container-text">
        <h1>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h1>
        <p>Type your email down below and be young wild generation</p>
        <div className="search">
          <input placeholder="Add your email here" />
          <Button className="button-send" label="SEND" />
        </div>
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
  h1 {
    font-size: 40px;
  }
  p {
    font-size: 22px;
  }
  input {
    padding: 15px 100px 15px 20px;
    border-radius: 10px;
    
  }
  .search{
    position: relative;
  }
  .button-send {
    position: absolute;
    top: 5px;
    right: 180px;
  }
`;
