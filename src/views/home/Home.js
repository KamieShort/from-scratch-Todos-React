import React, { useState, useEffect } from 'react';
import { fetchTodos } from '../../services/fetchtodos';

export default function TodosList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTodos();
      console.log(data);

      setTodos(data);
    };
    fetchData();
  }, []);

  // const submitTodo = ()
  return (
    <div>
      <h1>To-Do&apos;s!!</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.todo}</p>
        </div>
      ))}

      <input type="text"></input>
      <button>Submit</button>
    </div>
  );
}
