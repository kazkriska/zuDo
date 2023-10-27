import React, { useState } from 'react';
import NewTaskBtn from './NewTaskBtn';
import TaskForm from './TaskForm';
import { v4 as uuidv4 } from 'uuid';

const CreateNewTask = ({ category, taskOptions: { addTodo } }) => {
  const [clicked, setClicked] = useState(false);
  const [input, setInput] = useState('');
 
  //Handles adding new Task
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
      {/* if clicked is TRUE then show TaskForm else show NewTaskButton  */}
      {clicked ? (
        <TaskForm
          inputValue={input}
          handleChange={(e) => setInput(e.target.value)}
          handleSubmit={handleSubmit}
          formButtonText={'Add'}
        />
      ) : (
        <NewTaskBtn handleClick={() => setClicked((state) => !state)} />
      )}
    </div>
  );
};

export default CreateNewTask;
