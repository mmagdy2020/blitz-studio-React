import React from 'react';
import Profile from '../profile/profile';
import UserDetail from '../userDetail/userDetail';
import UserList from '../userList/userList';
import EditUser from '../editUser/editUser';
import User from '../../../models/user';

// Mike: 
import Checkin from '../../attendanceRecord/checkin/checkin';
import AttendanceList from '../../attendanceRecord/attendance/attendanceList';
// import Attendance from '../../attendanceRecord/attendance/attendance';


// has props: user, onUserChange(user), 
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [], mode: "view", selectedUser: null };

  }
  async componentDidUpdate() {
    if (this.props.user.role === "admin" && this.state.users.length === 0) {
      let users = await User.GetAllUsers();
      this.setState({ users: users });
    }
  }
  async onClickDeleteUser(user) {
    const question = (user._id === this.props.user._id) ? "Deleting your account will log you out. Are you sure you want to delete your account?" : "Are you sure you want to delete the user " + user.firstname;
    let confirmation = window.confirm(question);
    // console.log("confirmation:", confirmation);
    if (confirmation) {
      const success = await User.DeleteUserById(user._id);
      // console.log("delete by id response:", response);
      if (success){
        if (user._id === this.props.user._id) {
          this.props.onUserChange(user);
        } else {
          let users = await User.GetAllUsers();
          this.setState({ users: users });
        }
      } else {
        alert("Could not delete user.")
      }
    }
  }
  async onClickEditUser(user) {
    this.setState({ mode: "edit", selectedUser: user });

  }
  async onSaveChangesToEditUser(formUser) {
    // send post request to create user
    // console.log("Dashboard: onSaveChangesToEditUser: formUser", formUser);
    if (formUser.password === "") {
      delete formUser.password;
    }
    let updatedUser = await User.UpdateUser(formUser);
    // console.log("onSaveChagnesToEditUser, after server update call:", updatedUser);
    // console.log("this.props.user.id", this.props.user._id);
    // console.log("formUser", formUser);
    if (updatedUser) {
      if (this.props.user._id === formUser._id) {
        // console.log("Edited active user.")
        this.props.onUserChange(updatedUser);
        this.setState({mode: "view"});
      } else {
        // console.log("admin changed another user");
        let users = await User.GetAllUsers();
        this.setState({ users: users, mode: "view" });
      }
    } else {
      alert("Changes weren't saved.");
    }
  }
  // props includes user with current user object. See /components/user/user.model.js
  render() {
    let dash;
    if (!this.props.user) {
      dash = <div>Dashboard unavailable for guests. Please log in to see your dashboard.</div>;

    }
    else if (this.props.user.role === "user") {
      // If the active user is of role 'user', show dance student dashboard

      dash = (<div className="container">
        <h1>{this.props.user.firstname}'s Dashboard</h1>
        <Profile user={this.props.user} />

        {this.state.mode === "edit" ? <EditUser user={this.props.user} onUserChange={user => this.onSaveChangesToEditUser(user)} onCancel={_ => this.setState({ mode: "view" })} ></EditUser> : <UserDetail user={this.props.user} onClickDelete={user => this.onClickDeleteUser(user)} onClickEdit={user => this.onClickEditUser(user)} />}

        {/* <Check-in></Check-in>
      <Attendance-viewer></Attendance-viewer> */}
        <Checkin user={this.props.user} />
      </div>)

    } else if (this.props.user.role === "admin") {
      // If the active user is of role 'user', show admin dashboard


      dash = (<div className="container">

        <h1>{this.props.user.firstname}'s Dashboard</h1>
        <hr></hr>
        <h2>Student Check in</h2>
        <hr></hr>
        <h2>User Manager</h2>
        {/* <UserList users={this.state.users}></UserList> */}
        {this.state.mode === "edit" ? <EditUser user={this.state.selectedUser} hasAdminAccess={true} onUserChange={user => this.onSaveChangesToEditUser(user)} onCancel={_ => this.setState({ mode: "view" })} ></EditUser> : <UserList users={this.state.users} onClickDelete={user => this.onClickDeleteUser(user)} onClickEdit={user => this.onClickEditUser(user)} />}


        <hr></hr>
        <h2>All Classes</h2>
        <hr></hr>
        <h2>Attendance Report</h2>
        <hr></hr>
        <AttendanceList users={this.state.users} />

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
