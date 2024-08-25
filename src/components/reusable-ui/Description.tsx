import styled from "styled-components";
import { HiOutlineArrowSmRight } from "react-icons/hi";

type DescriptionType = {
  title: string;
  text: string;
};

export default function Description({ title, text }: DescriptionType) {
  return (
    <DescriptionStyled>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <HiOutlineArrowSmRight />
    </DescriptionStyled>
  );
}

const DescriptionStyled = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 40px;
    height: auto;
  }
`;
