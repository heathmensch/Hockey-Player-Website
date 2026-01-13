import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { searchPlayers } from './api';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Example usage of the updated searchPlayers function
// searchPlayers("8476453").then(results => {
//   console.log(results);
// });

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

