import React, { useState } from 'react';
import NewTodoBtn from './NewTodoBtn';
import TodoForm from './TodoForm';

const CreateNewTodo = ({ category }) => {
  const [clicked, setClicked] = useState(false);
  const [input, setInput] = useState('');
 
  //Handles adding new Todo
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (trimmedInput) {
      const todo = {
        task: input,
        category: category,
        created_at: new Date().toLocaleString()
      };
      // addTodo(todo);    UPDATE WITH API CALL
      setInput('');
      setClicked((state) => !state);
    }
  };

  return (
    <div>
      {/* if clicked is TRUE then show TodoForm else show NewTodoButton  */}
      {clicked ? (
        <TodoForm
          inputValue={input}
          handleChange={(e) => setInput(e.target.value)}
          handleSubmit={handleSubmit}
          formButtonText={'Add'}
        />
      ) : (
        <NewTodoBtn handleClick={() => setClicked((state) => !state)} />
      )}
    </div>
  );
};

export default CreateNewTodo;
