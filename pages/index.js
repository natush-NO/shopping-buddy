import Header from "@/components/Header/Header";
import ShoppingItemsList from "@/components/ShoppingItemsList/ShoppingItemsList";
import ShoppingItemForm from "@/components/ShoppingItemForm/ShoppingItemForm";
import ShoppingItemDetails from "./items/[id]";

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
  listPurchases,
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
        listPurchases={listPurchases}
      />
      <main>
        <ShoppingItemsList
          list={sortedItem}
          handleDelete={handleDelete}
          openModal={openModal}
          closeModal={closeModal}
          selectedItemId={selectedItemId}
          isListEmpty={isListEmpty}
          listPurchases={listPurchases}
          setShowForm={setShowForm}
          handleCancel={handleCancel}
          togglePurchasedStatus={togglePurchasedStatus}
          isPurchasedView={false}
        />
        <ShoppingItemsList
          list={completedPurchases}
          handleDelete={null}
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
