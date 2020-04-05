import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import axios from 'axios';

// Mike: Loading environmental variables
require('dotenv').config();
console.log('process.env.REACT_APP_REST_URI : ', process.env.REACT_APP_REST_URI);

// axios.defaults.baseURL = process.env.REACT_APP_REST_URI;
axios.defaults.baseURL = `https://blitz-studio-rest.azurewebsites.net`;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
