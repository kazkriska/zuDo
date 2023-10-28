import React, { useState } from 'react';
import NewTodoBtn from './NewTodoBtn';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';

const CreateNewTodo = ({ category, todoOptions: { addTodo } }) => {
  const [clicked, setClicked] = useState(false);
  const [input, setInput] = useState('');
 
  //Handles adding new Todo
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (trimmedInput) {
      const todo = {
        id: uuidv4(),
        task: input,
        dateCreated: new Date().toLocaleString(),
        category: category,
        dueDate: ''
      };
      addTodo(todo);
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
