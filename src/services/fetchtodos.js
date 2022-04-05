import { client, checkError } from './client';

export async function fetchTodos() {
  const resp = await client.from('todos-react').select('*').order('id', { ascending: true });
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

export async function deletedAllTodos() {
  const resp = await client.from('todos-react').delete().match({ user_id: client.auth.user().id });
  return checkError(resp);
}
