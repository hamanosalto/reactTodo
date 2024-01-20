import React from 'react';
//HTML出力
const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label>
        <input 
          type="checkbox"
          checked={todo.completed}
          readOnly
          onChange={handleTodoClick}
        />
      </label>
      {todo.name}
    </div>
  );
};

export default Todo;