import Task from "../Task/Task";

import {
  StyledContainerList,
  StyledTitleItems,
  StyledItems,
} from "./StyledTaskList";

export default function TaskList({ list }) {
  return (
    <StyledContainerList>
      <StyledTitleItems>Shopping List</StyledTitleItems>
      <StyledItems>
        {list.map((item) => (
          <Task key={item.id} item={item} />
        ))}
      </StyledItems>
    </StyledContainerList>
  );
}
