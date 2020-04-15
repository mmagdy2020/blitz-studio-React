import React, { Component } from "react";
// import { Form,Button} from "react-bootstrap";
// import {Link} from "react-router-dom"
// import axios from "axios";
import { connect } from 'react-redux'
import {createClassAsync}from '../store/classState/classAction'




class AddClassRedux extends Component {
  state = {
    title: "",
    instructor: "",
    description: "",
    date: "",
    time: "",
    imgUrl: "",
    isSeries: false,
    seriesClass: [{weekNumber: '',desc: '',timeWeekly: '',day:''}]
  };


 addClassHandler =()=> {

    console.log(this.props)
    this.props.onCreateClass(this.state)
        setTimeout(() => {
      this.props.history.push('/classes')}, 500); // To aviod loading the page without refreshing it...
  
}

  render() {

    return (

      <div id="log-in">
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

            <div className="form-group">
              <label htmlFor="isSeries">isSeries:</label>
              <input className="form-control" name="isSeries" id="isSeries" type="checkbox" value={this.state.isSeries} onChange={(event) => this.setState({ isSeries: event.target.checked })}></input>
            </div>

            <div className="form-group">
            {/* <button type="button" className="btn btn-outline-primary" onClick={this.addClassHandler}>Submit!</button> */}
              
            <button type="button" className="btn btn-outline-primary" onClick={this.addClassHandler}>Submit!</button>

            </div>
          </form>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {

    return {
      onCreateClass: (dClass) => dispatch(createClassAsync(dClass))
    }
  }
export default connect(null,mapDispatchToProps)(AddClassRedux);
