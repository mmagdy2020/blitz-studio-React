import React, {Component} from 'react';
import './attendanceCheckin.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as attendanceCheckinActions from "../../store/attendanceCheckin/actions";
export default class attendanceCheckin extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-attendance-checkin">Hello! component attendanceCheckin</div>;
    }
  }
// export default connect(
//     ({ attendanceCheckin }) => ({ ...attendanceCheckin }),
//     dispatch => bindActionCreators({ ...attendanceCheckinActions }, dispatch)
//   )( attendanceCheckin );