import React, { useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import TodoPropertiesForm from './TodoPropertiesForm';

// <TodoDisplay> will call this component and pass props to it
const TodoModal = ({todoData, todoOptions}) => {
  const [visibile, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };


  return (
    <div onDoubleClick={(e) => e.stopPropagation()}>
      <button onClick={show}>Edit</button>
      <Rodal visible={visibile} onClose={hide}>
        <h3>Todo Properties</h3>
        <TodoPropertiesForm todoData={todoData} todoOptions={todoOptions} closeOnSubmit={hide} />
      </Rodal>
    </div>
  );
};

export default TodoModal;
