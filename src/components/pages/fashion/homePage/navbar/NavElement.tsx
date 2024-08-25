import styled from "styled-components";

export default function NavElement() {
  return (
    <NavElementStyled>
      <li>CATALOGUE</li>
      <li>FASHION</li>
      <li>FAVOURITE</li>
      <li>LIFESTYLE</li>
      <button>SIGN UP</button>
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
