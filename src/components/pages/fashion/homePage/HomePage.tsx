import styled from "styled-components";
import Navbar from "./navbar/Navbar";

export default function HomePage() {
  return (
    <HomePageStyled>
      <div className="container">
        <Navbar/>
        <div className="container-img">
          <div className="text">
            <h1>
              <span className="back">LET'S</span> EXPLORE
              <span className="back2">UNIQUE</span> CLOTHES.
            </h1>
            <p>Live for Influential and Innovative fashion!</p>
            <button className="button-shop">Shop Now</button>
          </div>
          <div className="image">
            <img src="/img/shopping.png" alt="Woman_picture"></img>
          </div>
        </div>
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
  .container-img {
    height: 580px;
    background: #f4f6f5;
    display: grid;
    grid-template-columns: 500px 1fr;
    border-radius: 50px;
    overflow: hidden;
  }

  button {
    background: black;
    color: white;
    border-radius: 7px;
    padding: 12px 20px 12px 20px;
    border: none;
    cursor: pointer;
  }
  .button-shop {
    font-size: 22px;
  }
  .text {
    margin-left: 80px;
    z-index: 10;
    h1 {
      width: 500px;
      font-size: 66px;
      margin-bottom: 25px;
    }
    p {
      font-size: 22px;
      margin-bottom: 30px;
    }
  }
  .image {
    img {
      position: relative;
      top: 50px;
      width: 800px;
      height: auto;
    }
  }
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
