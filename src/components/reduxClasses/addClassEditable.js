import React, { Component } from "react";
// import { Form,Button} from "react-bootstrap";
// import {Link} from "react-router-dom"
// import axios from "axios";
import { connect } from 'react-redux'
import { createClassAsync } from '../store/classState/classAction'
import './createClass.css'


class AddClassRedux extends Component {
  state = {
    dClass:{
    title: "",
    instructor: "",
    description: "",
    date: "",
    time: "",
    imgUrl: "",
    isSeries: false,
    seriesClass: []
  },
  weekNumber: '',
  desc: '',
  timeWeekly: '',
  day:''

  
}

  addClassHandler = () => {
    console.log(this.state.day)
console.log(this.state.desc)
console.log(this.state.weekNumber)


    console.log(this)
    console.log(this.props)
    setTimeout(() => {
      this.props.onCreateClass(this.state.dClass)
      this.props.history.push('/classes')
    }, 500); // To aviod loading the page without refreshing it...

  }


  onCreateNextWeekClass =()=>{
console.log(this.state.day)
console.log(this.state.desc)
console.log(this.state.weekNumber)

  }

  render() {

    console.log(this.state.dClass.isSeries)


    let createSeries = (


      <div id="createS">
        <div className="form-group">

          <div className="form-group">
            <label htmlFor="WeekNumber">Week#: </label>
            <select className="form-control" id="WeekNumber" value={this.state.weekNumber} onChange={(event) => this.setState({ weekNumber: event.target.option })}>
              <option>Week 1</option>
              <option>Week 2</option>
              <option>Week 3</option>
              <option>Week 4</option>
            </select>
          </div>

          <div>
            <label htmlFor="desc">description: </label>
            {/* <input type="desc" class="form-control" id="desc" placeholder="Short description..." /> */}
            <textarea className="form-control" id="desc" rows="3" value={this.state.desc} onChange={(event) => this.setState({ desc: event.target.value })} ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="Day">day: </label>
            <input type="Day" className="form-control" id="day" placeholder=" day.." value={this.state.day} onChange={(event) => this.setState({ day: event.target.value })}/>
            </div>
        

        <div className="form-group">
            <label htmlFor="timeWeekly">time: </label>
            <input type="timeWeekly" className="form-control" id="timeWeekly" placeholder=" time.." value={this.state.timeWeekly} onChange={event => this.setState({timeWeekly: event.target.value})} />
          </div>

          <button onChange={()=>{this.onCreateNextWeekClass()}}>next</button>
          <br/>
        </div>
      </div>

    )

    return (

      <div id="createClass">

        <div className="container">
          <h1>Create a new dance class</h1>
          <form>
            <div className="form-group">
              <label htmlFor="title">Class title:</label>
              <input className="form-control" name="title" id="title" type="text" defaultValue=''  onChange={(event) => this.setState({ dClass:{title: event.target.value }})}></input>
            </div>

            <div className="form-group">
              <label htmlFor="instructor">instructor:</label>
              <input className="form-control" name="instructor" id="instructor" type="text" value={this.state.dClass.instructor || ""} onChange={(event) => this.setState({ dClass:{instructor: event.target.value }})}></input>

            </div>



            <div className="form-group">
              <label htmlFor="description">description:</label>
              <input className="form-control" name="description" id="description" type="text" value={this.state.dClass.description || ""} onChange={(event) => this.setState({ dClass:{description: event.target.value }})}></input>
            </div>

            <div className="form-group">
              <label htmlFor="email">imgUrl:</label>
              <input className="form-control" name="imgUrl" id="imgUrl" type="text" value={this.state.dClass.imgUrl || ""} onChange={(event) => this.setState({ dClass:{imgUrl: event.target.value }})}></input>
            </div>

            <div className="form-group">
              <label htmlFor="date">date:</label>
              <input className="form-control" name="date" id="date" type="date" value={this.state.dClass.date || ""} onChange={(event) => this.setState({ dClass:{date: event.target.value }})}></input>
            </div>

            <div className="form-group">
              <label htmlFor="time">time:</label>
              <input className="form-control" name="time" id="time" type="time" value={this.state.dClass.time || ""} onChange={(event) => this.setState({ dClass:{time: event.target.value }})}></input>
            </div>


            <div className="form-group">
              <label htmlFor="isSeries">isSeries:</label>
              <input className="form-control" name="isSeries" id="isSeries" type="checkbox" value={this.state.dClass.isSeries || ""} onChange={(event) => this.setState({ dClass:{isSeries: event.target.checked }})}></input>
            </div>


      {this.state.dClass.isSeries ? <div>
        <div class="row">
      <div class="col-md-3">{createSeries}</div>
      <div class="col-md-3">{createSeries}</div>
      <div class="col-md-3">{createSeries}</div>
      <div class="col-md-3">{createSeries}</div>
</div>
        </div> : <div></div>}

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
export default connect(null, mapDispatchToProps)(AddClassRedux);
