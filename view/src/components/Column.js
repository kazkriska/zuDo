import React from 'react';
import TaskContainer from './task/TaskContainer';
import CreateNewTask from './task/CreateNewTask'

const Column = ({ category, todos, taskOptions }) => {
  return (
    <div className="column">
      {todos.filter((todo) => todo.category === category).map((todo) => (
        <TaskContainer
          taskData={todo}
          key={todo.id}
          taskOptions={taskOptions}
        />
      ))}
      <CreateNewTask taskOptions={taskOptions} category={category} />
    </div>
  );
};

export default Column;

