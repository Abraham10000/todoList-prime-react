import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import TaskItem from './TaskItem';

const TaskTable = ({ title, tasks, onRemoveTask, onToggleTask }) => {
  return (
    <div className="todo-table">
      <h2>{title}</h2>
      <DataTable value={tasks}>
        <Column
          body={(rowData) => (
            <TaskItem
              task={rowData}
              onRemoveTask={() => onRemoveTask(rowData)}
              onToggleTask={() => onToggleTask(rowData)}
            />
          )}
        />
      </DataTable>
    </div>
  );
};

export default TaskTable;
