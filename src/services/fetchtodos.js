import { client, checkError } from './client';

export async function fetchTodos() {
  const resp = await client.from('todos-react').select('*');
  return checkError(resp);
}

export async function newTodo(todo) {
  const resp = await client.from('todos-react').insert(todo).single();
  return checkError(resp);
}

export async function updateTodo(todo) {
  const resp = await client
    .from('todos-react')
    .update({ complete: !todo.complete })
    .match({ id: todo.id });
  return checkError(resp);
}
