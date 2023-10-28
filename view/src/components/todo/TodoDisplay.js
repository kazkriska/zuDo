import React from 'react';
import TodoModal from './TodoModal';

// <TodoContainer> will call this component and pass it props
const TodoDisplay = ({ todoData, todoOptions, handleDoubleClick }) => {
  const { deleteTodo } = todoOptions;
  return (
    <div
      className="std-box-component solid-border"
      onDoubleClick={handleDoubleClick}
    >
      <p className="text-defaultRegular">{todoData.task}</p>
      <button style={{ marginLeft: 8, marginRight: 4 }} onClick={() => deleteTodo(todoData.id)}>
        Delete
      </button>
      <TodoModal todoData={todoData} todoOptions={todoOptions} />
    </div>
  );
};

export default TodoDisplay;
