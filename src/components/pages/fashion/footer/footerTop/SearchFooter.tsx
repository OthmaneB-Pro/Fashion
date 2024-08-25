import styled from "styled-components";
import Button from "../../../../reusable-ui/Button";

export default function SearchFooter() {
  return (
    <SearchFooterStyled>
      <input placeholder="Add your email here" />
      <Button className="button-send" label="SEND" />
    </SearchFooterStyled>
  );
}

const SearchFooterStyled = styled.div`
  position: relative;
  input {
    padding: 15px 100px 15px 20px;
    border-radius: 10px;
  }
  .button-send {
    position: absolute;
    top: 5px;
    right: 180px;
  }
`;
