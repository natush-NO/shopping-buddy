import styled from "styled-components";

export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const StyledModalContent = styled.div`
  background: white;
  padding: 25px;
  line-height: 1.2;
  border-radius: 5px;
  text-align: center;
  width: 100%;
  max-width: 300px;

  @media (min-width: 420px) {
    max-width: 350px;
  }

  @media (min-width: 600px) {
    max-width: 500px;
    padding: 50px 20px;
  }
`;

export const StyledItemSureText = styled.span`
  display: block;
  font-size: 22px;
  font-weight: 600;
`;

const BaseButton = styled.button`
  font-size: 20px;

  border: 1px solid #3d3d3d;
  padding: 10px;
  margin-top: 25px;

  transition: all 0.4s;

  &:hover {
    background-color: #e74c3c;
  }
`;

export const StyledConfirmButton = styled(BaseButton)`
  margin-right: 15px;
  padding: 10px 12px;
`;

export const StyledCancelButton = styled(BaseButton)`
  font-size: 16px;
  padding: 11px 10px;
`;
