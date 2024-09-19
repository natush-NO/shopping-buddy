import styled from "styled-components";

export const ShoppingFilterContainer = styled.div`
  font-size: 18px;
  width: 100%;
  padding: 10px 0;
  margin-bottom: 40px;
  display: flex;
  gap: 7px;
  flex-direction: column;
  align-items: center;
`;

export const StyledSelectFilter = styled.select`
  padding: 10px;
  width: 70%;
  font-size: 16px;
  border: 1px solid #cdc3b7;
  border-radius: 5px;
  background-color: "rgba(255, 255, 255, 0.295)";
  outline: none;
  cursor: pointer;

  &:focus {
    border: 1px solid #3d3d3d;
  }

  @media (min-width: 500px) {
    font-size: 22px;
  }

  @media (min-width: 770px) {
    width: 40%;
    font-size: 24px;
  }
`;

export const StyledOptionFilter = styled.option`
  padding: 10px;
  background-color: "rgba(255, 255, 255, 0.295)";

  &:hover {
    background-color: #1976d2;
  }
`;

export const ShoppingFilterButton = styled.button`
  font-size: 16px;
  padding: 10px 15px;

  @media (min-width: 700px) {
    font-size: 18px;
    font-weight: 600;
    padding: 12px 15px;
  }
`;
