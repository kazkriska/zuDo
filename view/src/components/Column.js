import React from 'react';
import TodoContainer from './todo/TodoContainer';
import CreateNewTodo from './todo/CreateNewTodo'

// <Column> is called by <App>
const Column = ({ category, todos, todoOptions }) => {
  return (
    <div className="column">
      {todos.filter((todo) => todo.category === category).map((todo) => (
        <TodoContainer
          todoData={todo}
          key={todo.id}
          todoOptions={todoOptions}
        />
      ))}
      <CreateNewTodo todoOptions={todoOptions} category={category} />
    </div>
  );
};

export default Column;

