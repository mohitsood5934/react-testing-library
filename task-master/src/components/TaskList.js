import React from "react";
import TaskItem from "./TaskItem";
import PropTypes from "prop-types";

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={toggleTask}
          onDelete={deleteTask}
        />
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  toggleTask: PropTypes.func,
  deleteTask: PropTypes.func,
};

export default TaskList;
