import {
  StyledOverlay,
  StyledModalContent,
  StyledCloseButton,
  StyledModalImage,
} from "./StyledModalShoppingItemDetails";

const ModalImageDetails = ({
  itemName,
  imageSrc,
  onClose,
  placeholder = "/images/placeholder_image.webp",
}) => {
  return (
    <StyledOverlay onClick={onClose}>
      <StyledModalContent onClick={(event) => event.stopPropagation()}>
        <StyledCloseButton onClick={onClose}>&times;</StyledCloseButton>
        <StyledModalImage
          src={imageSrc ? imageSrc : placeholder}
          alt={itemName ? itemName : "Image"}
          width={1200}
          height={800}
        />
      </StyledModalContent>
    </StyledOverlay>
  );
};

export default ModalImageDetails;
