import {
  StyledModalOverlay,
  StyledModalContent,
  StyledConfirmButton,
  StyledCancelButton,
} from "./StyledModalDelete";

export default function ModalDelete({ isOpen, onConfirm, onClose }) {
  if (!isOpen) return null;

  return (
    <StyledModalOverlay>
      <StyledModalContent>
        <p>Are you sure you want to delete this item?</p>
        <StyledConfirmButton type="button" onClick={onConfirm}>
          Yes
        </StyledConfirmButton>
        <StyledCancelButton type="button" onClick={onClose}>
          Cancel
        </StyledCancelButton>
      </StyledModalContent>
    </StyledModalOverlay>
  );
}
