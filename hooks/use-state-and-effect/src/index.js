import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App';
import Menu from './component/Menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Menu />
  </React.StrictMode>
);