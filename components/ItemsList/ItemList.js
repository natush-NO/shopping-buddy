import Item from "../Item/Item";

import {
  StyledContainerList,
  StyledTitleItems,
  StyledItems,
  StyledEmptyMessage,
  StyledEmptyMessageText,
  StyledEmptyMessageButton,
} from "./StyledItemsList";

export default function ItemList({
  list,
  handleDelete,
  openModal,
  closeModal,
  selectedItemId,
  isListEmpty,
  setShowForm,
  handleCancel,
}) {
  return (
    <StyledContainerList>
      <StyledTitleItems>Shopping List</StyledTitleItems>
      {isListEmpty ? (
        <StyledEmptyMessage>
          <StyledEmptyMessageText>
            No items in the shopping list.
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
            />
          ))}
        </StyledItems>
      )}
    </StyledContainerList>
  );
}
