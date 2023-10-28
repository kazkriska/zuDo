import Column from './components/Column';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const todoOptions = {
    findTodo(id) {
      const todoToUpdate = todos.find((todo) => todo.id === id);
      return todoToUpdate;
    },
    addTodo(todo) {
      setTodos([...todos, todo]);
    },
    deleteTodo(id) {
      const filteredTodos = todos.filter((todo) => todo.id !== id);
      setTodos(filteredTodos);
    },
    editTodoTask(id, newTaskValue) {
      const todoToUpdate = todoOptions.findTodo(id);
      if (todoToUpdate) {
        todoToUpdate.task = newTaskValue;
        setTodos([...todos])
      }
    },
    editTodoCategory(id, newCategory) {
      const todoToUpdate = todoOptions.findTodo(id);
      if (todoToUpdate) {
        todoToUpdate.category = newCategory;
        setTodos([...todos])
      }
    },
    editTodoDueDate(id, newDueDate) {
      const todoToUpdate = todoOptions.findTodo(id);
      if(todoToUpdate) {
        todoToUpdate.dueDate = newDueDate;
        setTodos([...todos])
      }
    }
  };

  console.table(todos); //for testing, remove later
  return (
    <div className="kanban-board">
      <Column category={'today'} todos={todos} todoOptions={todoOptions} />
      <Column category={'week'} todos={todos} todoOptions={todoOptions} />
      <Column category={'month'} todos={todos} todoOptions={todoOptions} />
      <Column category={'dumpster'} todos={todos} todoOptions={todoOptions} />
    </div>
  );
}

export default App;
