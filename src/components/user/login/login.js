import React from 'react';
import User from '../user.model';
import './login.css';
import { Link } from 'react-router-dom';

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
    console.log("DEBUG: input change name", name, "value:", value);
    this.setState({
      [name]: value
    });
  }
  onClickLogIn() {
    // TODO: Authenticate with server
    // TODO: on failure
    // TODO: show error


    // on successful log in
    // emit 'event' that user logged in
    const user = new User(Math.floor(Math.random() * 1000), "FirstName", "LastName", this.state.username, "1234567890", true, "user");
    console.log(user);
    this.props.onUserLoggedIn(user);
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
            <Link  to="/dashboard"><button type="button" className="btn btn-primary" onClick={_ => this.onClickLogIn()}>Log In</button></Link>
            

          </form>
        </div>
      </div>

    );
  }

}

export default LogIn;