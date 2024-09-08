import React from 'react';
import PropTypes from "prop-types";

const TaskItem = ({ key, task, onToggleComplete, onDelete }) => {
  return (
    <li key={key}>
      <span 
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={() => onToggleComplete(task.id)}
      >
        {task.name}
      </span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};

TaskItem.propTypes = {
    task: PropTypes.object,
    onToggleComplete: PropTypes.func,
    onDelete: PropTypes.func,
  };

export default TaskItem;
