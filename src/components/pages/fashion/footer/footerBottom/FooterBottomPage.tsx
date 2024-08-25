import styled from "styled-components";
import FashionText from "./FashionText";
import FooterColumn from "./FooterColumn";

export default function FooterBottomPage() {
  return (
    <FooterBottomStyled>
      <div className="container">
        <FashionText />
        <FooterColumn
          title="Company"
          items={["About", "Contact us", "Support", "Careers"]}
        />
        <FooterColumn
          title="Quick Link"
          items={["Share Location", "Orders Tracking", "Size Guide", "FAQs"]}
        />
        <FooterColumn
          title="Legal"
          items={["Terms & conditions", "Privacy Policy"]}
        />
      </div>
    </FooterBottomStyled>
  );
}

const FooterBottomStyled = styled.div`
  background-color: black;
  color: white;
  height: 300px;
  padding: 20px 40px;

  .container {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 30px;
  }
`;
