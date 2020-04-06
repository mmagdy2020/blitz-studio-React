import React from 'react';
import Profile from '../profile/profile';

export default class Dashboard extends React.Component {
  // props includes user with current user object. See /components/user/user.model.js
  render() {
    if (!this.props.user){
      return <div>Dashboard unavailable for guests</div>
    }
    if (this.props.user.role === "user") {
      // If the active user is of role 'user', show dance student dashboard

      return <div>
        <Profile user={this.props.user}/>

      {/* <Check-in></Check-in>
      <Attendance-viewer></Attendance-viewer> */}
      </div>

      
    } else if (this.props.user.role === "admin") {
      // If the active user is of role 'user', show admin dashboard

      // <all student check-in>
      // <attendance-viewer>
      // <classes-viewer with CRUD>

      return <div>I am an admin dashboard</div>
    }

  }
}
