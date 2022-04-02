import React, { useState, useEffect } from 'react';
import TodoInput from '../../components/Input';
import { fetchTodos, newTodo, updateTodo } from '../../services/fetchtodos';

import './Home.css';

export default function TodosList() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  // const [complete, setComplete] = useState(true);

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

  const completeTodo = async (td) => {
    await updateTodo(td);

    const data = await fetchTodos();

    setTodos(data);
  };

  return (
    <div className="home">
      <h1 className="home-title">To-Do&apos;s!!</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <ul>
            <li>
              <input
                type="checkbox"
                checked={todo.complete}
                // onClick={() => completeTodo(todo)}
                onChange={() => completeTodo(todo)}
              />
              {todo.todo}
            </li>
          </ul>
        </div>
      ))}

      <TodoInput {...{ todo, setTodo, submitTodo }} />
    </div>
  );
}
