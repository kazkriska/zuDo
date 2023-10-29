import React from 'react';
import TodoContainer from './todo/TodoContainer';
import CreateNewTodo from './todo/CreateNewTodo'

// <Column> is called by <App>
const Column = ({ category, todos }) => {
  return (
    <div className="column">
      {todos.filter((todo) => todo.category === category).map((todo) => (
        <TodoContainer
          todoData={todo}
          key={todo.todo_id}
          
        />
      ))}
      <CreateNewTodo category={category} />
    </div>
  );
};

export default Column;

