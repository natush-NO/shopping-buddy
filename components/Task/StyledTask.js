import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const StyledItem = styled.li`
  max-width: 320px;
  max-height: 400px;
  border: 1px solid #cdc3b7;
  background-color: rgba(255, 255, 255, 0.295);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  @media (min-width: 391px) {
    max-width: 400px;
    max-height: 500px;
  }
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  transition: all 0.8s;

  @media (hover: hover) {
    &:hover {
      background-color: rgba(0, 0, 0, 0.06);
      transition: all 0.9s;
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

  @media (min-width: 391px) {
    width: 220px;
    height: 220px;
  }
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const StyledTaskTitle = styled.h2`
  font-size: 32px;
`;

export const CategoryText = styled.p`
  background-color: ${(props) => props.$backgroundColor};
  font-size: 26px;
  padding: 15px 25px;
  border-radius: 5px;
`;
