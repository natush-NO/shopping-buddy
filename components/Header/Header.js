import { StyledHeader, StyledTitleHeader, ToggleButton } from "./StyledHeader";

export default function Header({
  showForm,
  setShowForm,
  titleSize,
  paddingSizeHeader,
  paddingSizeButton,
  isListEmpty,
  listPurchases,
}) {
  return (
    <StyledHeader $paddingHeader={paddingSizeHeader}>
      <StyledTitleHeader $fontSize={titleSize}>
        Shopping Buddy
      </StyledTitleHeader>
      {!showForm && !isListEmpty && !listPurchases && (
        <ToggleButton
          onClick={() => setShowForm(!showForm)}
          $paddingButton={paddingSizeButton}
        >
          Add Item
        </ToggleButton>
      )}
    </StyledHeader>
  );
}
