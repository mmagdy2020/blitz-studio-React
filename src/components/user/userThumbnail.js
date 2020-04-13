import React from 'react';
import CircleImgWithName from '../attendanceRecord/sharedComponents/circleImg';

export default class UserThumbnail extends React.Component {
  render() {
    return (
      <div className="container">
        <CircleImgWithName user={this.props.user}/>

      </div>
    )
  }
}