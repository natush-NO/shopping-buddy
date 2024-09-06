import GlobalStyle from "../styles";
import { useState } from "react";
import { initialShoppingList } from "@/lib/data";
import { uid } from "uid";
import sortShoppingListByCategory from "@/utils/sortShoppingListByCategory";
// import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [showForm, setShowForm] = useState(false);
  const [shoppingItems, setShoppingItems] = useState(initialShoppingList);

  const handleAddItem = (newItem) => {
    const newTaskObject = { ...newItem, id: uid() };
    setShoppingItems([newTaskObject, ...shoppingItems]);
  };

  // function handleConfirm(event, id) {
  //   event.preventDefault();
  //   setCurrentTasks(currentTasks.filter((task) => task.id !== id));
  //   router.push("/");
  // }

  // function toggleIsCompleted(id) {
  //   const task = currentTasks.find((task) => task.id === id);
  //   if (task) {
  //     setCurrentTasks(currentTasks.filter((task) => task.id !== id));
  //   }
  // }

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
        // handleConfirm={handleConfirm}
        // toggleIsCompleted={toggleIsCompleted}
      />
    </>
  );
}
