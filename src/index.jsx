// src/index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Import Tailwind CSS

// Safely access the Ethereum object
if (typeof window.ethereum !== 'undefined') {
  console.log('Ethereum object detected:', window.ethereum);
} else {
  console.log('No Ethereum provider found. Install MetaMask.');
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
