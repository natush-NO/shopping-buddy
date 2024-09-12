import styled from "styled-components";

export const StyledContainerList = styled.div`
  width: 90vw;
  max-width: 2000px;
  padding: 0 15px;
  margin: 0 auto;
  margin-top: ${(props) => (props.$isPurchasedView ? "100px" : "-120px")};

  @media (min-width: 391px) {
    margin-top: ${(props) => (props.$isPurchasedView ? "100px" : "-70px")};
  }

  @media (min-width: 661px) {
    margin-top: -100px;
  }

  @media (min-width: 1000px) {
    margin-top: ${(props) => (props.$isPurchasedView ? "60px" : "130px")};
  }
`;

export const StyledTitleItems = styled.h2`
  font-size: 38px;
  font-weight: 800;
  color: #4a4a4a;
  text-align: center;
  margin-bottom: 70px;
`;

export const StyledItems = styled.ul`
  font-size: 18px;
  font-weight: 600;
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-template-rows: repeat(auto-fill, 400px);
  gap: 70px 35px;
  justify-content: center;

  @media (min-width: 391px) {
    grid-template-columns: repeat(auto-fill, 400px);
    grid-template-rows: repeat(auto-fill, 600px);
  }
`;

export const StyledEmptyMessage = styled.div`
  text-align: center;
`;

export const StyledEmptyMessageText = styled.p`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 35px;
`;

export const StyledEmptyMessageButton = styled.button`
  font-size: 32px;
  padding: 15px 20px;
`;
