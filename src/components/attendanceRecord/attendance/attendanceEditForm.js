import React from 'react';

const AttendanceEditForm = (props) => {
    let user = props.user;
    let danceClasses = ['Salsa', 'Bachata', 'Connection Dance Workshops'];
    return (
        <div className="atendance-edit-form">
            <div className="attendance-classoptions">
                <select className="form-control" >
                    <option>{danceClasses[0]}</option>
                    <option>{danceClasses[1]}</option>
                    <option>{danceClasses[2]}</option>
                </select>

            </div>

            <div className="user-attendance-item">
                <input
                    className="form-control"
                    type="date" />
            </div>

            <div className="user-attendance-item">
                <button className="btn btn-success">Checkin</button>
            </div>

        </div>
    );
}

export default AttendanceEditForm;
