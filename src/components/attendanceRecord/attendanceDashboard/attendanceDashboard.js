import React, {Component} from 'react';
import './attendanceDashboard.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as attendanceDashboardActions from "../../store/attendanceDashboard/actions";
export default class attendanceDashboard extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-attendance-dashboard">Hello! component attendanceDashboard</div>;
    }
  }
// export default connect(
//     ({ attendanceDashboard }) => ({ ...attendanceDashboard }),
//     dispatch => bindActionCreators({ ...attendanceDashboardActions }, dispatch)
//   )( attendanceDashboard );