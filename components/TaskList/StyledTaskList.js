import styled from "styled-components";

export const StyledContainerList = styled.div`
  max-width: 2000px;
  padding: 0 15px;
  margin: 0 auto;
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
`;
