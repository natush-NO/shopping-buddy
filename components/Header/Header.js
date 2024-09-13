import { StyledHeader, StyledTitleHeader, ToggleButton } from "./StyledHeader";

export default function Header({
  showForm,
  setShowForm,
  titleSize,
  paddingSize,
  isListEmpty,
  listPurchases,
}) {
  return (
    <StyledHeader $padding={paddingSize}>
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
