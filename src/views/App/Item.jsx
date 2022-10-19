import React from "react";

const Item = ({ task, deleteTask, completeTask }) => {
  return (
    <>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => completeTask(task.id, !task.done)}
      ></input>
      <label htmlFor={task.id}>{task.description}</label>
      <button onClick={() => deleteTask(task.id)}>❌</button>
      <br />
      <br />
    </>
  );
};

export default Item;
