import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const StyledItem = styled.li`
  font-size: 18px;
  font-weight: 600;
  max-width: 320px;
  max-height: 600px;
  border: 1px solid #cdc3b7;
  background-color: ${(props) =>
    props.$isCompletedView
      ? "rgba(71, 70, 70, 0.267)"
      : "rgba(255, 255, 255, 0.295)"};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  opacity: ${(props) => (props.$isPurchasedView ? 0.6 : 1)};
  position: relative;

  @media (min-width: 375px) {
    max-width: 350px;
  }

  @media (min-width: 500px) {
    max-width: 400px;
  }

  @media (min-width: 650px) {
    max-width: 450px;
  }

  @media (min-width: 850px) {
    max-width: 350px;
  }

  @media (min-width: 965px) {
    max-width: 500px;
    max-height: 680px;
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
  transition: all 0.4s;

  &:focus {
    outline: none;
    border: 1px solid #777777;
    border-radius: 5px;
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${(props) =>
        props.$isPurchasedView
          ? "rgba(255, 255, 255, 1)"
          : "rgba(255, 255, 255, 0.2)"};
      transition: all 0.8s;
      border-color: #a69d8a;
      box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.2);
    }
  }
`;

// export const StyledLinkArray = styled.span`
//   font-size: 60px;
//   position: absolute;
//   top: -4%;
//   left: 5%;
//   opacity: 0.8;
// `;

export const StyledItemImageWrapper = styled.div`
  width: 250px;
  height: 200px;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
  transition: all 0.5s;

  @media (hover: hover) {
    &:hover:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.2);
      z-index: 1;
      transition: all 0.9s;
    }
  }

  @media (min-width: 500px) {
    width: 250px;
    height: 200px;
  }

  @media (min-width: 700px) {
    width: 300px;
    height: 300px;
  }

  @media (min-width: 1000px) {
    width: 330px;
    height: 310px;
  }
`;

export const StyledItemImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const StyledItemTitle = styled.h3`
  font-size: 32px;
`;

export const StyledItemQuantityText = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

export const StyledItemCategoryText = styled.span`
  background-color: ${(props) => props.$backgroundColor};
  font-size: 26px;
  padding: 5px 15px;
  border-radius: 5px;

  @media (min-width: 375px) {
    padding: ${(props) => props.$category || "7px 7px"}; 
  }

    @media (min-width: 375px) {
    padding: ${(props) => props.$category || "10px 20px"}; 
  }

  @media (min-width: 850px) {
    padding: ${(props) => props.$category || "15px 25px"};
`;

export const StyledItemButtonDelete = styled.button`
  padding: 10px 15px;
  background-color: ${(props) =>
    props.$isPurchasedView ? "#3d3d3d" : "#3d3d3d"};
  transition: all 0.4s;

  @media (hover: hover) {
    &:hover {
      background-color: ${(props) =>
        props.$isPurchasedView ? "#3d3d3d" : "#555555"};
    }
  }

  &:focus {
    outline: none;
    border: 1px solid
      ${(props) => (props.$isPurchasedView ? "transparent" : "red")};
    border-radius: 5px;
  }
`;

export const StyledStatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 0 auto;
`;

export const StyledStatusText = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const StyledStatusArray = styled.span`
  &:after {
    content: "↓";
    font-size: 26px;
  }
`;

export const StyledTogglePurchasedStatus = styled.button`
  width: 65px;
  height: 30px;
  border-radius: 5px;
  margin-top: 5px;
  background-color: ${(props) =>
    props.$isPurchasedView ? "#1a1a1a" : "transparent"};

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) =>
    props.$isPurchasedView
      ? "none"
      : "0 1px 5px 1px rgba(0, 0, 0, 0.259),  0 -1px 5px 1px rgba(0, 0, 0, 0.259)"};
  transition: all 0.6s;

  &:after {
    content: "${(props) => (props.$isPurchasedView ? "✔" : "")}";
    font-size: 36px;
    color: ${(props) => (props.$isPurchasedView ? "black" : "transparent")};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (hover: hover) {
    &:hover {
      box-shadow: none;
      transition: all 0.8s;

      &:after {
        color: ${(props) => (props.$isPurchasedView ? "white" : "transparent")};
      }
    }
  }

  &:focus {
    background-color: ${(props) =>
      props.$isPurchasedView ? "red" : "#3d3d3d"};
    box-shadow: ${(props) =>
      props.$isPurchasedView
        ? "none"
        : "0 1px 5px 1px rgba(0, 0, 0, 0.259),  0 -1px 5px 1px rgba(0, 0, 0, 0.259)"};

    &:after {
      color: ${(props) =>
        props.$isPurchasedView ? "transparent" : "transparent"};
    }
  }
`;
