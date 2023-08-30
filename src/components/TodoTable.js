import React from 'react';
import TaskItem from './TaskItem';

const TodoTable = ({ title, tasks, onRemoveTask, onToggleTask }) => {
  return (
    <div className="todo-table column-layout">
      <h2>{title}</h2>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onRemoveTask={() => onRemoveTask(index)}
          onToggleTask={() => onToggleTask(index)}
        />
      ))}
    </div>
  );
};
export default TodoTable;
