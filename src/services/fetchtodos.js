import { client, checkError } from './client';

export async function fetchTodos() {
  const resp = await client.from('todos-react').select('*');
  return checkError(resp);
}
