import React from 'react';
import TaskManager from './components/TaskManager';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Liste de Tâches</h1>
      <TaskManager />
    </div>
  );
}

export default App;
