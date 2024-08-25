import styled from "styled-components";

type FooterColumnType = {
  title: string;
  items: string[];
};

export default function FooterColumn({ title, items }: FooterColumnType) {
  return (
    <ColumnContainer>
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </ColumnContainer>
  );
}

const ColumnContainer = styled.div`
  h3 {
    color: white;
    margin-bottom: 20px;
  }
  ul {
    padding: 0;
  }
  li {
    color: #8e8e8e;
    list-style: none;
    margin-bottom: 30px;
  }
`;
