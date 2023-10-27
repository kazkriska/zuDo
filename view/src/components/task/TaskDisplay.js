import React from 'react';
import TaskModal from './TaskModal';

// <TaskContainer> will call this component and pass it props
const TaskDisplay = ({ taskData, taskOptions, handleDoubleClick }) => {
  const { deleteTodo } = taskOptions;
  return (
    <div
      className="std-box-component solid-border"
      onDoubleClick={handleDoubleClick}
    >
      <p className="text-defaultRegular">{taskData.task}</p>
      <button style={{ marginLeft: 8, marginRight: 4 }} onClick={() => deleteTodo(taskData.id)}>
        Delete
      </button>
      <TaskModal taskData={taskData} taskOptions={taskOptions} />
    </div>
  );
};

export default TaskDisplay;
