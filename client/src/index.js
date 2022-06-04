import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './global.css';
import ReactDOM from 'react-dom';
ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root'),
);
