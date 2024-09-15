import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  min-height: 50px;
  padding: ${({ $paddingHeader }) => $paddingHeader || "30px 0"};

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

  @media (min-width: 1000px) {
    min-height: 100px;
    padding: 40px 0;
  }
`;

export const StyledTitleHeader = styled.h1`
  font-weight: 800;
  font-size: ${({ $fontSize }) => $fontSize || "22px"};
  text-align: center;
  letter-spacing: 10px;

  @media (min-width: 375px) {
    font-size: ${({ $fontSize }) => $fontSize || "30px"};
  }

  @media (min-width: 420px) {
    font-size: ${({ $fontSize }) => $fontSize || "38px"};
  }

  @media (min-width: 750px) {
    font-size: ${({ $fontSize }) => $fontSize || "52px"};
    text-shadow: ${({ $fontSize }) =>
      $fontSize || "2px 2px 1px rgba(20, 18, 18, 0.9)"};
  }
`;

export const ToggleButton = styled.button`
  font-size: 18px;
  margin: 0 auto;
  margin-top: 15px;
  display: ${({ $showForm }) => ($showForm ? "none" : "block")};

  padding: ${(props) => props.$paddingButton || "6px 12px"};

  @media (min-width: 767px) {
    padding: ${(props) => props.$paddingButton || "10px 35px"};
  }
`;
