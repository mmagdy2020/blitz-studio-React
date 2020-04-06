import React from 'react';
import { Switch, Route } from 'react-router-dom';
import User from '../user/user.model';
import About from '../pages/about';
import Calendar from '../pages/calendar';
import Classes from '../pages/classes';
import Reviews from '../pages/reviews';
import Contact from '../pages/contact';
import LogIn from '../user/login/login';
import Dashboard from '../user/dashboard/dashboard';
import SignUp from '../user/signup/signup';
import './main.css';

// Mike: 
import Checkin from '../attendanceRecord/checkin/checkin';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: this.props.user };
  }
  setUser(user) {

    this.setState({ user: user });
    this.props.onUserChange(user);
  }
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

          <Route path="/login">
            <LogIn onUserLoggedIn={(user) => { this.setUser(user) }} />
          </Route>

          <Route path="/dashboard">
            <Dashboard user={this.state.user} />
          </Route>
          <Route path="/signup">
            <SignUp onUserLoggedIn={(user) => { this.setUser(user) }} />
          </Route>

          {/* <Route path="/path-name-here">
            <ComponentNameHere/>
          </Route> */}

          <Route path="/">
            <div id="home" className="container ">
              <div className="connection-img"></div>
            </div>
          </Route>

        </Switch>
      </div>
    )
  }
}