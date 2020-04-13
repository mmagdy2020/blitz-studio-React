import React, { Component } from 'react';
import './attendance.scss';
import { Line } from 'rc-progress';
import CircleImg from '../sharedComponents/circleImg';
import AttendanceEditForm from './attendanceEditForm';
import { groupDuplicates } from '../helper';

const danceClasses = {
  "5e910fbd512ace828c4defd0": "SALSA"
}

class Attendance extends Component {
  state = {
    date: new Date()
  };

  render() {
    let user = this.props.user;

    let userProfile = <div className="img">
      <CircleImg user={user} caption='Bachata' />
      <p>{user.firstname + ' ' + user.lastname}</p>
    </div>;

    let attendanceTracker;
    if (user.attendances.length > 0) {
      user.attendances = groupDuplicates(user.attendances);

      attendanceTracker = user.attendances.map(attendance => (
        <div key={attendance.classId} className="attendance-tracker">
          <Line 
            percent={attendance.count}
            strokeWidth={2}
            strokeColor="#4caf50"
          />
          <span>{danceClasses[attendance.classId]}</span>
        </div>)
      );
    }


      return (
        <div className="user-attendance">
          {userProfile}

          <div className="form-attendance-tracker">
            <AttendanceEditForm user={user} />

            {attendanceTracker}
          </div>

        </div>
      );
    }
  }

  export default Attendance;
