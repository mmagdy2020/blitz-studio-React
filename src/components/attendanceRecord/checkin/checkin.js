import React, { Component } from 'react';
import './checkin.scss';
import axios from 'axios';

// Mike:
import ComingSoon from '../sharedComponents/comingSoon';
import CircleProgress from '../sharedComponents/circleProgress';
import Attendance from '../attendance/attendance';

class Checkin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      danceClasses: [],
      viewDetails: false,
      isCheckedIn: false
    };

  }
  
  async componentDidMount() {
    let response = await axios.get(axios.defaults.baseURL + '/classes');

    this.setState((state, props) => ({
      danceClasses: response.data
    }));
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  onLearnMoreBtnClick() {
    let stateCoppy = { ...this.state };
    stateCoppy.viewDetails = !this.state.viewDetails;
    this.setState(stateCoppy);
  }

  onCheckinBtnClick() {
    let stateCoppy = { ...this.state };
    stateCoppy.isCheckedIn = !this.state.isCheckedIn;
    this.setState(stateCoppy);
  }

  render() {
    let classesForTheDayView;
    let checkinBtn;
    let checkedInView;
    let user = this.props.user;
    user.attendance = 60;
    let classesForTheDay = this.state.danceClasses;

    if (user.role === 'admin') {
      checkedInView = <Attendance
        title='Checked in view'
        user={user} />
    } else if (this.state.isCheckedIn) {
      checkedInView = <CircleProgress
        title='Checked in view'
        user={user}
      />
    } else if (this.state.viewDetails) {
      classesForTheDayView = <ComingSoon title='This is the class details view' />;
    } else {
      console.log(classesForTheDay)
      if (classesForTheDay) {
        classesForTheDayView = <div className="classes">
          {classesForTheDay.map(c => <div key={c._id} className="dance-class">
            <div className="dance-class-info">
              <div>
                <img src={c.imgUrl} alt="salsa dance" />
              </div>
              <div>
                <h3>{c.title}</h3>
                <p>{c.description.substr(0, 140)}...</p>
              </div>
            </div>

            <div className="dance-class-action">
              <button
                className="btn btn-primary"
                onClick={() => this.onLearnMoreBtnClick()}
              > LEARN MORE >></button>
            </div>

          </div>
          )}
        </div>;
        checkinBtn = <button
          className="btn-checkin"
          onClick={() => this.onCheckinBtnClick()}
        >CHEKIN</button>;

      } else {
        classesForTheDayView = <h1>No Class for today</h1>;
      }
    }

    return (
      <div className="container">
        {classesForTheDayView}

        {checkinBtn}

        {checkedInView}
      </div>
    );
  }
}

export default Checkin;