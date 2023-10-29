import Column from './components/Column';
import React, { useEffect, useState } from 'react';
import './App.css';
import { readTodos } from './utils/todoRequests';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    readTodos().then((res) => setTodos(res))
  }, [todos])


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
