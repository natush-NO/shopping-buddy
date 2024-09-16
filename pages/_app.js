import GlobalStyle from "../styles";
// import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
import { useRouter } from "next/router";
import { initialShoppingList } from "@/lib/data";
import { uid } from "uid";
import sortShoppingListByCategory from "@/utils/sortShoppingListByCategory";

export default function App({ Component, pageProps }) {
  const [shoppingItems, setShoppingItems] = useState(initialShoppingList);

  const [showForm, setShowForm] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [completedPurchases, setCompletedPurchases] = useState([]);
  const [showFormEdit, setShowFormEdit] = useState(false);

  // const [shoppingItems, setShoppingItems] = useLocalStorageState(
  //   "shopping-items",
  //   {
  //     defaultValue: initialShoppingList,
  //   }
  // );

  // const [showForm, setShowForm] = useLocalStorageState("show-form", {
  //   defaultValue: false,
  // });

  // const [selectedItemId, setSelectedItemId] = useLocalStorageState(
  //   "selected-item-id",
  //   {
  //     defaultValue: null,
  //   }
  // );

  // const [completedPurchases, setCompletedPurchases] = useLocalStorageState(
  //   "completedPurchases",
  //   {
  //     defaultValue: [],
  //   }
  // );

  function handleAddItem(newItem) {
    const newTaskObject = { ...newItem, id: uid() };
    setShoppingItems([newTaskObject, ...shoppingItems]);
  }

  const router = useRouter();

  function handleDelete(id) {
    setShoppingItems(shoppingItems.filter((task) => task.id !== id));
    router.push("/");
  }

  function handleCancel() {
    setSelectedItemId(null);
    router.push("/");
  }

  function openModal(id) {
    setSelectedItemId(id);
  }

  function closeModal() {
    setSelectedItemId(null);
  }

  function togglePurchasedStatus(id) {
    const itemToToggle = shoppingItems.find((item) => item.id === id);

    if (itemToToggle) {
      if (!itemToToggle.initialIndex && itemToToggle.initialIndex !== 0) {
        const itemIndex = shoppingItems.findIndex((item) => item.id === id);
        itemToToggle.initialIndex = itemIndex;
      }

      const filteredShoppingItems = shoppingItems.filter(
        (item) => item.id !== id
      );
      setShoppingItems(filteredShoppingItems);
      setCompletedPurchases([itemToToggle, ...completedPurchases]);
    } else {
      const itemToMoveBack = completedPurchases.find((item) => item.id === id);
      const filteredCompletedPurchases = completedPurchases.filter(
        (item) => item.id !== id
      );
      setCompletedPurchases(filteredCompletedPurchases);

      const updatedShoppingItems = [...shoppingItems];
      updatedShoppingItems.splice(
        itemToMoveBack.initialIndex,
        0,
        itemToMoveBack
      );

      setShoppingItems(updatedShoppingItems);
    }
  }

  function handleEditItem(updatedItem) {
    setShoppingItems((prevItems) =>
      prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setShowFormEdit(false);
  }

  const sortedItem = sortShoppingListByCategory(shoppingItems);
  const placeholder = "/images/placeholder_image.webp";
  const isListEmpty =
    shoppingItems.length === 0 && completedPurchases.length === 0;
  const listPurchases =
    shoppingItems.length === 0 && completedPurchases.length > 0;

  return (
    <>
      <GlobalStyle marginSize="0  0 100px 0" />
      <Component
        {...pageProps}
        sortedItem={sortedItem}
        handleAddItem={handleAddItem}
        showForm={showForm}
        setShowForm={setShowForm}
        placeholder={placeholder}
        handleDelete={handleDelete}
        selectedItemId={selectedItemId}
        openModal={openModal}
        closeModal={closeModal}
        isListEmpty={isListEmpty}
        listPurchases={listPurchases}
        handleCancel={handleCancel}
        shoppingItems={shoppingItems}
        completedPurchases={completedPurchases}
        isPurchasedView={false}
        togglePurchasedStatus={togglePurchasedStatus}
        showFormEdit={showFormEdit}
        setShowFormEdit={setShowFormEdit}
        handleEditItem={handleEditItem}
      />
    </>
  );
}
