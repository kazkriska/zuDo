import React, { useState } from 'react';

// <TodoModal> will call this component
const TodoPropertiesForm = ({ todoData, todoOptions, closeOnSubmit }) => {
  const [selectedCategory, setSelectedCategory] = useState(todoData.category);
  const [dueDate, setDueDate] = useState(todoData.dueDate);

  const { editTodoCategory, editTodoDueDate } = todoOptions;
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodoCategory(todoData.id, selectedCategory);
    editTodoDueDate(todoData.id, dueDate)
    closeOnSubmit();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="todoCategory">Category: </label>
          <select
            name="todoCategory"
            id="todoCategory"
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

export default TodoPropertiesForm;
