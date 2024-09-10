import { StyledHeader, StyledTitleHeader, ToggleButton } from "./StyledHeader";

export default function Header({
  showForm,
  setShowForm,
  titleSize,
  paddingSize,
}) {
  return (
    <StyledHeader $padding={paddingSize}>
      <StyledTitleHeader $fontSize={titleSize}>
        Shopping Buddy
      </StyledTitleHeader>
      {!showForm && (
        <ToggleButton
          $showForm={showForm}
          onClick={() => setShowForm(!showForm)}
        >
          Add Item
        </ToggleButton>
      )}
    </StyledHeader>
  );
}
