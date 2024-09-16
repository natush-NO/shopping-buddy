import { useEffect } from "react";
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
import ShoppingEditForm from "@/components/ShoppingEditForm/ShoppingEditForm";

export default function ShoppingItemDetails({
  sortedItem,
  placeholder,
  showFormEdit,
  setShowFormEdit,
  handleEditItem,
}) {
  const router = useRouter();
  const { id } = router.query;
  const [isModalOpen, setIsModalOpen] = useLocalStorageState("is-modal-open", {
    defaultValue: false,
  });

  const [itemName, setItemName] = useLocalStorageState("modal-item-name", {
    defaultValue: "",
  });
  const [imageSrc, setImageSrc] = useLocalStorageState("modal-image-src", {
    defaultValue: "",
  });

  const [quantity, setQuantity] = useLocalStorageState("quantity", {
    defaultValue: "",
  });

  const [category, setCategory] = useLocalStorageState("category", {
    defaultValue: "",
  });

  const [comment, setComment] = useLocalStorageState("comment", {
    defaultValue: "",
  });

  const item = sortedItem.find((item) => item.id === id);

  useEffect(() => {
    if (item) {
      setItemName(item.name);
      setQuantity(item.quantity);
      setCategory(item.category);
      setComment(item.comment);
    }
  }, [item]);

  function retrieveProductData() {
    if (item) {
      setItemName(item.name);
      setImageSrc(item.imageUrl);
      setQuantity(item.quantity);
      setCategory(item.category);
      setComment(item.comment);
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
          imageSrc={imageSrc}
          itemName={itemName}
          onClose={closeModal}
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
          <ShoppingEditForm
            onAddItem={handleEditItem}
            setShowFormEdit={setShowFormEdit}
            initialItem={item}
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
