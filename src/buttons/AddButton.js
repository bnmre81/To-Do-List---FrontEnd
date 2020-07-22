import React, { useState } from "react";
import TaskModal from "../modals/TaskModal";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <>
      <button onClick={openModal}>Add</button>
      <TaskModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddButton;
