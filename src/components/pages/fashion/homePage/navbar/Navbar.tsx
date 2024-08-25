import styled from "styled-components";
import TitleNavbar from "./TitleNavbar";
import NavElement from "./NavElement";

export default function Navbar() {
  return (
    <NavbarStyled>
      <TitleNavbar />
      <NavElement />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  height: 40px;
`;
