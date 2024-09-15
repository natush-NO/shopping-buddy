import ShoppingItem from "../ShoppingItem/ShoppingItem";
import {
  StyledContainerItemList,
  StyledContainerList,
  StyledTitleItems,
  StyledItems,
  StyledEmptyMessage,
  StyledEmptyMessageText,
  StyledEmptyMessageButton,
} from "./StyledShoppingItemsList";

export default function ShoppingItemsList({
  list,
  handleDelete,
  openModal,
  closeModal,
  selectedItemId,
  isListEmpty,
  listPurchases,
  setShowForm,
  handleCancel,
  togglePurchasedStatus,
  isPurchasedView = false,
  fontSizeTitle,
}) {
  const itemCount = list.length;

  return (
    <StyledContainerItemList $isPurchasedView={isPurchasedView}>
      <StyledContainerList $isPurchasedView={isPurchasedView}>
        <StyledTitleItems $fontSize={fontSizeTitle}>
          {isPurchasedView
            ? `Purchased goods (${itemCount})`
            : `Shopping List (${itemCount})`}
        </StyledTitleItems>
        {isListEmpty || listPurchases ? (
          <StyledEmptyMessage>
            <StyledEmptyMessageText>
              {isListEmpty
                ? "No items in the shopping list."
                : "All purchases have been completed."}
            </StyledEmptyMessageText>
            <StyledEmptyMessageButton onClick={() => setShowForm(true)}>
              Add new items
            </StyledEmptyMessageButton>
          </StyledEmptyMessage>
        ) : (
          <StyledItems>
            {list.map((item) => (
              <ShoppingItem
                key={item.id}
                item={item}
                handleDelete={handleDelete}
                openModal={openModal}
                closeModal={closeModal}
                isOpen={selectedItemId === item.id}
                onClose={handleCancel}
                togglePurchasedStatus={togglePurchasedStatus}
                isPurchasedView={isPurchasedView}
              />
            ))}
          </StyledItems>
        )}
      </StyledContainerList>
    </StyledContainerItemList>
  );
}
