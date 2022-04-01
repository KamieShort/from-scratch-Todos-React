import React from 'react';

export default function TodoInput({ todo, setTodo, submitTodo }) {
  return (
    <div>
      <input
        type="text"
        placeholder="new task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={submitTodo}>Submit</button>
    </div>
  );
}
