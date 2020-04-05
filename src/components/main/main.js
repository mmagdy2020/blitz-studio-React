import React from 'react';
import { Switch, Route } from 'react-router-dom';
import User from '../user/user';
import About from '../pages/about';
import Calendar from '../pages/calendar';
import Classes from '../pages/classes';
import Reviews from '../pages/reviews';
import Contact from '../pages/contact';
import './main.css';

export default class Main extends React.Component {
  render() {
    return (
      <div id="main">
        <Switch>
          {/* Static pages */}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/classes/salsa">
            <Classes classType="salsa"></Classes>
          </Route>
          <Route path="/classes/bachata">
            <Classes classType="bachata"></Classes>
          </Route>
          <Route path="/classes/connection">
            <Classes classType="connection"></Classes>
          </Route>
          <Route path="/reviews">
            <Reviews />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <div id="home" className="container ">
              <div className="connection-img"></div>
            </div>
          </Route>

          <Route path="/login">
            {/* <LogIn /> */}
          </Route>
          <Route path="/signup">
            {/* <SignUp /> */}
          </Route>

          {/* <Route path="/path-name-here">
            <ComponentNameHere/>
          </Route> */}

        </Switch>
      </div>
    )
  }
}