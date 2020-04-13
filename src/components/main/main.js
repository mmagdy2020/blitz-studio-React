import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../pages/about';
import './main.css';
import Calendar from '../pages/calendar';
import Reviews from '../pages/reviews';
import Contact from '../pages/contact';
import LogIn from '../user/login/login';
import Dashboard from '../user/dashboard/dashboard';
import SignUp from '../user/signup/signup';
import AddClass from "../classes/addClass/addClass";
import ShowClasses from "../classes/showClasses/fetchClass";
import UpdateClass from "../classes/editClass";
import ClassDetails from '../classes/showClassDetails/classDetails';



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

          <Route exact path = "/classes" component={ShowClasses}/>
          <Route exact path = "/edit-class/:id" component ={UpdateClass}/>
          <Route exact path = "/classes/:id" component={ClassDetails}/>
          <Route exact path ="/add-class" component ={AddClass}/>

          {/* <Route exact path = "/classes" component={Classes}/> */}
          <Route exact path="/classes/bachata" component={Contact} />
          <Route exact path="/classes/salsa" component={Contact} />



          {/* <Route path="/classes/salsa">
            <Classes classType="salsa"></Classes>
          </Route>
          <Route path="/classes/bachata">
            <Classes classType="bachata"></Classes>
          </Route>
          <Route path="/classes/connection">
            <Classes classType="connection"></Classes>
          </Route> */}
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
            <Dashboard user={this.state.user} onUserChange={(user) => { this.setUser(user) }} />
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

// export default Main
// // export default withRouter(Main)


