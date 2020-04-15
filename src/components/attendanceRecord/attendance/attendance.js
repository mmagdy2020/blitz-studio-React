import React, { Component } from 'react';
import './attendance.scss';
import { Line } from 'rc-progress';
import CircleImg from '../sharedComponents/circleImg';
import AttendanceEditForm from './attendanceEditForm';
import { groupDuplicates } from '../helper';



const Attendance = (props) => {
  const danceClasses = props.danceClasses;
  const user = props.user;

  let userProfile = <div className="img">
    <CircleImg user={user} caption='Bachata' />
    <p>{user.firstname + ' ' + user.lastname}</p>
  </div>;

  let attendanceTracker;
  if (user.attendances.length > 0) {
    // grouping attendances of the same class
    user.attendances = groupDuplicates(user.attendances);

    attendanceTracker = user.attendances.map(attendance => {
      // to map  the attendanceId with its name
      let dc = danceClasses.find(c => c._id === attendance.classId);

      return <div key={attendance.classId} className="attendance-tracker">
        <Line
          percent={attendance.count}
          strokeWidth={2}
          strokeColor="#4caf50"
        />
        <span>{dc ? dc.title : ''}</span>
      </div>
    });
  }


  return (
    <div className="user-attendance">
      {userProfile}

      <div className="form-attendance-tracker">
        <AttendanceEditForm
          danceClasses={props.danceClasses}
          user={user}
          attendanceDate={props.attendanceDate}
          attendedClassId={props.attendedClassId}
          onAttendanceEditInputChange={props.onAttendanceEditInputChange}
          onSaveBtnClick={props.onSaveBtnClick}
          onUserListChange={props.onUserListChange}
          onUserChange={props.onUserChange}
        />

        {attendanceTracker}
      </div>

    </div>
  );
}


export default Attendance;
