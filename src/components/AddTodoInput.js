import React from 'react';

const AddTodoInput = ({ value, onChange, onClick }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Example: read more blogs"
        value={value}
        onChange={onChange}
      />
      <button className="blue" onClick={onClick}>
        Add to list
      </button>
    </>
  );
};

export default AddTodoInput;
