import Header from "@/components/Header/Header";
import ItemList from "@/components/ItemsList/ItemList";
import ShoppingItemForm from "@/components/ShoppingItemForm/ShoppingItemForm";

export default function HomePage({
  sortedTasks,
  handleAddItem,
  showForm,
  setShowForm,
  placeholder,
  handleDelete,
  selectedItemId,
  openModal,
  closeModal,
  isListEmpty,
  handleCancel,
}) {
  return (
    <>
      <Header
        showForm={showForm}
        setShowForm={setShowForm}
        isListEmpty={isListEmpty}
      />
      <main>
        <ItemList
          list={sortedTasks}
          handleDelete={handleDelete}
          openModal={openModal}
          closeModal={closeModal}
          selectedItemId={selectedItemId}
          isListEmpty={isListEmpty}
          setShowForm={setShowForm}
          handleCancel={handleCancel}
        />
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
