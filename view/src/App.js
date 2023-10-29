import Column from './components/Column';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  console.table(todos); //for testing, remove later
  return (
    <div className="kanban-board">
      <Column category={'today'} todos={todos} />
      <Column category={'week'} todos={todos} />
      <Column category={'month'} todos={todos} />
      <Column category={'dumpster'} todos={todos} />
    </div>
  );
}

export default App;
