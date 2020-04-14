import React from 'react';
import './userThumbnail.css'
export default class UserThumbnail extends React.Component {
  render() {
    const name = this.props.user.firstname;
    return (
      <div className="user-thumbnail">
          <img src={this.props.user.imgUrl} alt={name} />
          <span>{name }</span>

      </div>
    )
  }
}