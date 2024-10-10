import categoryColor from "@/utils/categoryColor";
import {
  StyledItem,
  StyledItemLink,
  // StyledLinkArray,
  StyledItemImageWrapper,
  StyledItemImage,
  StyledItemTitle,
  StyledItemQuantityText,
  StyledItemCategoryText,
  StyledItemButtonDelete,
  StyledStatusWrapper,
  StyledStatusText,
  StyledStatusArray,
  StyledTogglePurchasedStatus,
} from "./StyledShoppingItem.js";

import ModalDelete from "../ModalDelete/ModalDelete.js";

export default function ShoppingItem({
  item,
  placeholder = "/images/placeholder_image.webp",
  handleDelete,
  isOpen,
  openModal,
  closeModal,
  onClose,
  togglePurchasedStatus,
  isPurchasedView,
  categoryStyle,
}) {
  const colorCategory = categoryColor(item.category);

  const handleClick = (event) => {
    if (isOpen || isPurchasedView) {
      event.preventDefault();
    }
  };

  function handleTogglePurchaseStatus(event) {
    event.preventDefault();
    togglePurchasedStatus(item.id);
  }

  return (
    <StyledItem $isPurchasedView={isPurchasedView}>
      <StyledItemLink
        href={`/items/${item.id}`}
        onClick={handleClick}
        $isPurchasedView={isPurchasedView}
        role="link"
        aria-label={`View details for ${item.name}`}
      >
        {/* <StyledLinkArray>&rarr;</StyledLinkArray> */}
        <StyledItemImageWrapper>
          <StyledItemImage
            src={item.imageUrl || placeholder}
            alt={item.name}
            fill
            sizes="150px"
            role="img"
            aria-label={item.name}
          />
        </StyledItemImageWrapper>
        <StyledItemTitle>{item.name}</StyledItemTitle>
        <StyledItemQuantityText>
          Quantity: {item.quantity}
        </StyledItemQuantityText>
        <StyledItemCategoryText
          $backgroundColor={colorCategory}
          $category={categoryStyle}
          aria-label={`Category: ${item.category}`}
        >
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
          $isPurchasedView={isPurchasedView}
          role="button"
          aria-label={`Delete ${item.name}`}
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
            role="dialog"
          />
        )}
        <StyledStatusWrapper>
          <StyledStatusText>
            {isPurchasedView ? "Unmark as Purchased" : "Mark as Purchased"}
          </StyledStatusText>
          <StyledStatusArray />
          <StyledTogglePurchasedStatus
            onClick={handleTogglePurchaseStatus}
            $isPurchasedView={isPurchasedView}
            role="button"
            aria-label={
              isPurchasedView ? "Unmark as Purchased" : "Mark as Purchased"
            }
          />
        </StyledStatusWrapper>
      </StyledItemLink>
    </StyledItem>
  );
}
