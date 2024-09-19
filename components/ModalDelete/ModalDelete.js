import {
  StyledModalOverlay,
  StyledModalContent,
  StyledItemSureText,
  StyledConfirmButton,
  StyledCancelButton,
} from "./StyledModalDelete";

export default function ModalDelete({ isOpen, onConfirm, onClose }) {
  if (!isOpen) return null;

  return (
    <StyledModalOverlay>
      <StyledModalContent>
        <StyledItemSureText>
          Are you sure you want to delete this item?
        </StyledItemSureText>
        <StyledConfirmButton
          type="button"
          onClick={onConfirm}
          aria-label="Confirm deletion"
        >
          Yes
        </StyledConfirmButton>
        <StyledCancelButton
          type="button"
          onClick={onClose}
          aria-label="Cancel deletion"
        >
          Cancel
        </StyledCancelButton>
      </StyledModalContent>
    </StyledModalOverlay>
  );
}
