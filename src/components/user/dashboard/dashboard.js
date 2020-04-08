import React from 'react';
import Profile from '../profile/profile';
import UserList from '../userList/userList';
import User from '../user.model';

// Mike: 
import Checkin from '../../attendanceRecord/checkin/checkin';
import AttendanceList from '../../attendanceRecord/attendance/attendanceList';
// import Attendance from '../../attendanceRecord/attendance/attendance';

export default class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {users: []};

  }
  async componentDidUpdate(){
    if (this.props.user.role === "admin" && this.state.users.length === 0){
      let users = await User.GetAllUsers();
      this.setState({ users: users });
    }
    
  }
  // props includes user with current user object. See /components/user/user.model.js
  render() {
    let dash;
    if (!this.props.user) {
      dash = <div>Dashboard unavailable for guests. Please log in to see your dashboard.</div>;
 
    }
    else if (this.props.user.role === "user"){
      // If the active user is of role 'user', show dance student dashboard

      dash = (<div className="container">
        <h1>{this.props.user.firstname}'s Dashboard</h1>
        <Profile user={this.props.user} />

        {/* <Check-in></Check-in>
      <Attendance-viewer></Attendance-viewer> */}
        <Checkin user={this.props.user}/>
      </div>)

    } else if (this.props.user.role === "admin") {
      // If the active user is of role 'user', show admin dashboard

      
      dash = (<div className="container">

        <h1>{this.props.user.firstname}'s Dashboard</h1>
        <hr></hr>
        <h2>Student Check in</h2>
        <hr></hr>
        <h2>All Users</h2>
        <UserList users={this.state.users}></UserList>
        
        <hr></hr>
        <h2>All Classes</h2>
        <hr></hr>
        <h2>Attendance Report</h2>
        <hr></hr>
        <AttendanceList users={this.state.users}/>

      </div>)

      // <all student check-in>
      // <attendance-viewer>
      // <classes-viewer with CRUD>
    }
    return (<div id="dashboard" >
      {dash}
    </div>)

  }
}
