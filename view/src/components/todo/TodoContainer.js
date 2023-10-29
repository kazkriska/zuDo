import React, { useState } from 'react';
import TodoDisplay from './TodoDisplay';
import TodoForm from './TodoForm';
import { updateTodo } from '../../utils/todoRequests';

const TodoContainer = ({ todoData }) => {
  const [isEditing, setIsEditing] = useState(false);

  // holds the state of the input which represents the todo's task value
  const [task, setTask] = useState(todoData.task); 

  //handles editing existing todo
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = task.trim();
    if (trimmedInput) {
      updateTodo(todoData.todo_id, {task})
      setIsEditing((state) => !state);
    }
  };

  return (
    <div>
      {isEditing ? (
        <TodoForm
          handleSubmit={handleSubmit}
          inputValue={task}
          handleChange={(e) => setTask(e.target.value)}
          formButtonText={'Submit'}
        />
      ) : (
        <TodoDisplay
          todoData={todoData}
          handleDoubleClick={() => setIsEditing((state) => !state)}
        />
      )}
    </div>
  );
};

export default TodoContainer;
