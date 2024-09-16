import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react";
import categories from "@/utils/categories.json";
import handleSubmit from "@/utils/errorHandlersSubmitForm";
import {
  StyledOverlay,
  StyledFormContainer,
  StyledFormTitle,
  StyledInputField,
  StyledLabel,
  StyledInput,
  StyledSelect,
  StyledTextarea,
  StyledButton,
  StyledErrorMessage,
} from "./StyledShoppingForm";

export default function ShoppingEditForm({
  onAddItem,
  setShowFormEdit,
  initialItem,
}) {
  const [name, setName] = useLocalStorageState("edit-form-name", {
    defaultValue: initialItem.name || "",
  });
  const [quantity, setQuantity] = useLocalStorageState("edit-form-quantity", {
    defaultValue: initialItem.quantity || "",
  });
  const [category, setCategory] = useLocalStorageState("edit-form-category", {
    defaultValue: initialItem.category || "",
  });
  const [comment, setComment] = useLocalStorageState("edit-form-comment", {
    defaultValue: initialItem.comment || "",
  });
  const [errors, setErrors] = useLocalStorageState("edit-form-errors", {
    defaultValue: {},
  });

  useEffect(() => {
    setName(initialItem.name || "");
    setQuantity(initialItem.quantity || "");
    setCategory(initialItem.category || "");
    setComment(initialItem.comment || "");
  }, [initialItem, setName, setQuantity, setCategory, setComment]);

  function handleSubmitWrapper(event) {
    event.preventDefault();

    const formErrors = handleSubmit(event, name, quantity, category, setErrors);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const updatedItem = {
      ...initialItem,
      name,
      quantity: parseInt(quantity, 10),
      category,
      comment,
    };

    onAddItem(updatedItem);
    setShowFormEdit(false);
  }

  const handleCancel = () => {
    setName(initialItem.name || "");
    setQuantity(initialItem.quantity || "");
    setCategory(initialItem.category || "");
    setComment(initialItem.comment || "");
    setErrors({});

    setShowFormEdit(false);
  };

  return (
    <StyledOverlay>
      <StyledFormContainer>
        <StyledFormTitle>Edit Shopping Item</StyledFormTitle>
        <form onSubmit={handleSubmitWrapper}>
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
              min="0"
              onChange={(event) => setQuantity(event.target.value)}
            />
            {errors.quantity && (
              <StyledErrorMessage $labelQuantity>
                {errors.quantity}
              </StyledErrorMessage>
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

          <div>
            <StyledButton type="submit">Edit Item</StyledButton>
            <StyledButton $cancel type="button" onClick={handleCancel}>
              Cancel
            </StyledButton>
          </div>
        </form>
      </StyledFormContainer>
    </StyledOverlay>
  );
}
