import React, { useState } from "react";
import Modal from "react-modal";

const TaskModal = ({ createTask, closeModal, isOpen }) => {
  const [task, setTask] = useState({
    task: "",
  });

  const handleChange = (event) => {
    setTask({ ...task, [event.target.task]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createTask(task);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Task Modal"
    >
      <div>
        <h3>New Task</h3>
        <form onSubmit={handleSubmit}>
          <label>Task Name</label>
          <br />
          <input type="text" onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </Modal>
  );
};

export default TaskModal;
