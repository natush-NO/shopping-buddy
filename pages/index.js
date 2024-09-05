import { useState } from "react";
import Header from "@/components/Header/Header";
import TaskList from "@/components/TaskList/TaskList";
import { initialShoppingList } from "@/lib/data";

export default function HomePage() {
  const [items, setItems] = useState(initialShoppingList);

  const handleAddItem = (newItem) => {
    setItems([newItem, ...items]);
  };

  return (
    <>
      <Header />
      <main>
        <TaskList items={items} onAddItem={handleAddItem} />
      </main>
    </>
  );
}
