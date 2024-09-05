import { useState } from "react";
import styled from "styled-components";
import categories from "@/utils/categories.json";

const StyledFormContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.295);
  margin-bottom: 20px;
  overflow: auto;
`;

const StyledFormTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
`;

const StyledInputField = styled.div`
  margin-bottom: 15px;
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
  margin-left: ${(props) => (props.$labelQuantity ? "70%" : "2px")};
`;

const StyledInput = styled.input`
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
    // height: 50px;
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

const StyledSelect = styled.select`
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

const StyledTextarea = styled.textarea`
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

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background: #3d3d3d;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 2px;
  transition: all 0.2s;

  &:hover {
    background-color: #555555;
    transition: all 0.4s;
  }

  &:focus {
    border: 1px solid #3d3d3d;
    outline: none;
  }
`;

const StyledErrorMessage = styled.p`
  color: #b71c1c;
  font-size: 14px;
  margin-left: 3px;
  margin-top: 2px;
`;

const errorMessages = {
  name: "Name is required",
  quantity: "Quantity must be a number greater than 1",
  category: "Please select a category",
};

export default function ShoppingItemForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [category, setCategory] = useState("");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    let formErrors = {};

    if (!name) formErrors.name = errorMessages.name;
    if (!quantity || isNaN(quantity) || quantity <= 0)
      formErrors.quantity = errorMessages.quantity;
    if (!category) formErrors.category = errorMessages.category;

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const newItem = {
      id: Date.now().toString(),
      name,
      quantity: parseInt(quantity, 10),
      category,
      comment,
    };

    onAddItem(newItem);
    setName("");
    setQuantity("1");
    setCategory("");
    setComment("");
    setErrors({});
  };

  return (
    <StyledFormContainer>
      <StyledFormTitle>Create Shopping Item</StyledFormTitle>
      <form onSubmit={handleSubmit}>
        <StyledInputField>
          <StyledLabel htmlFor="name">Shopping Item Name</StyledLabel>
          <StyledInput
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          {errors.name && (
            <StyledErrorMessage>{errors.name}</StyledErrorMessage>
          )}
        </StyledInputField>

        <StyledInputField>
          <StyledLabel $labelQuantity htmlFor="quantity">
            Quantity
          </StyledLabel>
          <StyledInput
            $inputQuantity={true}
            type="number"
            id="quantity"
            value={quantity}
            min="1"
            onChange={(event) => setQuantity(event.target.value)}
          />
          {errors.quantity && (
            <StyledErrorMessage>{errors.quantity}</StyledErrorMessage>
          )}
        </StyledInputField>

        <StyledInputField>
          <StyledLabel htmlFor="category">Category</StyledLabel>
          <StyledSelect
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">Please select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </StyledSelect>
          {errors.category && (
            <StyledErrorMessage>{errors.category}</StyledErrorMessage>
          )}
        </StyledInputField>

        <StyledInputField>
          <StyledLabel htmlFor="comment">Comment</StyledLabel>
          <StyledTextarea
            id="comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </StyledInputField>

        <StyledButton type="submit">Add Item</StyledButton>
      </form>
    </StyledFormContainer>
  );
}
