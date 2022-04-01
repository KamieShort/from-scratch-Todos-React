import React, { useState, useEffect } from 'react';
import TodoInput from '../../components/Input';
import { fetchTodos } from '../../services/fetchtodos';
import './Home.css';

export default function TodosList() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTodos();

      setTodos(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>To-Do&apos;s!!</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <ul>
            <li>
              <input type="checkbox" />
              {todo.todo}
            </li>
          </ul>
        </div>
      ))}

      <TodoInput {...{ todo, setTodo }} />
    </div>
  );
}
