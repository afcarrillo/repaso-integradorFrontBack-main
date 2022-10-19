import React, { useEffect, useState } from "react";
import axios from "axios";

import NewTask from "./NewTask";
import Item from "./Item";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/tasks")
      .then((response) => response.data)
      .then((data) => setTasks(data));
  }, []);

  const fetchTasks = () => {
    return axios
      .get("http://localhost:1337/api/tasks")
      .then((response) => response.data)
      .then((data) => setTasks(data));
  };

  const addTask = (e, description) => {
    e.preventDefault();
    axios
      .post("http://localhost:1337/api/tasks", { description })
      .then((res) => res.data)
      .then(() => fetchTasks());
  };

  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:1337/api/tasks/${id}`)
      .then(() => fetchTasks());
  };

  const completeTask = (id, done) => {
    axios
      .put(`http://localhost:1337/api/tasks/${id}`, { done })
      .then(() => fetchTasks());
  };

  return (
    <div>
      <h1>TO-DO LIST</h1>
      {tasks
        ? tasks.map((task) => (
            <Item
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          ))
        : ""}
      <br />
      <NewTask addTask={addTask} />
    </div>
  );
};

export default App;
