import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './global.css';
import ReactDOM from 'react-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import client from 'QueryClient';

ReactDOM.render(
  <>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </>,
  document.getElementById('root'),
);
