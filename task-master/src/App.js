import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (name) => {
    const taskObj = {
      id: tasks.length + 1,
      name,
      completed: false,
    };
    const modifiedTasks = [...tasks, taskObj ];
    setTasks(modifiedTasks);
  };

  const deleteTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>Task Master</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
    </div>
  );
};

export default App;
