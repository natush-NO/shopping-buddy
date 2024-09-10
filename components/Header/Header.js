import { StyledHeader, StyledTitleHeader, ToggleButton } from "./StyledHeader";

export default function Header({ showForm, setShowForm }) {
  return (
    <StyledHeader>
      <StyledTitleHeader>Shopping Buddy</StyledTitleHeader>
      <ToggleButton $showForm={showForm} onClick={() => setShowForm(!showForm)}>
        Add Item
      </ToggleButton>
    </StyledHeader>
  );
}
