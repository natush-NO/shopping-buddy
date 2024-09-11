import GlobalStyle from "../styles";
import { useState } from "react";
import { initialShoppingList } from "@/lib/data";
import { uid } from "uid";
import sortShoppingListByCategory from "@/utils/sortShoppingListByCategory";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [showForm, setShowForm] = useState(false);
  const [shoppingItems, setShoppingItems] = useState(initialShoppingList);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleAddItem = (newItem) => {
    const newTaskObject = { ...newItem, id: uid() };
    setShoppingItems([newTaskObject, ...shoppingItems]);
  };

  const router = useRouter();

  function handleDelete(id) {
    setShoppingItems(shoppingItems.filter((task) => task.id !== id));
    router.push("/");
  }

  const handleCancel = () => {
    setSelectedItemId(null);
    router.push("/");
  };

  function openModal(id) {
    setSelectedItemId(id);
  }

  function closeModal() {
    setSelectedItemId(null);
  }

  const sortedTasks = sortShoppingListByCategory(shoppingItems);
  const placeholder = "/images/placeholder_image.webp";
  const isListEmpty = shoppingItems.length === 0;

  return (
    <>
      <GlobalStyle marginSize="0  0 100px 0" />
      <Component
        {...pageProps}
        sortedTasks={sortedTasks}
        handleAddItem={handleAddItem}
        showForm={showForm}
        setShowForm={setShowForm}
        placeholder={placeholder}
        handleDelete={handleDelete}
        selectedItemId={selectedItemId}
        openModal={openModal}
        closeModal={closeModal}
        isListEmpty={isListEmpty}
        handleCancel={handleCancel}
      />
    </>
  );
}
