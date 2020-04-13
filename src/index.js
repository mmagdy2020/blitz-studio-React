import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import axios from 'axios';

//Redux - store setup..

// CLASS REDUCER
import classReducer from './components/store/classState/classReducer'  
// Attendance Reducer

// User Reducer

import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware ,compose} from 'redux'
import ReduxThunk from 'redux-thunk';
// Mike: Loading environmental variables
require('dotenv').config();
console.log('process.env.REACT_APP_REST_URI : ', process.env.REACT_APP_REST_URI);

// axios.defaults.baseURL = process.env.REACT_APP_REST_URI;

// axios.defaults.baseURL = "https://blitz-studio-rest.azurewebsites.net"

//Mo - adding Local Url
// axios.defaults.baseURL = process.env.REACT_APP_REST_URI || "https://blitz-studio-rest.azurewebsites.net";
axios.defaults.baseURL = "http://localhost:4000";


//MO - ADD UR REDUCER
const rootReducer = combineReducers({ clss: classReducer })
// MO - FOR REDUX-DEVTOOL
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers (applyMiddleware(ReduxThunk)))


ReactDOM.render(

  <Provider store={store}> <React.StrictMode>
    <App />
  </React.StrictMode> </Provider>,
  document.getElementById('root')
);
