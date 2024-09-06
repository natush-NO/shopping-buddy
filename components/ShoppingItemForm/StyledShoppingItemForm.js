import styled from "styled-components";

export const StyledFormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 1000px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  z-index: 1000;
  overflow: auto;
<<<<<<< HEAD
  // box-sizing: border-box;
=======
>>>>>>> 706f125f0eb55492f576daf8a66ce5f5460bfb89
`;

export const StyledFormTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
`;

export const StyledInputField = styled.div`
  margin-bottom: 15px;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
  margin-left: ${(props) => (props.$labelQuantity ? "70%" : "2px")};
`;

export const StyledInput = styled.input`
  width: ${(props) => (props.$inputQuantity ? "30%" : "100%")};
  padding: 15px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.8);
  margin-left: ${(props) => (props.$inputQuantity ? "70%" : "")};
  transition: all 0.2s;

  -webkit-appearance: number-input;
  -moz-appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    margin: 0;
    opacity: 1;
    display: block;
    transform: scale(2);
  }

  &:hover {
    border: 1px solid #3d3d3d;
  }

  &:focus {
    border: 1px solid #3d3d3d;
    outline: none;
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.8);

  &:hover {
    border: 1px solid #3d3d3d;
  }

  &:focus {
    border: 1px solid #3d3d3d;
    outline: none;
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 18px;
  font-weight: 600;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 100px;
  resize: none;
  background-color: rgba(255, 255, 255, 0.8);

  &:hover {
    border: 1px solid #3d3d3d;
  }

  &:focus {
    border: 1px solid #3d3d3d;
    outline: none;
  }
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background: #3d3d3d;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: ${(props) => (props.$cancel ? "10px" : "2px")};
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => (props.$cancel ? "#ff4d4d" : "#555555")};
    transition: all 0.4s;
  }

  &:focus {
    border: 1px solid #3d3d3d;
    outline: none;
  }
`;

export const StyledErrorMessage = styled.p`
  color: #b71c1c;
  font-size: 14px;
  margin-left: 3px;
  margin-top: 2px;
`;
