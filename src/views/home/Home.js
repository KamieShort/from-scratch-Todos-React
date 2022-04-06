import React, { useState, useEffect } from 'react';
import TodoInput from '../../components/Input';
import { fetchTodos, newTodo, updateTodo, deletedAllTodos } from '../../services/fetchtodos';
// import { useHistory } from 'react-router-dom';

import './Home.css';

export default function TodosList() {
  // const history = useHistory();
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
    setTodo('');
  };

  const completeTodo = async (td) => {
    await updateTodo(td);

    const data = await fetchTodos();

    setTodos(data);
  };

  const removeAll = async () => {
    await deletedAllTodos();

    const remove = await fetchTodos();
    setTodos(remove);
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

      <div>
        <button className="delete-button" onClick={removeAll}>
          Delete All!
        </button>
      </div>
    </div>
  );
}
