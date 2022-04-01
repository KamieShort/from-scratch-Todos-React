import React, { useState, useEffect } from 'react';
import TodoInput from '../../components/Input';
import { fetchTodos, newTodo } from '../../services/fetchtodos';

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
  const submitTodo = async () => {
    const addedTodo = await newTodo({ todo });

    setTodos((prevState) => [...prevState, addedTodo]);
  };
  return (
    <div className="home">
      <h1 className="home-title">To-Do&apos;s!!</h1>
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

      <TodoInput {...{ todo, setTodo, submitTodo }} />
    </div>
  );
}
