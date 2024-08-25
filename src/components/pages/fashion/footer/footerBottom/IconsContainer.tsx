import styled from "styled-components";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function IconContainer() {
  return (
    <IconsContainerStyled>
      <FaFacebook />
      <FaInstagram />
      <FaTwitter />
      <FaLinkedin />
    </IconsContainerStyled>
  );
}

const IconsContainerStyled = styled.div`
  display: flex;
  margin-top: 10px;

  svg {
    width: 20px;
    height: auto;
    background: #ebd96b;
    color: black;
    padding: 10px;
    margin-right: 10px;
    border-radius: 15px;
  }
`;
