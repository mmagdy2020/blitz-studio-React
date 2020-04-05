import React, {Component} from 'react';
import './attendanceNav.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as attendanceNavActions from "../../store/attendanceNav/actions";
export default class attendanceNav extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-attendance-nav">Hello! component attendanceNav</div>;
    }
  }
// export default connect(
//     ({ attendanceNav }) => ({ ...attendanceNav }),
//     dispatch => bindActionCreators({ ...attendanceNavActions }, dispatch)
//   )( attendanceNav );