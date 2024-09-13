import Item from "../Item/Item";
import {
  StyledContainerList,
  StyledTitleItems,
  StyledItems,
  StyledEmptyMessage,
  StyledEmptyMessageText,
  StyledEmptyMessageButton,
} from "./StyledItemsList";

export default function ItemsList({
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
}) {
  const itemCount = list.length;

  return (
    <StyledContainerList $isPurchasedView={isPurchasedView}>
      <StyledTitleItems>
        {isPurchasedView
          ? `Purchased goods (${itemCount})`
          : `Shopping List (${itemCount})`}
      </StyledTitleItems>
      {isListEmpty ? (
        <StyledEmptyMessage>
          <StyledEmptyMessageText>
            No items in the shopping list.
          </StyledEmptyMessageText>
          <StyledEmptyMessageButton onClick={() => setShowForm(true)}>
            Add new items
          </StyledEmptyMessageButton>
        </StyledEmptyMessage>
      ) : listPurchases ? (
        <StyledEmptyMessage>
          <StyledEmptyMessageText>
            All purchases have been completed.
          </StyledEmptyMessageText>
          <StyledEmptyMessageButton onClick={() => setShowForm(true)}>
            Add new items
          </StyledEmptyMessageButton>
        </StyledEmptyMessage>
      ) : (
        <StyledItems>
          {list.map((item) => (
            <Item
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
  );
}
