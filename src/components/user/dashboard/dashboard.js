import React from 'react';
import Profile from '../profile/profile';
import UserDetail from '../userDetail/userDetail';
import UserList from '../userList/userList';
import EditUser from '../editUser/editUser';
import User from '../../../models/user';

//Mahmoud
import FetchClasses from '../../reduxClasses/fetchClasses'

// Mike: 
import Checkin from '../../attendanceRecord/checkin/checkin';
import AttendanceList from '../../attendanceRecord/attendance/attendanceList';
import { withRouter } from 'react-router-dom';
// import Attendance from '../../attendanceRecord/attendance/attendance';


// has props: user, onUserChange(user), 
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [], mode: "view", selectedUser: null };

  }
  /**
   * Dashboard event handlers
   */
  async onClickDeleteUser(user) {
    const question = (user._id === this.props.user._id) ? "Deleting your account will log you out. Are you sure you want to delete your account?" : "Are you sure you want to delete the user " + user.firstname;
    let confirmation = window.confirm(question);
    // console.log("confirmation:", confirmation);
    if (confirmation) {
      const success = await User.DeleteUserById(user._id);
      // console.log("delete by id response:", response);
      if (success) {
        if (user._id === this.props.user._id) {
          this.props.onUserChange(null);
          this.props.history.push('/login');
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

    
    if (updatedUser) { // successful update
      if (this.props.user._id === formUser._id) { 
        console.log("Edited active user.")
        this.props.onUserChange(updatedUser); 
        this.setState({ mode: "view", selectedUser: null, user: updatedUser });

        if(this.props.user.role === User.ROLES.ADMIN){
          let users = await User.GetAllUsers();
          this.setState({ users });
        }
        
      } else {
        console.log("admin changed another user");
        let users = await User.GetAllUsers();
        this.setState({ users: users, mode: "view", selectedUser: null });
      }
    } else {
      alert("Changes weren't saved.");
    }
  }
  /**
  * Admin Panel event handlers and data fetchers
  */
  onClickStudentCheckIn(event) {
    if (this.state.users.length === 0) {
      this.getUsersData();
    }
  }
  onClickUserManager(event) {
    if (this.state.users.length === 0) {
      this.getUsersData();
    }
  }
  onClickClassesManager(event) {
    if (this.state.users.length === 0) {
      //  TODO: Add call to get classes
    }
  }
  async getUsersData() {
    if (this.props.user.role === User.ROLES.ADMIN && this.state.users.length === 0) {
      let users = await User.GetAllUsers();
      this.setState({ users: users });
    }
  }


  render() {
    console.log("dashboard props.user", this.props.user)
    let dash;
    if (!this.props.user) {
      dash = <div>Dashboard unavailable for guests. Please log in to see your dashboard.</div>;

    }
    else if (this.props.user.role === User.ROLES.USER) {
      // If the active user is of role 'user', show dance student dashboard

      dash = (<div className="container">
        <h1>{this.props.user.firstname}'s Dashboard</h1>
        <Profile user={this.props.user} />

        {this.state.mode === "edit" ? <EditUser user={this.props.user} onUserChange={user => this.onSaveChangesToEditUser(user)} onCancel={_ => this.setState({ mode: "view" })} ></EditUser> : <UserDetail user={this.props.user} onClickDelete={user => this.onClickDeleteUser(user)} onClickEdit={user => this.onClickEditUser(user)} />}

        {/* <Check-in></Check-in>
      <Attendance-viewer></Attendance-viewer> */}
        <Checkin user={this.props.user} />
      </div>)

    } else if (this.props.user.role === User.ROLES.ADMIN) {
      // If the active user is of role 'user', show admin dashboard


      dash = (<div className="container">

        <h1>{this.props.user.firstname}'s Dashboard</h1>
        <div id="accordion">
          <div className="card">
            <div className="card-header" id="headingOne">
              <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" onClick={event => { this.onClickStudentCheckIn(event) }}>
                <h5 className="mb-0">Student Check-in</h5>
              </button>
            </div>
            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
              <div className="card-body">
                <AttendanceList users={this.state.users} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onClick={event => { this.onClickUserManager(event) }}>
                <h5 className="mb-0">
                  User Manager
                </h5>
              </button>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div className="card-body">
                {this.state.mode === "edit" ? <EditUser user={this.state.selectedUser} hasAdminAccess={true} onUserChange={user => this.onSaveChangesToEditUser(user)} onCancel={_ => this.setState({ mode: "view" })} ></EditUser> : <UserList users={this.state.users} onClickDelete={user => this.onClickDeleteUser(user)} onClickEdit={user => this.onClickEditUser(user)} />}
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <h5 className="mb-0">
                  Class Manager
              </h5>
              </button>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div className="card-body">
                All the classes go here
                <FetchClasses isAuth={this.props.user.role}/>
              </div>
            </div>
          </div>
        </div>
      </div>)
    }
    return (<div id="dashboard" >
      {dash}
    </div>)

  }
}

export default withRouter(Dashboard)