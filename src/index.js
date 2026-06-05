import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Isme sirf @import './styles/global.css'; rakhein

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);