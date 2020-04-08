import React, { Component } from 'react';
import './attendance.scss';

// Mike:
import LineProgress from '../sharedComponents/lineProgress';
// import User from '../../../models/user';


class Attendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  onChange = date => {
    console.log('picked data: ', date);
    this.setState({ date });
    console.log(this.state)
  }

  render() {
    // let user = new User();
    let user = this.props.user;
    let danceClasses = ['Salsa', 'Bachata', 'Connection Dance Workshops'];

    return (
      <div className="user-attendance">
        <LineProgress user={user} caption='Bachata' />
        <div className="user-attendance-item">
          <select className="form-control" value={danceClasses[1]}>
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
}

export default Attendance;