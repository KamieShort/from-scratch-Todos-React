import { client, checkError } from './client';

export async function fetchTodos() {
  const resp = await client.from('todos-react').select('*');
  return checkError(resp);
}

export async function newTodo(todo) {
  const resp = await client.from('todos-react').insert(todo);
  return checkError(resp);
}
