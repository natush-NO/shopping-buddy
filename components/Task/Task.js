//./components/Task/Task.js
// import Image from "next/image";
import categoryColor from "@/utils/categoryColor";
import {
  StyledItem,
  StyledImageWrapper,
  StyledImage,
  StyledTaskTitle,
  CategoryText,
} from "./StyledTask";

// export const StyledImage = styled(Image)`
//   object-fit: cover;
//   width: 100%;
//   height: 100%;
// `;

const placeholder = "/images/placeholder_image.webp";

export default function Task({ item }) {
  const colorCategory = categoryColor(item.category);

  return (
    <StyledItem>
      <StyledImageWrapper>
        <StyledImage
          src={item.imageUrl || placeholder}
          alt={item.name}
          fill
          sizes="150px"
        />
      </StyledImageWrapper>
      <StyledTaskTitle>{item.name}</StyledTaskTitle>
      <p>Quantity: {item.quantity}</p>
      <CategoryText $backgroundColor={colorCategory}>
        Category:
        <br /> {item.category}
      </CategoryText>
    </StyledItem>
  );
}
