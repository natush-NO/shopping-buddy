import styled from "styled-components";
import Image from "next/image";

export const StyledItem = styled.li`
  max-width: 320px;
  max-height: 400px;
  cursor: pointer;
  border: 1px solid #cdc3b7;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 25px 15px;
  background-color: rgba(255, 255, 255, 0.295);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  transition: all 0.5s;

  @media (hover: hover) {
    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
      border-color: #a69d8a;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const StyledImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const StyledTaskTitle = styled.h2`
  font-size: 32px;
  margin: 0;
  padding: 0;
`;

export const CategoryText = styled.p`
  background-color: ${(props) => props.$backgroundColor};
  font-size: 26px;
  padding: 15px 25px;
  border-radius: 5px;
`;
