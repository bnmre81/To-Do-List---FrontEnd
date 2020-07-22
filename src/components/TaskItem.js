import React from "react";
// Data
import tasks from "../data";

const TaskItem = (props) => {
  return (
    <div>
      <h1>{props.task.name}</h1>
    </div>
  );
};
export default TaskItem;
