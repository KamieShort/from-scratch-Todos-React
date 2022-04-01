import React, { useState, useEffect } from 'react';
import TodoInput from '../../components/Input';
import { fetchTodos } from '../../services/fetchtodos';

export default function TodosList() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTodos();
      console.log(data);

      setTodos(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>To-Do&apos;s!!</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.todo}</p>
        </div>
      ))}

      <TodoInput {...{ ...todo }} setTodo={setTodo} />
    </div>
  );
}
