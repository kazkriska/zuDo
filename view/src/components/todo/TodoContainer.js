import React, { useState } from 'react';
import TodoDisplay from './TodoDisplay';
import TodoForm from './TodoForm';

const TodoContainer = ({ todoData, todoOptions }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState(todoData.task);

  const { editTodoTask } = todoOptions;

  //handles editing existing todo
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (trimmedInput) {
      editTodoTask(todoData.id, input);
      setIsEditing((state) => !state);
    }
  };

  return (
    <div>
      {isEditing ? (
        <TodoForm
          handleSubmit={handleSubmit}
          inputValue={input}
          handleChange={(e) => setInput(e.target.value)}
          formButtonText={'Submit'}
        />
      ) : (
        <TodoDisplay
          todoData={todoData}
          todoOptions={todoOptions}
          handleDoubleClick={() => setIsEditing((state) => !state)}
        />
      )}
    </div>
  );
};

export default TodoContainer;
