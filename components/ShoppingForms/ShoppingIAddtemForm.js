import useLocalStorageState from "use-local-storage-state";
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

export default function ShoppingAddItemForm({
  onAddItem,
  setShowForm,
  errors,
  setErrors,
}) {
  const [name, setName] = useLocalStorageState("create-form-name", {
    defaultValue: "",
  });
  const [quantity, setQuantity] = useLocalStorageState("create-form-quantity", {
    defaultValue: "1",
  });
  const [category, setCategory] = useLocalStorageState("create-form-category", {
    defaultValue: "",
  });
  const [comment, setComment] = useLocalStorageState("create-form-comment", {
    defaultValue: "",
  });

  function handleSubmitWrapper(event) {
    event.preventDefault();

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

    const newItem = {
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
    if (setShowForm) setShowForm(false);
  }

  function handleCancel() {
    setName("");
    setQuantity("1");
    setCategory("");
    setComment("");
    setErrors({});

    if (setShowForm) setShowForm(false);
  }

  return (
    <StyledOverlay>
      <StyledFormContainer>
        <StyledFormTitle>Create Shopping Item</StyledFormTitle>
        <form onSubmit={handleSubmitWrapper}>
          <StyledInputField>
            <StyledLabel htmlFor="name">Shopping Item Name</StyledLabel>
            <StyledInput
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              aria-required="true"
              aria-label="Enter the name of the shopping item"
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
              aria-required="true"
              aria-label="Enter the quantity of the shopping item"
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
              aria-required="true"
              aria-label="Select a category for the shopping item"
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
              aria-label="Enter any comments about the shopping item"
            />
          </StyledInputField>

          <div>
            <StyledButton
              type="submit"
              aria-label="Submit the form to add a new shopping item"
            >
              Add Item
            </StyledButton>
            <StyledButton
              $cancel
              type="button"
              onClick={handleCancel}
              aria-label="Cancel adding a new shopping item and close the form"
            >
              Cancel
            </StyledButton>
          </div>
        </form>
      </StyledFormContainer>
    </StyledOverlay>
  );
}
