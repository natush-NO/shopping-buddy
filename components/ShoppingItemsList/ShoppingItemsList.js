import ShoppingItem from "../ShoppingItem/ShoppingItem";
import useLocalStorageState from "use-local-storage-state";
import {
  StyledContainerItemList,
  StyledContainerList,
  StyledBackwardsButton,
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

  function smoothScroll(targetId, duration) {
    const target = document.getElementById(targetId);
    if (!target) return;

    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + start - 250;
    const distance = end - start;
    let startTime = null;

    function scroll(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const easeInOut =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;

      window.scrollTo(0, start + distance * easeInOut);

      if (timeElapsed < duration) {
        requestAnimationFrame(scroll);
      } else {
        window.scrollTo(0, end);
      }
    }

    requestAnimationFrame(scroll);
  }

  function handleBackwardsButtonClick() {
    if (isPurchasedView) {
      smoothScroll("shopping-items", 2000);
    } else {
      smoothScroll("purchased-items", 2000);
    }
  }

  return (
    <StyledContainerItemList $isPurchasedView={isPurchasedView}>
      <StyledContainerList $isPurchasedView={isPurchasedView}>
        <StyledTitleItems
          id={isPurchasedView ? "purchased-items" : "shopping-items"}
        >
          {isPurchasedView
            ? `Purchased goods (${list.length})`
            : `Shopping List (${filteredItems.length})`}
        </StyledTitleItems>
        {!isListEmpty ? (
          <StyledBackwardsButton
            $isListEmpty={isListEmpty}
            $listPurchases={listPurchases}
            onClick={handleBackwardsButtonClick}
            role="button"
            aria-label={
              isPurchasedView
                ? "Back to shopping items"
                : "Go to purchased items"
            }
          >
            {isPurchasedView ? "Back to Top" : "Go to Purchased Items"}
          </StyledBackwardsButton>
        ) : null}
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
              <StyledEmptyMessageButton
                onClick={() => setShowForm(true)}
                aria-label="Add new items to the shopping list"
              >
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
