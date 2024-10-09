import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Adjust if your file path is different

const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure 'root' matches the id in index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
