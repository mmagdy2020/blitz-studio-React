import React from 'react';

export default class UserThumbnail extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.user.firstname}

      </div>
    )
  }
}