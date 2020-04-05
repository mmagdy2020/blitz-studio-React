import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Navbar from './navbar/navbar';
import Main from './main/main';
import Footer from './footer/footer';
import {BrowserRouter as Router} from 'react-router-dom';
import {useState} from 'react';

function App() {
  let [user, setUser] = useState(null);

  let userManager = (newUser)=>{
    setUser(newUser);
    console.log("DEBUG: New user in app:",newUser);
  }

  return (
    <div className="App">
      <Router>
        <Navbar user={user} onLogOut={_ => { userManager(null)}}/>
        <Main onUserChange={(user) => { userManager(user)}} user={user}/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
