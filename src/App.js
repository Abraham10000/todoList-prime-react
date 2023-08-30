import './App.css';
import React, { useState } from 'react';
import TodoTable from './components/TodoTable';

function App() {
  const [todoTasks, setTodoTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    
    setTodoTasks([...todoTasks, newTask]);
    setNewTask('');
  };

  const handleRemoveTask = (index, taskType) => {
    if (taskType === 'todo') {
      const updatedTasks = [...todoTasks];
      updatedTasks.splice(index, 1);
      setTodoTasks(updatedTasks);
    } else if (taskType === 'inProgress') {
      const updatedTasks = [...inProgressTasks];
      updatedTasks.splice(index, 1);
      setInProgressTasks(updatedTasks);
    } else if (taskType === 'done') {
      const updatedTasks = [...doneTasks];
      updatedTasks.splice(index, 1);
      setDoneTasks(updatedTasks);
    }
  };
  
  const handleToggleTask = (index, sourceList) => {
    let updatedSourceList, updatedDestinationList;
  
    if (sourceList === 'todo') {
      updatedSourceList = [...todoTasks];
      updatedDestinationList = [...inProgressTasks];
    } else if (sourceList === 'inProgress') {
      updatedSourceList = [...inProgressTasks];
      updatedDestinationList = [...doneTasks];
    }
  
    const [toggledTask] = updatedSourceList.splice(index, 1);
    updatedDestinationList.push(toggledTask);
  
    if (sourceList === 'todo') {
      setTodoTasks(updatedSourceList);
      setInProgressTasks(updatedDestinationList);
    } else if (sourceList === 'inProgress') {
      setInProgressTasks(updatedSourceList);
      setDoneTasks(updatedDestinationList);
    }
  };

  return (
    <div className="app">
      <h1>Liste de Tâches</h1>
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nouvelle tâche"
        />
        <button className="add-button" onClick={handleAddTask}>Ajouter</button>
      </div>

      <div className="task-lists">
        <TodoTable
          title="À Faire"
          tasks={todoTasks}
          onRemoveTask={(index) => handleRemoveTask(index, 'todo')}
          onToggleTask={(index) => handleToggleTask(index, 'todo')}
        />
        <TodoTable
          title="En Cours"
          tasks={inProgressTasks}
          onRemoveTask={(index) => handleRemoveTask(index, 'inProgress')}
          onToggleTask={(index) => handleToggleTask(index, 'inProgress')}
        />
        <TodoTable
          title="Terminé"
          tasks={doneTasks}
          onRemoveTask={(index) => handleRemoveTask(index, 'done')}
          onToggleTask={(index) => handleToggleTask(index, 'done')}
        />
      </div>
    </div>
  );
}

export default App;

