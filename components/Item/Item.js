import categoryColor from "@/utils/categoryColor";
import {
  StyledItem,
  StyledItemLink,
  StyledItemImageWrapper,
  StyledItemImage,
  StyledItemTitle,
  StyledItemCategoryText,
  StyledItemButtonDelete,
} from "./StyledItem.js";
import ModalDelete from "../ModalDelete/ModalDelete.js";

export default function Item({
  item,
  placeholder = "/images/placeholder_image.webp",
  handleDelete,
  isOpen,
  openModal,
  closeModal,
  onClose,
}) {
  const colorCategory = categoryColor(item.category);

  const handleLinkClick = (event) => {
    if (isOpen) {
      event.preventDefault();
    }
  };

  return (
    <StyledItem>
      <StyledItemLink href={`/items/${item.id}`} onClick={handleLinkClick}>
        <StyledItemImageWrapper>
          <StyledItemImage
            src={item.imageUrl || placeholder}
            alt={item.name}
            fill
            sizes="150px"
          />
        </StyledItemImageWrapper>
        <StyledItemTitle>{item.name}</StyledItemTitle>
        <p>Quantity: {item.quantity}</p>
        <StyledItemCategoryText $backgroundColor={colorCategory}>
          Category:
          <br /> {item.category}
        </StyledItemCategoryText>
        <StyledItemButtonDelete
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            openModal(item.id);
          }}
        >
          Delete
        </StyledItemButtonDelete>
        {isOpen && (
          <ModalDelete
            isOpen={isOpen}
            onConfirm={() => {
              handleDelete(item.id);
              closeModal();
            }}
            onClose={() => {
              closeModal();
              onClose();
            }}
          >
            <p>Are you sure you want to delete this item?</p>
          </ModalDelete>
        )}
      </StyledItemLink>
    </StyledItem>
  );
}
