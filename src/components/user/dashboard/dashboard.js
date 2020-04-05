import React from 'react';

export default class Dashboard extends React.Component {

  render() {
    if (this.props.user.role === "user") {
      //render  user dashboard

      // <Profile></Profile>
      //   <Check-in></Check-in>
      //   <Attendance-viewer></Attendance-viewer>
    } else if (this.props.user.role === "admin") {
      // render admin dashboard
    }
    return "";

  }
}
