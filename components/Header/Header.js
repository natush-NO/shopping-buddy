import { StyledHeader, StyledTitleHeader, ToggleButton } from "./StyledHeader";

export default function Header({
  showForm,
  setShowForm,
  titleSize,
  paddingSizeHeader,
  isListEmpty,
  listPurchases,
}) {
  return (
    <StyledHeader $paddingHeader={paddingSizeHeader}>
      <StyledTitleHeader $fontSize={titleSize}>
        Shopping Buddy
      </StyledTitleHeader>
      {!showForm && !isListEmpty && !listPurchases && (
        <ToggleButton onClick={() => setShowForm(!showForm)}>
          Add Item
        </ToggleButton>
      )}
    </StyledHeader>
  );
}
