import Header from "@/components/Header/Header";
import ItemsList from "@/components/ItemsList/ItemsList";
import ShoppingItemForm from "@/components/ShoppingItemForm/ShoppingItemForm";

export default function HomePage({
  sortedItem,
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
  completedPurchases,
  togglePurchasedStatus,
}) {
  return (
    <>
      <Header
        showForm={showForm}
        setShowForm={setShowForm}
        isListEmpty={isListEmpty}
      />
      <main>
        <ItemsList
          list={sortedItem}
          handleDelete={handleDelete}
          openModal={openModal}
          closeModal={closeModal}
          selectedItemId={selectedItemId}
          isListEmpty={isListEmpty}
          setShowForm={setShowForm}
          handleCancel={handleCancel}
          togglePurchasedStatus={togglePurchasedStatus}
          isPurchasedView={false}
        />
        <ItemsList
          list={completedPurchases}
          handleDelete={handleDelete}
          openModal={openModal}
          closeModal={closeModal}
          togglePurchasedStatus={togglePurchasedStatus}
          isPurchasedView={true}
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
