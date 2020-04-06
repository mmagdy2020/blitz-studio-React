import React from 'react';
import User from '../user.model';
import { Link } from 'react-router-dom';
import './signup.css';


export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      isMiuStudent: false,
      password: "",
      confirmPassword: ""
    }
  }
  onClickSignUp() {
    // TODO: validate form
    // TODO: send post request to create user
    // TODO: on failure to create user, show error
    // TODO: on successful creation, log in user
    let user = new User(Math.floor(Math.random()*1000), this.state.firstname, this.state.lastname, this.state.email, this.state.phone, this.state.isMiuStudent, "user");
    console.log(user);
    // TODO: On successful log in

    // emit 'event' that user logged in
    this.props.onUserLoggedIn(user);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    // console.log("DEBUG: input change name", name, "value:", value);
    if (name === "isMiuStudent") {
      // console.log(name, target.checked, target.checked?true:false);
      this.setState({
        [name]: target.checked ? true : false
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  }
  render() {
    return (

      <div id="sign-up">
        <div className="container">
          <h1>Create an Account</h1>
          <form>
            <div className="form-group">
              <label htmlFor="firstname">First name:</label>
              <input className="form-control" name="firstname" id="firstname" type="text" value={this.state.firstname} onChange={(event) => this.handleInputChange(event)}></input>
            </div>

            <div className="form-group">
              <label htmlFor="lastname">Last name:</label>
              <input className="form-control" name="lastname" id="lastname" type="text" value={this.state.lastname} onChange={(event) => this.handleInputChange(event)}></input>

            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone number:</label>
              <input className="form-control" name="phone" id="phone" type="text" value={this.state.phone} onChange={(event) => this.handleInputChange(event)}></input>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input className="form-control" name="email" id="email" type="email" value={this.state.email} onChange={(event) => this.handleInputChange(event)}></input>
            </div>

            <div className="form-check">
              <input className="form-check-input" name="isMiuStudent" id="isMiuStudent" type="checkbox" checked={this.state.isMiuStudent} onChange={(event) => this.handleInputChange(event)}></input>
              <label className="form-check-label" htmlFor="isMiuStudent">Current MIU Student</label>
            </div>
            <hr></hr>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input className="form-control" name="password" id="password" type="password" value={this.state.password} onChange={(event) => this.handleInputChange(event)}></input>

            </div>

            <div className="form-group">
              <label htmlFor="confirm-password">Confirm password:</label>
              <input className="form-control" name="confirmPassword" id="confirm-password" type="password" value={this.state.confirmPassword} onChange={(event) => this.handleInputChange(event)}></input>
            </div>

            <div className="form-group">
              
              <Link to="/dashboard"><button type="button" className="btn btn-outline-primary" onClick={() => { this.onClickSignUp() }}>Sign Up!</button></Link>

            </div>
          </form>
        </div>
      </div>
    )
  }
}