import React from 'react';
import '../style.css'

const NewTaskBtn = ({handleClick}) => {
  return (
    <div className="std-box-component dashed-border" onMouseOver={handleClick}>
      <p className="text-defaultRegular">+ New</p>
    </div>
  );
};

export default NewTaskBtn;
