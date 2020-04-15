import React from 'react';

// has props: user, onClickEdit(user), onClickDelete(user)
export default class UserDetail extends React.Component {
  onClickDeleteUser() {
    this.props.onClickDelete(this.props.user)

  }
  onClickEditUser() {
    this.props.onClickEdit(this.props.user);

  }
  render() {
    let user = { ...this.props.user };
    user.imgUrl = user.imgUrl || 'https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png';
    return (

      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="d-none d-sm-block col-sm-5 col-md-2">
              <img alt="Profile" className="card-img" src={user.imgUrl}></img>
            </div>
            <div className="col-xs-10 col-sm-7 col-md-6">
              <h3 className="card-title">{this.props.user.firstname} {this.props.user.lastname} {this.props.user.role === "admin" ? <span className="small">(Admin)</span> : null}</h3>
              <span className="card-subtitle">{this.props.user.isMiuStudent ? "Student" : ""}</span>
              <p className="card-text">
                email: <span className="text-primary">{this.props.user.email}</span>
                <br></br>
                phone: {this.props.user.phone}
                <br></br>
                balance: <span className={this.props.user.balance <= 0 ? "text-danger" : ""} >${this.props.user.balance}</span>
              </p>
            </div>
            <div className="col-xs-12 col-md-4">
              <button type="button" onClick={_ => { this.onClickEditUser() }} className="btn btn-outline-info mr-2 my-2">Edit</button>
              <button type="button" onClick={_ => { this.onClickDeleteUser() }} className="btn btn-outline-danger my-2">Delete</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}