import React from 'react';
import User from '../../../models/user';
import './userForm.css';
import {
  withRouter
} from 'react-router-dom'

// has props: userToEdit, hasAdminAccess, onSubmit(user), onCancel(), titleText, buttonText
class UserForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.userToEdit) {
      this.state = { ...this.props.userToEdit, confirmPassword: "", password: "" };
    } else {
      this.state = {
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        isMiuStudent: false,
        imgUrl: "",
        password: "",
        confirmPassword: "",
        role: "user"
      }
    }


  }
  onClickSubmit(event) {
    // TODO: validate form
    if (this.state.password !== this.state.confirmPassword) {
      alert("Passwords do not match");
    } else { // call callback with user.
      let id = this.props.userToEdit ? this.props.userToEdit._id : "";
      const user = new User(id, this.state.firstname, this.state.lastname, this.state.email, this.state.phone, this.state.isMiuStudent, this.state.role, this.state.password, this.state.imgUrl);
      this.props.onSubmit(user);
    }
  }
  onClickCancel(event) {
    this.props.onCancel();
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
    let adminSection = this.props.hasAdminAccess ? <div>
      <div className="form-group">
        <label htmlFor="balance">Balance</label>
        <input className="form-control" name="balance" id="balance" type="number" value={this.state.balance} onChange={(event) => this.handleInputChange(event)}></input>
      </div>
      <div className="form-group">
        <label htmlFor="role">Role (user or admin):</label>
        <input className="form-control" name="role" id="role" type="text" value={this.state.role} onChange={(event) => this.handleInputChange(event)}></input>
      </div>
      
    </div>
      : null;
    return (

      <div id="userForm">
        <div className="container">
          <h1>{this.props.titleText}</h1>
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

            <div className="form-group">
              <label htmlFor="imgUrl">Profile Image URL:</label>
              <input className="form-control" name="imgUrl" id="imgUrl" type="text" value={this.state.imgUrl} onChange={(event) => this.handleInputChange(event)}></input>
            </div>

            <div className="form-check">
              <input className="form-check-input" name="isMiuStudent" id="isMiuStudent" type="checkbox" checked={this.state.isMiuStudent} onChange={(event) => this.handleInputChange(event)}></input>
              <label className="form-check-label" htmlFor="isMiuStudent">Current MIU Student</label>
            </div>

            <hr></hr>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className="form-control" name="password" id="password" type="password" value={this.state.password} onChange={(event) => this.handleInputChange(event)}></input>
            </div>

            <div className="form-group">
              <label htmlFor="confirm-password">Confirm password:</label>
              <input className="form-control" name="confirmPassword" id="confirm-password" type="password" value={this.state.confirmPassword} onChange={(event) => this.handleInputChange(event)}></input>
            </div>
            {adminSection}
            <div className="form-group">
              <button type="button" className="btn btn-outline-warning m-2" onClick={(event) => { this.onClickCancel(event) }}>Cancel</button>
              <button type="button" className="btn btn-outline-primary m-2" onClick={(event) => { this.onClickSubmit(event) }}>{this.props.buttonText}</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default withRouter(UserForm);