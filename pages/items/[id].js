import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";
import {
  StyledContainer,
  StyledTitle,
  StyledImageContainer,
  StyledImage,
  StyledParagraph,
  StyledLabel,
  StyledValue,
  StyledEditButton,
  StyledBackLink,
} from "@/components/ShoppingItemDetails/StyledShoppingItemDetails";
import Header from "@/components/Header/Header";
import ModalImageDetails from "@/components/ShoppingItemDetails/ModalShoppingItemDetails/ModalShoppingItemDetails";
import ShoppingEditItemForm from "@/components/ShoppingForms/ShoppingEditItemForm";

export default function ShoppingItemDetails({
  sortedItem,
  placeholder = "/images/placeholder_image.webp",
  showFormEdit,
  setShowFormEdit,
  handleEditItem,
  errors,
  setErrors,
}) {
  const router = useRouter();
  const { id } = router.query;
  const [isModalOpen, setIsModalOpen] = useLocalStorageState("is-modal-open", {
    defaultValue: false,
  });

  const item = sortedItem.find((item) => item.id === id);

  function retrieveProductData() {
    if (item) {
      setIsModalOpen(true);
    }
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  if (!item) return <p>Item not found</p>;

  return (
    <>
      <Header showForm={true} $paddingSize="20px 0" $titleSize="50px" />
      {isModalOpen && (
        <ModalImageDetails
          imageUrl={item.imageUrl}
          altName={item.name}
          onClose={closeModal}
          placeholder={placeholder}
        />
      )}
      <StyledContainer>
        <StyledTitle>{item.name}</StyledTitle>
        <StyledImageContainer onClick={retrieveProductData}>
          <StyledImage
            src={item.imageUrl ? item.imageUrl : placeholder}
            alt={item.name}
            width={1000}
            height={800}
            priority
          />
        </StyledImageContainer>
        <StyledParagraph>
          <StyledLabel>Quantity:</StyledLabel>{" "}
          <StyledValue>{item.quantity}</StyledValue>
        </StyledParagraph>
        <StyledParagraph>
          <StyledLabel>Category:</StyledLabel>{" "}
          <StyledValue>{item.category}</StyledValue>
        </StyledParagraph>
        <StyledParagraph>
          <StyledLabel>Comments:</StyledLabel>{" "}
          <StyledValue>{item.comment}</StyledValue>
        </StyledParagraph>
        {showFormEdit ? (
          <ShoppingEditItemForm
            onAddItem={handleEditItem}
            setShowFormEdit={setShowFormEdit}
            initialItem={item}
            errors={errors}
            setErrors={setErrors}
          />
        ) : (
          <StyledEditButton onClick={() => setShowFormEdit(true)}>
            Edit
          </StyledEditButton>
        )}

        <StyledBackLink href="/">Back to Shopping List</StyledBackLink>
      </StyledContainer>
    </>
  );
}
