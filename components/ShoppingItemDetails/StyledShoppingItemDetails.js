import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const StyledContainer = styled.div`
  max-width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 30px;
  background-color: rgba(255, 255, 255, 0.295);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 15px;
  margin: 0 auto;
  margin-top: -170px;

  @media (min-width: 391px) {
    max-width: 80vw;
    padding: 20px;
    margin-top: -80px;
  }

  @media (min-width: 801px) {
    max-width: 50vw;
    padding: 30px;
    margin-top: -100px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 34px;
  font-weight: 800;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 5px;

  @media (min-width: 391px) {
    font-size: 56px;
  }

  @media (min-width: 1100px) {
    font-size: 68px;
  }
`;

export const StyledImageContainer = styled.div`
  height: auto;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 200px;
  max-height: 180px;
  margin-bottom: 25px;

  @media (min-width: 391px) {
    max-width: 450px;
    max-height: 400px;
  }

  @media (min-width: 801px) {
    max-width: 550px;
    max-height: 500px;
  }
`;

export const StyledImage = styled(Image)`
  position: relative;
  object-fit: cover;
  height: auto;
  max-width: 100%;
  cursor: pointer;
  transition: all 0.9s;

  @media (min-width: 768px) {
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const StyledParagraph = styled.div`
  font-weight: 600;
  font-size: 22px;

  @media (min-width: 391px) {
    font-size: 28px;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  @media (min-width: 801px) {
    font-size: 42px;

    &:not(:last-child) {
      margin-bottom: 25px;
    }
  }
`;

export const StyledLabel = styled.span`
  font-weight: 600;
`;

export const StyledValue = styled.span`
  font-weight: 400;
`;

export const StyledEditButton = styled.button`
  font-size: 16px;
  margin: 0 auto;
  margin-top: 15px;
  display: ${({ $showForm }) => ($showForm ? "none" : "block")};
  padding: 6px 12px;

  @media (min-width: 800px) {
    font-size: 24px;
    padding: 10px 25px;
    letter-spacing: 2px;
  }
`;

export const StyledBackLink = styled(Link)`
  font-size: 14px;
  padding: 5px 10px;
  margin-top: 5px;
  background-color: #3d3d3d;
  color: white;
  border-radius: 4px;
  transition: all 0.2s;
  display: block;

  &:hover {
    background-color: #555555;
    transition: all 0.4s;
  }

  &:focus {
    outline: none;
    border: 1px solid #3d3d3d;
  }

  @media (min-width: 375px) {
    font-size: 16px;
    padding: 10px 20px;
    margin-top: 10px;
  }

  @media (min-width: 801px) {
    font-size: 18px;
    padding: 20px 30px;
    margin-top: 20px;
  }
`;
