import styled from "styled-components";
import { HiOutlineArrowSmRight } from "react-icons/hi";

export default function NewArrivalsPage() {
  return (
    <NewArrivalsPageStyled>
      <div>
        <h1>New Arrivals</h1>
      </div>
      <div className="container">
        <div>
          <div>
            <div className="image">
              <img src="/img/orange.PNG" alt="Nouveaux_Vetements" />
            </div>
            <div className="description">
              <div>
                <h2>Hoodies & Sweetshirt</h2>
                <p>Explore Now!</p>
              </div>
              <HiOutlineArrowSmRight />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="image">
              <img src="/img/purple.PNG" alt="Nouveaux_Vetements" />
            </div>
            <div className="description">
              <div>
                <h2>Hoodies & Sweetshirt</h2>
                <p>Explore Now!</p>
              </div>
              <HiOutlineArrowSmRight />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="image">
              <img src="/img/blue.PNG" alt="Nouveaux_Vetements" />
            </div>
            <div className="description">
              <div>
                <h2>Hoodies & Sweetshirt</h2>
                <p>Explore Now!</p>
              </div>
              <HiOutlineArrowSmRight />
            </div>
          </div>
        </div>
      </div>
    </NewArrivalsPageStyled>
  );
}

const NewArrivalsPageStyled = styled.div`
  margin-top: 60px;
  margin-left: 100px;

  .container {
    margin-top: 80px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .description {
    width: 350px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      width: 40px;
      height: auto;
    }
  }
  .image {
    background-color: blue;
    width: 350px;
    height: 500px;
    border-radius: 20px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
`;
