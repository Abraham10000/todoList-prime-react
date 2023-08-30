import React from 'react';

const TaskItem = ({ task, onRemoveTask, onToggleTask }) => {
  return (
    <div className="task-item">
      <label>
        <input type="checkbox" onChange={onToggleTask} />
        {task}
      </label>
      <button onClick={onRemoveTask}><i className="fa fa-trash"></i></button>
    </div>
  );
};

export default TaskItem;
