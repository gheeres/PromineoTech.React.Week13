import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import App from './App';
import Header
 from './components/Header';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(
  <Header />
);
