import React, { useState } from 'react';

// <TaskModal> will call this component
const TaskPropertiesForm = ({ taskData, taskOptions, closeOnSubmit }) => {
  const [selectedCategory, setSelectedCategory] = useState(taskData.category);
  const [dueDate, setDueDate] = useState(taskData.dueDate);

  const { editTodoCategory, editTodoDueDate } = taskOptions;
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodoCategory(taskData.id, selectedCategory);
    editTodoDueDate(taskData.id, dueDate)
    closeOnSubmit();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="taskCategory">Category: </label>
          <select
            name="taskCategory"
            id="taskCategory"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="today">Today</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="dumpster">Dumpster</option>
          </select>
          <br />
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </fieldset>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default TaskPropertiesForm;
