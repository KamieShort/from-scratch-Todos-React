import { client, checkError } from './client';

export function getUser() {
  return client.auth.session() && client.auth.session().user.email;
}
