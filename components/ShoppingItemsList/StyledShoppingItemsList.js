import styled from "styled-components";

export const StyledContainerItemList = styled.div`
  margin-top: ${(props) => (props.$isPurchasedView ? "100px" : "-120px")};

  padding: ${(props) => (props.$isPurchasedView ? "" : "60px 0 120px 0")};
  box-shadow: ${(props) =>
    props.$isPurchasedView ? "" : "0 4px 10px 0 rgba(0, 0, 0, 0.259)"};

  @media (min-width: 375px) {
    margin-top: ${(props) => (props.$isPurchasedView ? "100px" : "-70px")};
  }

  @media (min-width: 660px) {
    margin-top: ${(props) => (props.$isPurchasedView ? "100px" : "-50px")};
  }

  @media (min-width: 1000px) {
    margin: ${(props) =>
      props.$isPurchasedView ? "70px 0 0 0" : "280px 0 0 0"};
  }
`;

export const StyledContainerList = styled.article`
  width: 90vw;
  max-width: 2000px;
  padding: 0 15px;
  margin: 0 auto;
  text-align: center;
`;

export const StyledBackwardsButton = styled.button`
  font-size: 16px;
  padding: 7px;
  margin-bottom: 20px;

  @media (min-width: 500px) {
    font-size: 18px;
    padding: 10px 15px;
  }
`;

export const StyledTitleItems = styled.h2`
  font-size: 34px;
  font-weight: 800;
  color: #4a4a4a;
  text-align: center;
  margin-bottom: 15px;

  @media (min-width: 500px) {
    font-size: 44px;
    margin-bottom: 30px;
  }
`;

export const StyledItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-template-rows: repeat(auto-fill, 600px);
  gap: 50px 35px;
  justify-content: center;

  @media (min-width: 375px) {
    grid-template-columns: repeat(auto-fill, 350px);
  }

  @media (min-width: 500px) {
    grid-template-columns: repeat(auto-fill, 400px);
  }

  @media (min-width: 650px) {
    grid-template-columns: repeat(auto-fill, 450px);
  }

  @media (min-width: 850px) {
    grid-template-columns: repeat(auto-fill, 350px);
    gap: 70px 40px;
  }

  @media (min-width: 965px) {
    grid-template-columns: repeat(auto-fill, 500px);
    grid-template-rows: repeat(auto-fill, 680px);
    gap: 70px 50px;
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
  font-size: 28px;
  padding: 15px 20px;

  @media (min-width: 500px) {
    font-size: 32px;
  }
`;
