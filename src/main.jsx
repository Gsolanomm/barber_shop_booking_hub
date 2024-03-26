import ReactDOM from 'react-dom/client'; // Cambia la importación de react-dom
import React from 'react';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
