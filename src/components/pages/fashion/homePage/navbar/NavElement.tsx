import styled from "styled-components";
import Button from "../../../../reusable-ui/Button";

export default function NavElement() {
  return (
    <NavElementStyled>
      <li>CATALOGUE</li>
      <li>FASHION</li>
      <li>FAVOURITE</li>
      <li>LIFESTYLE</li>
      <Button label="SIGN UP" />
    </NavElementStyled>
  );
}

const NavElementStyled = styled.ul`
  display: flex;
  align-items: center;

  li {
    margin-right: 50px;
    list-style: none;
  }
`;
