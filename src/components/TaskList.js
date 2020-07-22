import React, { useState } from "react";
// Data
import tasks from "../data";
// Components
import TaskItem from "./TaskItem";
import TaskModal from "../modals/TaskModal";
import AddButton from "../buttons/AddButton";

const TaskList = ({ createTask }) => {
  const taskList = tasks.map((task) => <TaskItem task={task} />);

  return (
    <div>
      {/* <button onClick={openModal}>Add</button> */}
      <AddButton />
      {taskList}
      <TaskModal createTask={createTask} />
    </div>
  );
};
export default TaskList;
