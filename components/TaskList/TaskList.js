import Task from "../Task/Task";

import {
  StyledContainerList,
  StyledTitleItems,
  StyledItems,
} from "./StyledTaskList";

export default function TaskList({ currentTasks }) {
  return (
    <StyledContainerList>
      <StyledTitleItems>Shopping List</StyledTitleItems>
      <StyledItems>
        {currentTasks.map((item) => (
          <Task key={item.id} item={item} />
        ))}
      </StyledItems>
    </StyledContainerList>
  );
}
