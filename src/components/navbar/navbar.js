import React from 'react';
import { Link } from 'react-router-dom';
import UserThumb from '../user/userThumbnail';
import './navbar.css';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: this.props.user };
  }
  onClickLogOut() {
    this.props.onLogOut();
  }
  render() {
    const dashboardLink = this.props.user ?
      <li>
        <Link className="nav-link text-primary" to="/dashboard">Dashboard</Link>
      </li>
        : "";

    const userCorner = this.props.user ?
      <div className="userCorner">
        <UserThumb user={this.props.user}></UserThumb>

        <Link to="/login"><button id="log-out-btn" className="btn btn-outline-primary mr-1" type="button" onClick={() => this.onClickLogOut()}>Log Out</button></Link>
      </div>
      : <div className="userCorner">
        <Link id="log-in-btn" className="btn btn-outline-primary my-2 mr-1 my-sm-0" type="button" to="/login" >Log In</Link>
        <Link id="sign-up-btn" className="btn btn-primary my-2 my-sm-0  mr-1" type="button" to="/signup">Sign up</Link>
      </div>
    return (
      <nav id="navbar" className="navbar navbar-expand-md navbar-light bg-light text-center">
        <Link to="/" className="navbar-brand"><span style={{ visibility: "hidden" }}>Blitz Studio</span></Link>

        <div className="adjustable d-flex">

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/calendar">Calendar</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/classes" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Classes</Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {/* <Link className="dropdown-item" to="/classes/salsa">Salsa</Link>
                  <Link className="dropdown-item" to="/classes/bachata">Bachata</Link>
                  <Link className="dropdown-item" to="/classes/connection">Connection Workshop</Link> */}

                  <Link className="dropdown-item" to="/classes">All Classes</Link>
                  {/* <Link className="dropdown-item" to="/classes/:id">showDetailsClass</Link>  */}

                  <Link className="dropdown-item" to="/add-class">Add Class</Link>

                  <Link className="dropdown-item" to="/classes/connection">Connection Workshop</Link>

                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reviews">Reviews</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              {dashboardLink}
            </ul>
          </div>
          <button className="navbar-toggler mr-1" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {userCorner}
          
        </div>
      </nav>
    )
  }
}