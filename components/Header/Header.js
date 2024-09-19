import {
  StyledHeader,
  StyledTitleHeader,
  StyledToggleButton,
} from "./StyledHeader";

export default function Header({
  showForm,
  setShowForm,
  isListEmpty,
  listPurchases,
}) {
  return (
    <StyledHeader>
      <StyledTitleHeader>Shopping Buddy</StyledTitleHeader>
      {!showForm && !isListEmpty && !listPurchases && (
        <StyledToggleButton
          onClick={() => setShowForm(!showForm)}
          aria-label="Add item to list"
          role="button"
        >
          Add Item
        </StyledToggleButton>
      )}
    </StyledHeader>
  );
}
