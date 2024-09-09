import GlobalStyle from "../styles";
import { useState } from "react";
import { initialShoppingList } from "@/lib/data";
import { uid } from "uid";
import sortShoppingListByCategory from "@/utils/sortShoppingListByCategory";

export default function App({ Component, pageProps }) {
  const [showForm, setShowForm] = useState(false);
  const [shoppingItems, setShoppingItems] = useState(initialShoppingList);

  const handleAddItem = (newItem) => {
    const newTaskObject = { ...newItem, id: uid() };
    setShoppingItems([newTaskObject, ...shoppingItems]);
  };

  const sortedTasks = sortShoppingListByCategory(shoppingItems);
  const placeholder = "/images/placeholder_image.webp";

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
      />
    </>
  );
}
