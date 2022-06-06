import { QueryClient } from 'react-query';

const client = new QueryClient();

if (localStorage.getItem('current_user')) {
  client.setQueryData('current_user', JSON.parse(localStorage.getItem('current_user')));  
  client.setQueryDefaults('current_user', { cacheTime: Infinity });
}

export default client;
