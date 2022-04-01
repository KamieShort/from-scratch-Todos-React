import React from 'react';
import { useHistory } from 'react-router-dom';

import { newTodo } from '../services/fetchtodos';

export default function TodoInput({ todo, setTodo }) {
  const history = useHistory();
  const submitTodo = async () => {
    await newTodo({ todo });
    history.push('/');
  };

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
