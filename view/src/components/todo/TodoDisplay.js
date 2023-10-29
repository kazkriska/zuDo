import React from 'react';
import TodoModal from './TodoModal';
import { deleteTodo } from '../../utils/todoRequests';

// <TodoContainer> will call this component and pass it props
const TodoDisplay = ({ todoData, handleDoubleClick }) => {

  return (
    <div
      className="std-box-component solid-border"
      onDoubleClick={handleDoubleClick}
    >
      <p className="text-defaultRegular">{todoData.task}</p>
      <button style={{ marginLeft: 8, marginRight: 4 }} onClick={() => deleteTodo(todoData.todo_id)}> 
        Delete
      </button>
      <TodoModal todoData={todoData} />
    </div>
  );
};

export default TodoDisplay;
