import styled from "styled-components";
import Navbar from "./navbar/Navbar";
import HomeContainer from "./containerImg/HomeContainer";

export default function HomePage() {
  return (
    <HomePageStyled>
      <div className="container">
        <Navbar/>
        <HomeContainer/>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .container {
    width: 1380px;
    height: 680px;
  }
`;
