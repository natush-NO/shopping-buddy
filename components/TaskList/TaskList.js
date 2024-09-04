import { initialShoppingList } from "@/lib/data";
import Task from "../Task/Task";
import styled from "styled-components";

const StyledContainerList = styled.div`
  max-width: 2000px;
  padding: 0 15px;
  margin: 0 auto;
`;

const StyledtitleItems = styled.h2`
  font-size: 38px;
  font-weight: 600;
  color: #4a4a4a;
  text-align: center;
  margin-bottom: 70px;
`;

const StyledItems = styled.ul`
  font-size: 18px;
  font-weight: 600;
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-template-rows: repeat(auto-fill, 400px);
  gap: 70px 35px;
  justify-content: center;
`;

function sortShoppingListByCategory(array) {
  return array.sort((a, b) => a.category.localeCompare(b.category));
}

export default function TaskList() {
  const sortedShoppingList = sortShoppingListByCategory(initialShoppingList);

  return (
    <StyledContainerList>
      <StyledtitleItems>Shopping List</StyledtitleItems>
      <StyledItems>
        {sortedShoppingList.map((item) => (
          <Task key={item.id} item={item} />
        ))}
      </StyledItems>
    </StyledContainerList>
  );
}
