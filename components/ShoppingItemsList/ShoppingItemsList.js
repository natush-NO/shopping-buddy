import ShoppingItem from "../ShoppingItem/ShoppingItem";
import useLocalStorageState from "use-local-storage-state";
import {
  StyledContainerItemList,
  StyledContainerList,
  StyledTitleItems,
  StyledItems,
  StyledEmptyMessage,
  StyledEmptyMessageText,
  StyledEmptyMessageButton,
} from "./StyledShoppingItemsList";
import ShoppingFilterByCategory from "../ShoppingFilterByCategory/ShoppingFilterByCategory";

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
  const [selectedCategory, setSelectedCategory] = useLocalStorageState(
    "selectedCategory",
    ""
  );

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleClearFilter() {
    setSelectedCategory("");
  }

  const filteredItems =
    !isPurchasedView && selectedCategory
      ? list.filter((item) => item.category === selectedCategory)
      : list;

  const noItemsFound = !isPurchasedView && filteredItems.length === 0;

  return (
    <StyledContainerItemList $isPurchasedView={isPurchasedView}>
      <StyledContainerList $isPurchasedView={isPurchasedView}>
        <StyledTitleItems $fontSize={fontSizeTitle}>
          {isPurchasedView
            ? `Purchased goods (${list.length})`
            : `Shopping List (${filteredItems.length})`}
        </StyledTitleItems>
        {!isPurchasedView && !listPurchases && !isListEmpty && (
          <ShoppingFilterByCategory
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            handleCategoryChange={handleCategoryChange}
            handleClearFilter={handleClearFilter}
          />
        )}

        {isListEmpty || listPurchases || noItemsFound ? (
          <StyledEmptyMessage>
            <StyledEmptyMessageText>
              {isListEmpty
                ? "No items in the shopping list."
                : listPurchases
                ? "All purchases have been completed."
                : "No items found with the selected filter."}
            </StyledEmptyMessageText>
            {isListEmpty || !noItemsFound || listPurchases ? (
              <StyledEmptyMessageButton onClick={() => setShowForm(true)}>
                Add new items
              </StyledEmptyMessageButton>
            ) : null}
          </StyledEmptyMessage>
        ) : (
          <StyledItems>
            {filteredItems.map((item) => (
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
