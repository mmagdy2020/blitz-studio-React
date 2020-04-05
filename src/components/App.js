import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import User from './user/user';
import Navbar from './navbar/navbar';
import Main from './main/main';
import Footer from './footer/footer';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Main />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
