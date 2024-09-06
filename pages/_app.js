import GlobalStyle from "../styles";
import { useState } from "react";
import { initialShoppingList } from "@/lib/data";
import { uid } from "uid";
import sortShoppingListByCategory from "@/utils/sortShoppingListByCategory";

export default function App({ Component, pageProps }) {
  const [showForm, setShowForm] = useState(false);
  const [currentTasks, setCurrentTasks] = useState(initialShoppingList);

  function onCreateTask(taskData) {
    const newTaskObject = { ...taskData, id: uid() };
    console.log("New task:", newTaskObject);
    setCurrentTasks((prevTasks) => [newTaskObject, ...prevTasks]);
  }

  const handleAddItem = (newItem) => {
    setCurrentTasks([newItem, ...currentTasks]);
  };

  const sortedTasks = sortShoppingListByCategory(currentTasks);

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        currentTasks={sortedTasks}
        onCreateTask={onCreateTask}
        handleAddItem={handleAddItem}
        showForm={showForm}
        setShowForm={setShowForm}
      />
    </>
  );
}
