import {
  ShoppingFilterContainer,
  StyledSelectFilter,
  StyledOptionFilter,
  ShoppingFilterButton,
} from "./StyledShoppingFilterByCategory";
import categories from "@/utils/categories.json";

export default function ShoppingFilterByCategory({
  selectedCategory,
  handleCategoryChange,
  handleClearFilter,
}) {
  return (
    <ShoppingFilterContainer>
      <StyledSelectFilter
        value={selectedCategory}
        onChange={(event) => handleCategoryChange(event.target.value)}
      >
        <StyledOptionFilter value="">All Categories</StyledOptionFilter>
        {categories.map((category) => (
          <StyledOptionFilter key={category} value={category}>
            {category}
          </StyledOptionFilter>
        ))}
      </StyledSelectFilter>
      {selectedCategory && (
        <ShoppingFilterButton onClick={handleClearFilter}>
          Remove Filter
        </ShoppingFilterButton>
      )}
    </ShoppingFilterContainer>
  );
}
