import Header from "@/components/Header/Header";
import TaskList from "@/components/TaskList/TaskList";
import ShoppingItemForm from "@/components/ShoppingItemForm/ShoppingItemForm";

export default function HomePage({
  sortedTasks,
  handleAddItem,
  showForm,
  setShowForm,
  placeholder,
}) {
  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      <main>
        <TaskList list={sortedTasks} />
        {showForm && (
          <ShoppingItemForm
            onAddItem={handleAddItem}
            setShowForm={setShowForm}
            placeholder={placeholder}
          />
        )}
      </main>
    </>
  );
}
