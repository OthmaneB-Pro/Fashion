import styled from "styled-components";

export default function FashionPage() {
  return (
    <FashionPageStyled>
      <div className="container">
        <div className="navbar">
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
        </div>
        <div className="container-img">
          <div className="text">
            <h1>LET'S EXPLORE UNIQUE CLOTHES.</h1>
            <p>Live for Influential and Innovative fashion!</p>
            <button className="button-shop">Shop Now</button>
          </div>
          <div className="image">
            <img src="/img/shopping.png" alt="Woman_picture"></img>
          </div>
        </div>
      </div>
    </FashionPageStyled>
  );
}

const FashionPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .container {
    width: 1380px;
    height: 680px;
  }
  .navbar {
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
  }
  ul {
    display: flex;
    align-items: center;
  }
  li {
    margin-right: 50px;
    list-style: none;
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
    h1 {
      width: 400px;
      font-size: 60px;
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
`;
