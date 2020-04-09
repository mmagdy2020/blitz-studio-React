import React from 'react';

export default class UserDetail extends React.Component {

  render() {
    let user = this.props.user;
    user.imgUrl = 'https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png';
    return (
      
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{this.props.user.firstname} {this.props.user.lastname}</h3>
          <span className="card-subtitle">{this.props.user.isMiuStudent ? "Student" : ""}</span>
          <p className="card-text">
            e. {this.props.user.email}
            <br></br>
            p. {this.props.user.phone}
          </p>
        </div>
      </div>
    );
  }
}