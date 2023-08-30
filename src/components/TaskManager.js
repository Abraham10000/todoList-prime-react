import React, { useState } from 'react';
import TaskTable from './TaskTable';
import '../styles/TaskManager.css';


const TaskManager = () => {
  const [todoTasks, setTodoTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    setTodoTasks([...todoTasks, { task: newTask }]);
    setNewTask(''); 
  };

  const handleRemoveTask = (task, taskType) => {
    if (taskType === 'todo') {
      setTodoTasks(todoTasks.filter(t => t !== task));
    } else if (taskType === 'inProgress') {
      setInProgressTasks(inProgressTasks.filter(t => t !== task));
    } else if (taskType === 'done') {
      setDoneTasks(doneTasks.filter(t => t !== task));
    }
  };

  const handleToggleTask = (task, sourceList) => {
    if (sourceList === 'todo') {
      setTodoTasks(todoTasks.filter(t => t !== task));
      setInProgressTasks([...inProgressTasks, task]);
    } else if (sourceList === 'inProgress') {
      setInProgressTasks(inProgressTasks.filter(t => t !== task));
      setDoneTasks([...doneTasks, task]);
    }
  };


  return (
    <div className="task-manager">
      <div className="task-input">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nouvelle tâche"
      />
      <button className="add-button" onClick={handleAddTask}>
        Ajouter
      </button>
    </div>
      <div className="task-lists">
        <TaskTable
          title="À Faire"
          tasks={todoTasks}
          onRemoveTask={(task) => handleRemoveTask(task, 'todo')}
          onToggleTask={(task) => handleToggleTask(task, 'todo')}
        />
        <TaskTable
          title="En Cours"
          tasks={inProgressTasks}
          onRemoveTask={(task) => handleRemoveTask(task, 'inProgress')}
          onToggleTask={(task) => handleToggleTask(task, 'inProgress')}
        />
        <TaskTable
          title="Terminé"
          tasks={doneTasks}
          onRemoveTask={(task) => handleRemoveTask(task, 'done')}
          onToggleTask={(task) => handleToggleTask(task, 'done')}
        />
      </div>
    </div>
  );
};

export default TaskManager;
