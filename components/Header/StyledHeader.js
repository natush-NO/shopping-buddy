import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  min-height: 150px;
  padding: ${({ $padding }) => $padding || "50px 0"};

  background: url("/images/background_image.webp");
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  @media (max-width: 1000px) {
    min-height: 100px;
    padding: 20px 0;
  }
`;

export const StyledTitleHeader = styled.h1`
  font-weight: 800;
  font-size: ${({ $fontSize }) => $fontSize || "38px"};
  text-shadow: 2px 2px 1px rgba(20, 18, 18, 0.9);
  text-align: center;
  letter-spacing: 10px;

  @media (min-width: 391px) {
    font-size: ${({ $fontSize }) => $fontSize || "64px"};
  }
`;

export const ToggleButton = styled.button`
  padding: 10px 25px;
  font-size: 18px;
  margin: 0 auto;
  margin-top: 15px;
  display: ${({ $showForm }) => ($showForm ? "none" : "block")};

  @media (min-width: 391px) {
    padding: 10px 35px;
    margin-top: 20px;
  }
`;
