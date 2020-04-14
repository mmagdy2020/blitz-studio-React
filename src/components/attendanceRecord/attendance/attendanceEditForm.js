import React from 'react';

const AttendanceEditForm = (props) => {
    let user = props.user;
    console.log(props)
    let danceClasses = props.danceClasses;
    let options = danceClasses.map(c => <option key={c._id} value={c._id}>{c.title}</option>);

    return (
        <form className="atendance-edit-form">
            <div className="attendance-classoptions">
                <select
                    required
                    className="form-control"                    
                    name="attendedClass"
                    value={props.attendedClass}
                    onChange={(event) => props.onAttendanceEditInputChange(event)}>
                    
                    <option >---select---</option>
                    {options}
                </select>

            </div>

            <div className="user-attendance-item">
                <input
                    required
                    className="form-control"
                    type="date"
                    max='04/13/2020'
                    name="attendanceDate"
                    value={props.attendanceDate}
                    onChange={(event) => props.onAttendanceEditInputChange(event, user._id)}
                />
            </div>

            <div className="user-attendance-item">
                <button type="submit" className="btn btn-success"
                    onClick={(event) => props.onSaveBtnClick(event, user)}
                >Save</button>
            </div>

        </form>
    );
}

export default AttendanceEditForm;
