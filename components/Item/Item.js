import categoryColor from "@/utils/categoryColor";
import {
  StyledItem,
  StyledItemLink,
  StyledItemImageWrapper,
  StyledItemImage,
  StyledItemTitle,
  StyledItemCategoryText,
  StyledItemButtonDelete,
  StyledrStatusWrrepe,
  StyledrStatusText,
  StyledTogglePurchasedStatus,
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
  togglePurchasedStatus,
  isPurchasedView,
}) {
  const colorCategory = categoryColor(item.category);

  const handleClick = (event) => {
    if (isOpen || isPurchasedView) {
      event.preventDefault();
    }
  };

  const handleTogglePurchaseStatus = (event) => {
    event.preventDefault();
    togglePurchasedStatus(item.id);
  };

  return (
    <StyledItem $isPurchasedView={isPurchasedView}>
      <StyledItemLink href={`/items/${item.id}`} onClick={handleClick}>
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
            if (!isPurchasedView) {
              openModal(item.id);
            }
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

        <StyledrStatusWrrepe>
          <StyledrStatusText>
            {isPurchasedView
              ? "Move the item to the purchased list."
              : "Move the item back to the shopping list."}
          </StyledrStatusText>
          <StyledTogglePurchasedStatus
            onClick={handleTogglePurchaseStatus}
            $isPurchasedView={isPurchasedView}
          />
        </StyledrStatusWrrepe>
      </StyledItemLink>
    </StyledItem>
  );
}
