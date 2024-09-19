import categories from "@/utils/categories.json";
import handleSubmitError from "@/utils/errorHandlersSubmitForm";
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

export default function ShoppingEditItemForm({
  onAddItem,
  setShowFormEdit,
  initialItem,
  errors,
  setErrors,
}) {
  function handleSubmitWrapper(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const quantity = formData.get("quantity");
    const category = formData.get("category");
    const comment = formData.get("comment");

    const formErrors = handleSubmitError(
      event,
      name,
      quantity,
      category,
      setErrors
    );

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

    onAddItem(updatedItem, initialItem.id);
    setShowFormEdit(false);
  }

  function handleCancel() {
    initialItem.name || "";
    initialItem.quantity || "";
    initialItem.category || "";
    initialItem.comment || "";
    setErrors({});

    setShowFormEdit(false);
  }

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
              name="name"
              defaultValue={initialItem.name}
              aria-required="true"
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
              name="quantity"
              defaultValue={initialItem.quantity}
              min="0"
              aria-required="true"
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
              name="category"
              defaultValue={initialItem.category}
              aria-required="true"
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
              name="comment"
              defaultValue={initialItem.comment}
              aria-label="Add a comment about the shopping item"
            />
          </StyledInputField>
          <div>
            <StyledButton
              type="submit"
              aria-label="Submit the form to edit the shopping item"
            >
              Edit Item
            </StyledButton>
            <StyledButton
              $cancel
              type="button"
              onClick={handleCancel}
              aria-label="Cancel editing and close the form"
            >
              Cancel
            </StyledButton>
          </div>
        </form>
      </StyledFormContainer>
    </StyledOverlay>
  );
}
