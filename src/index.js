import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import axios from 'axios';

// Mike: Loading environmental variables
require('dotenv').config();

axios.defaults.baseURL = process.env.REACT_APP_REST_URL || "https://blitz-studio-rest.azurewebsites.net";

console.log('axios.defaults.baseURL : ', axios.defaults.baseURL)
ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
