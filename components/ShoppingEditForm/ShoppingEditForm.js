import useLocalStorageState from "use-local-storage-state";
import categories from "@/utils/categories.json";
import {
  StyledFormContainer,
  StyledFormTitle,
  StyledInputField,
  StyledLabel,
  StyledInput,
  StyledSelect,
  StyledTextarea,
  StyledButton,
  StyledErrorMessage,
} from "../ShoppingItemForm/StyledShoppingItemForm";

const errorMessages = {
  name: "Name is required",
  quantity: "Quantity must be a number greater than 0",
  category: "Please select a category",
};

export default function ShoppingEditForm({
  onAddItem,
  setShowFormEdit,
  initialItem,
}) {
  const [name, setName] = useLocalStorageState("form-name", {
    defaultValue: initialItem.name || "",
  });
  const [quantity, setQuantity] = useLocalStorageState("form-quantity", {
    defaultValue: initialItem.quantity || "",
  });
  const [category, setCategory] = useLocalStorageState("form-category", {
    defaultValue: initialItem.category || "",
  });
  const [comment, setComment] = useLocalStorageState("form-comment", {
    defaultValue: initialItem.comment || "",
  });
  const [errors, setErrors] = useLocalStorageState("form-errors", {
    defaultValue: {},
  });

  function handleSubmit(event) {
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

  function handleCancel() {
    setShowFormEdit(false);
  }

  return (
    <StyledFormContainer>
      <StyledFormTitle>Edit Shopping Item</StyledFormTitle>
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
  );
}
