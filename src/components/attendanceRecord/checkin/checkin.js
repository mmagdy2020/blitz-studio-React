import React, { Component } from 'react';
import './checkin.scss';
import axios from 'axios';

// Mike:
import ComingSoon from '../sharedComponents/comingSoon';
import CircleProgress from '../sharedComponents/circleProgress';
import User from '../../../models/user';
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
  images =
    {
      salsa: "https://i.ya-webdesign.com/images/couple-dancing-salsa-png-7.png",
      bachata: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/78117221_2563932770327540_7118699424565428224_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=uQBZXGH_MaYAX-AU3Dz&_nc_ht=scontent-ort2-1.xx&oh=80486fe46b9dc2cedb275eeae25a9837&oe=5EAFAA3F",
      connection: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/75080120_2563932803660870_1666130574189789184_o.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=AmguxEjJSAYAX_MmCFb&_nc_ht=scontent-ort2-1.xx&oh=08393a362f34367b18d72efb3243609e&oe=5EB16557"
    };

  async componentDidMount() {
    let response = await axios.get(axios.defaults.baseURL + '/classes');

    let danceClassesCopy = [...this.state.danceClasses];
    danceClassesCopy = response.data;
    this.setState({ danceClasses: danceClassesCopy });
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
    let classesForTheDay;
    let checkinBtn;
    let checkedInView;
    let user = this.props.user;
    user.attendance = 60;

    console.log('user:.............', user);
    // TODO: to be removed when dance classes have their own imgUrl
    let classes = this.state.danceClasses.map((c, index) => {
      if (/bachata/i.test(c.title)) {
        c.imgUrl = this.images.bachata;
      } else if (/salsa/i.test(c.title)) {
        c.imgUrl = this.images.salsa;
      } else {
        c.imgUrl = this.images.connection;
      }
      return c;
    });

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
      classesForTheDay = <ComingSoon title='This is the class details view' />;
    } else {
      if (classes) {

        classesForTheDay = <div className="classes">
          {classes.map(c => <div key={c._id} className="dance-class">
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
        classesForTheDay = <h1>No Class for today</h1>;
      }
    }

    return (
      <div className="container">
        {classesForTheDay}

        {checkinBtn}

        {checkedInView}
      </div>
    );
  }
}

export default Checkin;