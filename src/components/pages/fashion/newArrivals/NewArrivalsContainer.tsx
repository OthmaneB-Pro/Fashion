import styled from "styled-components";
import ItemCard from "../../../reusable-ui/ItemCard";
export default function NewArrivalsContainer() {
  return (
    <NewArrivalsContainerStyled>
      <ItemCard
        src="/img/orange.PNG"
        alt="new_Hoodies"
        title="Hoodies & Sweetshirt"
        text="Explore Now!"
      />
      <ItemCard
        src="/img/purple.PNG"
        alt="new_Parkas"
        title="Coats & Parkas"
        text="Explore Now!"
      />
      <ItemCard
        src="/img/blue.PNG"
        alt="new_T-shirt"
        title="Tees & T-Shirt"
        text="Explore Now!"
      />
    </NewArrivalsContainerStyled>
  );
}

const NewArrivalsContainerStyled = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
