import styled from "styled-components";
import TitleNewArrivals from "./TitleNewArrivals";
import NewArrivalsContainer from "./NewArrivalsContainer";

export default function NewArrivalsPage() {
  return (
    <NewArrivalsPageStyled>
      <TitleNewArrivals />
      <NewArrivalsContainer />
    </NewArrivalsPageStyled>
  );
}

const NewArrivalsPageStyled = styled.div`
  margin-top: 60px;
  margin-left: 100px;
`;
