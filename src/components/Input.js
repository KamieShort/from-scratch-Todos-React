import React from 'react';
import { newTodo } from '../services/fetchtodos';

export default function TodoInput({ todo }) {
  const submitTodo = async () => {
    await newTodo({ todo });
  };

  return (
    <div>
      <input type="text" value={todo}></input>
      <button onClick={submitTodo}>Submit</button>
    </div>
  );
}
