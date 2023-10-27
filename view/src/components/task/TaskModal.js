import React, { useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import TaskPropertiesForm from './TaskPropertiesForm';

// <TaskDisplay> will call this component and pass props to it
const TaskModal = ({taskData, taskOptions}) => {
  const [visibile, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <div>
      <button onClick={show}>Edit</button>
      <Rodal visible={visibile} onClose={hide}>
        <h3>Todo Properties</h3>
        <TaskPropertiesForm taskData={taskData} taskOptions={taskOptions} closeOnSubmit={hide} />
      </Rodal>
    </div>
  );
};

export default TaskModal;
