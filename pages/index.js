import Header from "@/components/Header/Header";
import TaskList from "@/components/TaskList/TaskList";
import ShoppingItemForm from "@/components/ShoppingItemForm/ShoppingItemForm";

export default function HomePage({
  currentTasks,
  onCreateTask,
  handleAddItem,
  showForm,
  setShowForm,
}) {
  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      <main>
        <TaskList
          currentTasks={currentTasks}
          onCreateTask={onCreateTask}
          showForm={showForm}
          setShowForm={setShowForm}
        />
        {showForm && (
          <ShoppingItemForm
            onAddItem={handleAddItem}
            setShowForm={setShowForm}
          />
        )}
      </main>
    </>
  );
}
