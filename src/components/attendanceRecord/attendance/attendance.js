import React, { Component } from 'react';
import './attendance.scss';

// for calendar
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// for progress bar
import LineProgress from '../progress/lineProgress';


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
    let name = 'John Doe';
    let imgUrl = 'https://i.picsum.photos/id/3/5616/3744.jpg';
    let attendance = 60;
    let danceClasses = ['Salsa', 'Bachata', 'Connection Dance Workshops'];

    return (
      <div className="container">
        <div className="attendance-search">
          <div className="attendance-search-item">
            <input
              className="form-control"
              type="text"
              placeholder="Search User" /></div>
          <div className="attendance-search-item">
            <button className="btn btn-primary">Search</button>
          </div>

        </div>


        <div className="users">
          {/* Header */}
          <div className="user-attendance-header">
            <div className="user-attendance-header-item">
              User Name
            </div>
            <div className="user-attendance-header-item">Dance Class</div>
            <div className="user-attendance-header-item">Date</div>
            <div className="user-attendance-header-item">Action</div>

          </div>
          {/* content */}
          <div className="user-attendance">
            <div className="user-attendance-item">
            ////////
            </div>

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
          <div className="user-attendance">
            <div className="user-attendance-item">
              <img src={imgUrl} />
              <span> {name}</span>
              
              <LineProgress caption='Salsa' attendance={attendance}/>
              <LineProgress caption='Bachata' attendance={attendance}/>
              <LineProgress caption='Connection Dance' attendance={attendance}/>

            </div>
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
          
        </div>


        {/* <Calendar
          onChange={this.onChange}
          value={this.state.date}
        /> */}
      </div>

    );
  }
}

export default Attendance;