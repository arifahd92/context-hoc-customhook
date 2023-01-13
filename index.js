import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextApp from './ContextApi/ContextApp';
import CustomApp from './customHook/CustomApp';
import HocApp from './hoc/HocApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ContextApp/>
  </React.StrictMode>
);

