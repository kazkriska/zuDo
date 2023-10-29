import React, { useState } from 'react';

// <TodoModal> will call this component
const TodoPropertiesForm = ({ todoData, closeOnSubmit }) => {
  const [category, setCategory] = useState(todoData.category);
  const [due_on, setDue_on] = useState(todoData.due_on);

  const handleSubmit = (e) => {
    e.preventDefault();
    // editTodoCategory(todoData.id, category);
    // editTodoDueDate(todoData.id, dueDate)
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
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
            value={due_on}
            onChange={(e) => setDue_on(e.target.value)}
          />
        </fieldset>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default TodoPropertiesForm;
