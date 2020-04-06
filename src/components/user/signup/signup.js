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
  onClickSignUp(event) {
    // TODO: validate form
    if (this.state.password !== this.state.confirmPassword){
      event.preventDefault();
      alert("Passwords do not match");
    }

    let user = User.AddNewUser( new User(Math.floor(Math.random() * 1000), this.state.firstname, this.state.lastname, this.state.email, this.state.phone, this.state.isMiuStudent, "user", this.state.password));
    // TODO: send post request to create user
    if(user){
    // on successful creation, try to log in user
     console.log("user was created.")

     const authUser = User.LogInUser(user.email, user.password); 
     if (authUser){
       // On successful log in
       console.log("user logged in:", authUser);

       // emit 'event' that user logged in
       this.props.onUserLoggedIn(authUser);

     } else {
       event.preventDefault();
       alert("Could not log in with new user.");
     }

    } else{
      // TODO: on failure to create new user, show error
      event.preventDefault();
      alert("Could not create new user.");
    }

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
              
              <Link to="/dashboard"><button type="button" className="btn btn-outline-primary" onClick={(event) => { this.onClickSignUp(event) }}>Sign Up!</button></Link>

            </div>
          </form>
        </div>
      </div>
    )
  }
}