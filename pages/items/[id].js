import { useState } from "react";
import { useRouter } from "next/router";
import {
  StyledContainer,
  StyledTitle,
  StyledImageContainer,
  StyledImage,
  StyledParagraph,
  StyledLabel,
  StyledValue,
  StyledBackLink,
} from "@/components/ShoppingItemDetails/StyledShoppingItemDetails";
import Header from "@/components/Header/Header";
import ModalImageDetails from "@/components/ShoppingItemDetails/ModalShoppingItemDetails/ModalShoppingItemDetails";

export default function ShoppingItemDetails({ sortedTasks, placeholder }) {
  const router = useRouter();
  const { id } = router.query;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalItemName, setModalItemName] = useState("");

  const item = sortedTasks.find((item) => item.id === id);

  const handleImageClick = () => {
    setModalImageSrc(item.imageUrl);
    setModalItemName(item.name);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!item) return <p>Item not found</p>;

  return (
    <>
      <Header $paddingSize="20px 0" $titleSize="50px" />
      {isModalOpen && (
        <ModalImageDetails
          imageSrc={modalImageSrc}
          itemName={modalItemName}
          onClose={closeModal}
        />
      )}
      <StyledContainer>
        <StyledTitle>{item.name}</StyledTitle>
        <StyledImageContainer onClick={handleImageClick}>
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
        <StyledBackLink href="/">Back to Shopping List</StyledBackLink>
      </StyledContainer>
    </>
  );
}
