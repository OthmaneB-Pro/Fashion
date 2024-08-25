import styled from "styled-components";

export default function Navbar() {
  return (
    <NavbarStyled>
      <h1>
        <img src="/img/logo_fashion.PNG" alt="logo" /> FASHION
      </h1>
      <ul>
        <li>CATALOGUE</li>
        <li>FASHION</li>
        <li>FAVOURITE</li>
        <li>LIFESTYLE</li>
        <button>SIGN UP</button>
      </ul>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  height: 40px;
  h1 {
    font-size: 28px;

    img {
      width: 31px;
      height: 29px;
    }
  }
  ul {
    display: flex;
    align-items: center;
  }
  li {
    margin-right: 50px;
    list-style: none;
  }
`;
