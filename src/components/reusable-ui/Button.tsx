import styled from "styled-components";

type ButtonType = {
  className?: string;
  label: string;
};

export default function Button({ className, label }: ButtonType) {
  return <ButtonStyled className={className}>{label}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  background: black;
  color: white;
  border-radius: 7px;
  padding: 12px 20px 12px 20px;
  border: none;
  cursor: pointer;
`;
