import React, { useState } from "react";

import TaskList from "./components/TaskList";
// Data
import tasks from "./data";

function App() {
  const [setTask] = useState(null);
  const [_tasks, setTasks] = useState(tasks);
  const createTask = (newTask) => {
    // const updatedTasks = tasks;
    // updatedTasks.push(newTask);
    // setTask(updatedTasks);
    setTask([..._tasks, newTask]);
  };

  return (
    <div>
      <TaskList createTask={createTask} />
    </div>
  );
}

export default App;
