import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home.jsx'
import App from './App.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Router>
      <App/>
    </Router>,
    
  </React.StrictMode>
);
