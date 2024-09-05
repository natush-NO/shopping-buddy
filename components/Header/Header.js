import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  min-height: 200px;
  padding: 50px 0;
  background: url("/images/background_image.webp");
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;

  @media (max-width: 500px) {
    min-height: 100px;
    padding: 20px 0;
  }
`;

const StyledTitleHeader = styled.h1`
  font-weight: 800;
  font-size: 82px;
  text-shadow: 2px 2px 1px rgba(20, 18, 18, 0.9);
  text-align: center;
  letter-spacing: 1rem;

  @media (max-width: 850px) {
    font-size: 64px;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledTitleHeader>Shopping Buddy</StyledTitleHeader>
    </StyledHeader>
  );
}
