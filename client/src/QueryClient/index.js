import { QueryClient } from 'react-query';

const client = new QueryClient();

if (localStorage.getItem('current_user')) {
  client.setQueryData('current_user', JSON.parse(localStorage.getItem('current_user')));
}

export default client;
