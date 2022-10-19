import React, { useState } from "react";

const NewTask = ({ addTask }) => {
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div>
      <form onSubmit={(e) => addTask(e, description)}>
        <label>Add task: </label>
        <input value={description} onChange={handleChange} />
        <button type="submit">➕</button>
      </form>
    </div>
  );
};

export default NewTask;
