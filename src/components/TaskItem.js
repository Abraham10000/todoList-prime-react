import React from 'react';
import { Button } from 'primereact/button';

const TaskItem = ({ task, onRemoveTask, onToggleTask }) => {
  return (
    <div className="task-item">
      <p>{task.task}</p>
      <div className="task-buttons">
        <Button
          icon="pi pi-check"
          className="p-button-success"
          onClick={onToggleTask}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-danger"
          onClick={onRemoveTask}
        />
      </div>
    </div>
  );
};

export default TaskItem;
