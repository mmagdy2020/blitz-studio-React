import React from 'react';
import Attendance from './attendance';
import SearchWithBtn from '../sharedComponents/search';
import { getUserAttendance } from '../helper';

class UserListWithAttendance extends React.Component {

    state = {
        users: this.props.users,
        attendanceFetched: false
    }

    onShowAttendancClick = async () => {
        // get attendance history for each user
        let response = this.props.users.map(async (u) => {
            const res = await getUserAttendance(u._id);
            u.attendances = res;
            return u;

        });

        let usersWithAttendance = await Promise.all(response);

        this.setState({ users: usersWithAttendance, attendanceFetched: !this.state.attendanceFetched })
    }

    render() {
        let header,search, attendanceList = '';

        if (this.state.attendanceFetched) {
            search = <SearchWithBtn />;
            header  = (
                < div className="attendancelist-header" >
                    <div className="header-item"> User Name </div>
                    <div className="header-item">Dance Class</div>
                    <div className="header-item">Date</div>
                    <div className="header-item">Action</div>
                </div >

            );

            attendanceList = this.state.users.map(user => <Attendance user={user} key={user._id}></Attendance>
            );
        } 

        return (
            <div className="attendance-content">
                <button className="btn btn-primary" onClick={() => this.onShowAttendancClick()}>Show Attendance</button>
                
                {search}
                {header}
                {attendanceList}
            </div>
        )
    }
}

export default UserListWithAttendance;