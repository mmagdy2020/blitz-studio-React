import React, { Component } from 'react';
import './checkin.scss';
import { getClasses, getUserAttendance, createAttendance, updateUserBalance } from '../helper';
import User from '../../../models/user';

// Mike:
import ComingSoon from '../sharedComponents/comingSoon';
import CheckinSuccessView from './checkinSuccessView';
import UserListWithAttendance from '../attendance/userListWithAttendance';

class Checkin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classesForTheDay: [],
      viewDetails: false,
      isCheckedIn: false,
      checkedInClasses: [],
      attendances: []
    };

  }

  onDanceClassClick = async(event, classId) => {
    const checkedInClassesCoppy = [...this.state.checkedInClasses];
    let foundIndex = checkedInClassesCoppy.findIndex(c => c.classId === classId);
    console.log('foundIndex...', foundIndex);
    if (foundIndex === -1) {
      checkedInClassesCoppy.push({ classId: classId, checkedIn: true })
    } else {
      checkedInClassesCoppy.splice(foundIndex, 1);
    }

    this.setState({
      checkedInClasses: checkedInClassesCoppy
    }
    );
  }

  onLearnMoreBtnClick = () =>{
    let stateCoppy = { ...this.state };
    stateCoppy.viewDetails = !this.state.viewDetails;
    this.setState(stateCoppy);
  }

  onCheckinBtnClick = async () => {
    // creating attendance record for each classes
    let user = this.props.user;

    await createAttendance(this.state.checkedInClasses, user);

    // update user balance
    let amount = this.state.checkedInClasses.length * 10;
    await updateUserBalance(user, amount);

    this.setState((state, props) => ({
      isCheckedIn: true
    }));
  }



  async componentDidMount() {
    let classes = await getClasses();
    console.log('classes : ', classes);

    let attendances = await getUserAttendance(this.props.user._id);
    console.log('user attendances: ', attendances);

    this.setState((state, props) => ({
      danceClasses: classes,
      attendances: attendances
    }));
  }

  async componentDidUpdate() {
    // get updated user/ user list
    // let users = await User.GetAllUsers();
    
    // console.log('inside componentDidUpdate update user list: ', users);
  }

  render() {
    let user = this.props.user;
    let classesForTheDay = this.state.danceClasses;
    let classesForTheDayView;
    let checkinBtn;
    let afterLoginView;

    user.checkedInClasses = this.state.checkedInClasses;
    user.attendances = this.state.attendances;
    


    if (user.role === 'admin') {
      afterLoginView = <UserListWithAttendance user={user}  />
    } else if (this.state.isCheckedIn) {
      afterLoginView = <CheckinSuccessView user={user} danceClasses={this.state.danceClasses} />
    } else if (this.state.viewDetails) {
      classesForTheDayView = <ComingSoon />
    } else {
      if (classesForTheDay) {
        classesForTheDayView = <div className="classes">
          {classesForTheDay.map(c => <div key={c._id} className="dance-class">

            <div
              className={this.state.checkedInClasses.find(cdc => cdc.classId === c._id) ? "dance-class-info checked-dance-class" : "dance-class-info"}
              onClick={(event) => this.onDanceClassClick(event, c._id)}>
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

        {afterLoginView}
      </div>
    );
  }
}

export default Checkin;