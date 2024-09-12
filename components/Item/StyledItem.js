import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const StyledItem = styled.li`
  max-width: 320px;
  max-height: 400px;
  border: 1px solid #cdc3b7;
  background-color: ${(props) =>
    props.$isCompletedView
      ? "rgba(71, 70, 70, 0.267)"
      : "rgba(255, 255, 255, 0.295)"};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  opacity: ${(props) => (props.$isPurchasedView ? 0.6 : 1)};

  $after {
  }

  @media (min-width: 391px) {
    max-width: 400px;
    max-height: 600px;
  }
`;

export const StyledItemLink = styled(Link)`
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

  &:focus {
    outline: none;
    border: 1px solid #555555;
    border-radius: 5px;
  }

  @media (hover: hover) {
    &:hover {
      background-color: rgba(0, 0, 0, 0.06);
      transition: all 0.9s;
      border-color: #a69d8a;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const StyledrStatusWrrepe = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 5px;
  margin: 0 auto;
`;

export const StyledrStatusText = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export const StyledTogglePurchasedStatus = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$isPurchasedView ? "#3d3d3d" : "transparent"};
  border: 2px solid
    ${(props) => (props.$isPurchasedView ? "#3d3d3d" : "#3d3d3d")};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:after {
    content: "${(props) => (props.$isPurchasedView ? "✔" : "")}";
    font-size: 38px;
    color: ${(props) => (props.$isPurchasedView ? "black" : "transparent")};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    transition: all 0.3s;
  }
`;

export const StyledItemImageWrapper = styled.div`
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

export const StyledItemImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const StyledItemTitle = styled.h2`
  font-size: 32px;
`;

export const StyledItemCategoryText = styled.p`
  background-color: ${(props) => props.$backgroundColor};
  font-size: 26px;
  padding: 15px 25px;
  border-radius: 5px;
`;

export const StyledItemButtonDelete = styled.button`
  padding: 15px 20px;

  &:focus {
    outline: none;
    border: 1px solid red;
    border-radius: 5px;
  }
`;
