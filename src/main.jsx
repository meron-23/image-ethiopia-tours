import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap your App component with BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
