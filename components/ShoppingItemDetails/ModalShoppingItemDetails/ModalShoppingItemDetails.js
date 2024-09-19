import {
  StyledOverlay,
  StyledModalContent,
  StyledCloseButton,
  StyledModalImage,
} from "./StyledModalShoppingItemDetails";

export default function ModalImageDetails({
  imageUrl,
  altName,
  onClose,
  placeholder,
}) {
  return (
    <StyledOverlay>
      <StyledModalContent
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <StyledCloseButton onClick={onClose}>&times;</StyledCloseButton>
        <StyledModalImage
          src={imageUrl ? imageUrl : placeholder}
          alt={altName ? altName : "Image"}
          width={1200}
          height={800}
          priority
        />
      </StyledModalContent>
    </StyledOverlay>
  );
}
