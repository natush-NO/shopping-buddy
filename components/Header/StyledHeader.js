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
  font-size: 22px;
  text-align: center;
  letter-spacing: 10px;

  @media (min-width: 375px) {
    font-size: 34px;
  }

  @media (min-width: 420px) {
    font-size: 38px;
  }

  @media (min-width: 750px) {
    font-size: 52px;
    text-shadow: 2px 2px 1px rgba(20, 18, 18, 0.9);
  }
`;

export const StyledToggleButton = styled.button`
  font-size: 18px;
  margin: 0 auto;
  margin-top: 15px;
  display: ${({ $showForm }) => ($showForm ? "none" : "block")};
  padding: 6px 12px;
  position: relative;

  &::after {
    content: "";
    background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="%234a4a4a"%3E%3Cpath stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"%3E%3C/path%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    position: absolute;
    top: -19%;
    right: -40%;
    width: 40px;
    height: 38px;
  }

  @media (min-width: 767px) {
    padding: 10px 35px;

    &::after {
      background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="%234a4a4a"%3E%3Cpath stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"%3E%3C/path%3E%3C/svg%3E');
      background-repeat: no-repeat;
      background-position: center center;
      top: -15%;
      right: -45%;
      width: 50px;
      height: 45px;
    }
  }
`;
