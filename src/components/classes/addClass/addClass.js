import React, { Component } from "react";
// import { Form,Button} from "react-bootstrap";
import {Link} from "react-router-dom"
import axios from "axios";

class AddClass extends Component {
  state = {
    title: "",
    instructor: "",
    description: "",
    date: "",
    time: "",
    imgUrl: "",
    // isSeries:  "",
    // isDropInCLass: "",
    // isPartOfSeries: ""
  };

  componentDidMount () {
    console.log(this.props);
}

 addClassHandler =()=> {
  console.log('hiiii')
    const data =  {
        title: this.state.title,
        instructor: this.state.instructor,
        description: this.state.description,
        date: this.state.date,
        time: this.state.time,
        imgUrl: this.state.imgUrl,
        // isSeries: this.state.isSeries,
        // isDropInCLass: this.state.isDropInCLass,
        // isPartOfSeries: this.state.isPartOfSeries
    };

    console.log(data)
   axios.post('/classes', data)
        .then(response => { 
            console.log(response);
        });
}

  render() {
    // console.log("hi2");

    return (

      <div id="sign-up">
        <div className="container">
          <h1>Create a new dance class</h1>
          <form>
            <div className="form-group">
              <label htmlFor="title">Class title:</label>
              <input className="form-control" name="title" id="title" type="text" value={this.state.title} onChange={(event)=>this.setState({title:event.target.value})}></input>
            </div>

            <div className="form-group">
              <label htmlFor="instructor">instructor:</label>
              <input className="form-control" name="instructor" id="instructor" type="text" value={this.state.instructor} onChange={(event)=>this.setState({instructor:event.target.value})}></input>

            </div>



            <div className="form-group">
              <label htmlFor="description">description:</label>
              <input className="form-control" name="description" id="description" type="text" value={this.state.description} onChange={(event)=>this.setState({description: event.target.value}) }></input>
            </div>

            <div className="form-group">
              <label htmlFor="email">imgUrl:</label>
              <input className="form-control" name="imgUrl" id="imgUrl" type="text" value={this.state.imgUrl} onChange={(event)=>this.setState({imgUrl:event.target.value}) }></input>
            </div>

            <div className="form-group">
              <label htmlFor="date">date:</label>
              <input className="form-control" name="date" id="date" type="date" value={this.state.date} onChange={(event)=> this.setState({date:event.target.value})}></input>
            </div>

            <div className="form-group">
              <label htmlFor="time">time:</label>
              <input className="form-control" name="time" id="time" type="time" value={this.state.time} onChange={(event)=>this.setState({time:event.target.value}) }></input>
            </div>


            {/* <div className="form-check">
              <input className="form-check-input" name="isMiuStudent" id="isMiuStudent" type="checkbox" checked={this.state.isMiuStudent} onChange={ }></input>
              <label className="form-check-label" htmlFor="isMiuStudent">Current MIU Student</label>
            </div>
            <hr></hr> */}


            <div className="form-group">
            {/* <button type="button" className="btn btn-outline-primary" onClick={this.addClassHandler}>Submit!</button> */}
              
              <Link to="/classes"><button type="button" className="btn btn-outline-primary" onClick={this.addClassHandler}>Submit!</button></Link>

            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddClass;
