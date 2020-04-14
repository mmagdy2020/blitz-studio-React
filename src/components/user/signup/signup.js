import React from 'react';
import User from '../../../models/user';
import UserForm from '../userForm/userForm';
import {
  Link,
  withRouter
} from 'react-router-dom'

// has props: onUserLoggedIn(user)
class SignUp extends React.Component {
  async onClickSignUp(formUser) {
    // send post request to create user
    console.log("formUser:", formUser);
    let user = await User.AddNewUser(formUser);
    if (user) {
      // on successful creation, try to log in user
      // console.log("user was created.")
      const authUser = await User.LogInUser(user.email, user.password);

      // console.log("auth user",authUser);
      if (authUser) {
        // On successful log in
        // console.log("user logged in:", authUser);

        // emit 'event' that user logged in
        this.props.onUserLoggedIn(authUser);
        this.props.history.push('/dashboard');

      } else {
        alert("A new account was created. Click Log in and sign in for the first time!");
      }

    } else {
      // TODO: on failure to create new user, show error
      alert("An acount already exists for this email address.");
    }
  }
  render() {
    return (

      <div id="sign-up">
        <UserForm onSubmit={user => this.onClickSignUp(user)} onCancel={_ => this.props.history.push('/')} titleText="Create an account" buttonText="Sign up!" footer={<div>Already have an account? <Link to='/login'>Log in</Link></div>} />

        
      </div>
    )
  }
}
export default withRouter(SignUp);