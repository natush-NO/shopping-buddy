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

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        sortedTasks={sortedTasks}
        handleAddItem={handleAddItem}
        showForm={showForm}
        setShowForm={setShowForm}
      />
    </>
  );
}
