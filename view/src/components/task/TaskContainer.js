import React, { useState } from 'react';
import TaskDisplay from './TaskDisplay';
import TaskForm from './TaskForm';

const TaskContainer = ({ taskData, taskOptions }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState(taskData.task);

  const { editTodoTask } = taskOptions;

  //handles editing existing task
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (trimmedInput) {
      editTodoTask(taskData.id, input);
      setIsEditing((state) => !state);
    }
  };

  return (
    <div>
      {isEditing ? (
        <TaskForm
          handleSubmit={handleSubmit}
          inputValue={input}
          handleChange={(e) => setInput(e.target.value)}
          formButtonText={'Submit'}
        />
      ) : (
        <TaskDisplay
          taskData={taskData}
          taskOptions={taskOptions}
          handleDoubleClick={() => setIsEditing((state) => !state)}
        />
      )}
    </div>
  );
};

export default TaskContainer;
