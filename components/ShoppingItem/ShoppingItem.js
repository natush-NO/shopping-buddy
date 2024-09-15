import categoryColor from "@/utils/categoryColor";
import {
  StyledItem,
  StyledItemLink,
  StyledLinkArray,
  StyledItemImageWrapper,
  StyledItemImage,
  StyledItemTitle,
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
  deleteButton,
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
      >
        <StyledLinkArray>&rarr;</StyledLinkArray>
        <StyledItemImageWrapper>
          <StyledItemImage
            src={item.imageUrl || placeholder}
            alt={item.name}
            fill
            sizes="150px"
          />
        </StyledItemImageWrapper>
        <StyledItemTitle>{item.name}</StyledItemTitle>
        <h4>Quantity: {item.quantity}</h4>
        <StyledItemCategoryText
          $backgroundColor={colorCategory}
          $category={categoryStyle}
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
          $delete={deleteButton}
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
        <StyledStatusWrapper>
          <StyledStatusText>
            {isPurchasedView ? "Unmark as Purchased" : "Mark as Purchased"}
          </StyledStatusText>
          <StyledStatusArray />
          <StyledTogglePurchasedStatus
            onClick={handleTogglePurchaseStatus}
            $isPurchasedView={isPurchasedView}
          />
        </StyledStatusWrapper>
      </StyledItemLink>
    </StyledItem>
  );
}
