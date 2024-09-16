const errorMessages = {
  name: "Name is required",
  quantity: "Quantity must be a number greater than 0",
  category: "Please select a category",
};

export default function handleSubmit(
  event,
  name,
  quantity,
  category,
  setErrors
) {
  event.preventDefault();
  let formErrors = {};

  if (!name) formErrors.name = errorMessages.name;
  if (!quantity || isNaN(quantity) || quantity <= 0)
    formErrors.quantity = errorMessages.quantity;
  if (!category) formErrors.category = errorMessages.category;

  setErrors(formErrors);

  return formErrors;
}
