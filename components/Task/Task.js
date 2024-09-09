import categoryColor from "@/utils/categoryColor";
import {
  StyledLink,
  StyledItem,
  StyledImageWrapper,
  StyledImage,
  StyledTaskTitle,
  CategoryText,
} from "./StyledTask";

export default function Task({
  item,
  placeholder = "/images/placeholder_image.webp",
}) {
  const colorCategory = categoryColor(item.category);

  return (
    <StyledItem>
      <StyledLink href={`/items/${item.id}`}>
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
      </StyledLink>
    </StyledItem>
  );
}
