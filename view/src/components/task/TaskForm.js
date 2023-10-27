import React from 'react';
import '../style.css'

// <CreateNewTask> & <TaskContainer> will call this component
const TaskForm = ({ handleSubmit, inputValue, handleChange, formButtonText }) => {
  return (
    <div>
      <div className="std-box-component solid-border">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="newTaskInput"
            id="newTaskInput"
            value={inputValue}
            onChange={handleChange}
            placeholder="Type here..."
            autoFocus
          />
          <button type="submit">{formButtonText}</button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
