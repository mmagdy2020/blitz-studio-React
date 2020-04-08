import React from 'react';
import Attendance from '../../attendanceRecord/attendance/attendance';
import SearchWithBtn from '../sharedComponents/search';

class AttendanceList extends React.Component {
    render() {
        let header = (
            < div className="attendancelist-header" >
                <div className="header-item"> User Name </div>
                <div className="header-item">Dance Class</div>
                <div className="header-item">Date</div>
                <div className="header-item">Action</div>
            </div >
        );

        let attendanceList = this.props.users.map((user, index) => <Attendance user={user} key={index}></Attendance>
        );

        return (
            <div className="attendance-content">
                <SearchWithBtn />
                {header}
                {attendanceList}
            </div>
        )
    }
}

export default AttendanceList;