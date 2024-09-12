import { StyledHeader, StyledTitleHeader, ToggleButton } from "./StyledHeader";

export default function Header({
  showForm,
  setShowForm,
  titleSize,
  paddingSize,
  isListEmpty,
}) {
  return (
    <StyledHeader $padding={paddingSize}>
      <StyledTitleHeader $fontSize={titleSize}>
        Shopping Buddy
      </StyledTitleHeader>
      {!showForm && !isListEmpty && (
        <ToggleButton onClick={() => setShowForm(!showForm)}>
          Add Item
        </ToggleButton>
      )}
    </StyledHeader>
  );
}
