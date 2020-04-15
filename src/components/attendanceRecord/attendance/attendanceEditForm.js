import React, { Component } from 'react';
import { getClasses, getUserAttendance, createSingleAttendance, updateUserBalance } from '../helper';
class AttendanceEditForm extends Component {

    state = {
        attendedClassId: '',
        attendedDate: Date.now()
    }

    onAttendanceEditInputChange = (event) => {
        console.log(event.target);
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    onSaveBtnClick = async (event, user) => {
        event.preventDefault();
        console.log(event.target);
   
        let classId = this.state.attendedClassId;
        if (classId) {

            // creating a new attendance record
            let response = await createSingleAttendance(classId, user._id);
            console.log('Inside onSaveBtnClick...new attendance created!', response);

            // update state
            this.setState({
                attendanceDate: '',
                attendedClassId: '',
                attendanceFetched: true
            });

            // make a patch request to /users/userId to update the balance
            response = await updateUserBalance(user);

            // this.props.onUserChange(response);

            this.props.onUserListChange();

            console.log('Inside onSaveBtnClick...user balance updated!', response);
        }

    }

    render() {
        let user = this.props.user;
        let danceClasses = this.props.danceClasses;
        let options = danceClasses.map(c => <option key={c._id} value={c._id}>{c.title}</option>);
        // let attendedClassId = "attendedClassId" + user._id;
        // let attendanceDate = "attendanceDate" + user._id;
        return (
            <form className="atendance-edit-form">
                <div className="attendance-classoptions">
                    <select
                        required
                        className="form-control"
                        name="attendedClassId"
                        value={this.state.attendedClassId}
                        onChange={(event) => this.onAttendanceEditInputChange(event)}>

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
                        name="attendedDate"
                        value={this.state.attendedDate}
                        onChange={(event) => this.onAttendanceEditInputChange(event)}
                    />
                </div>

                <div className="user-attendance-item">
                    <button type="submit" className="btn btn-success"
                        onClick={(event) => this.onSaveBtnClick(event, user)}
                    >Save</button>
                </div>

            </form>
        );
    }
}

export default AttendanceEditForm;
