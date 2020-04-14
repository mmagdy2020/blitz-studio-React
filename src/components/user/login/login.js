import React from 'react';
import User from '../../../models/user';
import './login.css';
import {
  withRouter
} from 'react-router-dom'

class LogIn extends React.Component {
  state = { username: "", password: "" };
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    // console.log("DEBUG: input change name", name, "value:", value);
    this.setState({
      [name]: value
    });
  }
  async onClickLogIn(event) {

    // Authenticate with server
    const user = await User.LogInUser(this.state.username, this.state.password);

    if (!user) {
      // on failure
      console.log("error:",user);

      // show error
      alert("Username and password combination is invalid. Try again.");

    } else {
      // on successful log in
      this.props.history.push({pathname: '/dashboard'});
      // emit 'event' that user logged in
      this.props.onUserLoggedIn(user);
    }

  }
  render() {
    return (
      <div id="log-in">
        <div className="container">
          <h1>Welcome, Log in!</h1>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input id="username" name="username" className="form-control" type="text" placeholder="Username" value={this.state.username} onChange={this.handleInputChange}></input>
            </div>
            <div className="form-group">

              <label htmlFor="password">Password</label>
              <input id="password" name="password" className="form-control" type="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange}></input>

            </div>
             <button type="button" className="btn btn-primary" onClick={event => this.onClickLogIn(event)}>Log In</button> 
          </form>
        </div>
      </div>

    );
  }

}

export default withRouter(LogIn);