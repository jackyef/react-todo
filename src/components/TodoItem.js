import React from 'react';

const TodoItem = ({ todo, index, onDelete, onToggleDone }) => {
  const className = todo.done ? 'row linethrough' : 'row';
  const markLabel = todo.done ? 'Mark as not done' : 'Mark as done';
  const handleDelete = () => {
    onDelete(todo.id);
  };
  const handleToggleDone = () => {
    onToggleDone(todo.id);
  };

  return (
    <div className={className} key={todo.id}>
      <div>{index + 1}</div>
      <div>{todo.message}</div>
      <div>
        <button className="green" onClick={handleToggleDone}>
          {markLabel}
        </button>
      </div>
      <div>
        <button className="red" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
