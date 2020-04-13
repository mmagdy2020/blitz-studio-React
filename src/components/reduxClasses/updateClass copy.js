import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getUpdateClass } from '../store/classState/classAction'



class UpdateClass extends Component {
  //Intilie the state to be the choosen Class...
  state = this.props.location.state.class

  updateClassHandeller() {
    console.log(this.props )
    //Dispatch updateClass 
    this.props.onUpdateClass(this.state._id, this.state)
    setTimeout(() => {
      this.props.history.push('/classes')}, 500); // To aviod loading the page without refreshing it...
  }

  render() {
    console.log(this.props )
    // console.log(this.state)

    // console.log(this.props.match.params.id)
    // console.log(this.props)

    return (


      <div id="sign-up">
        <div className="container">
          <h1>update a  {} class</h1>
          <form>
            <div className="form-group">
              <label htmlFor="title">Class title:</label>
              <input className="form-control" name="title" id="title" type="text" value={this.state.title || ""} onChange={(event) => this.setState({ title: event.target.value })}></input>
            </div>

            <div className="form-group">
              <label htmlFor="instructor">instructor:</label>
              <input className="form-control" name="instructor" id="instructor" type="text" value={this.state.instructor || ""} onChange={(event) => this.setState({ instructor: event.target.value })}></input>

            </div>


            <div className="form-group">
              <label htmlFor="description">description:</label>
              <input className="form-control" name="description" id="description" type="text" value={this.state.description || ""} onChange={(event) => this.setState({ description: event.target.value })}></input>
            </div>

            <div className="form-group">
              <label htmlFor="email">imgUrl:</label>
              <input className="form-control" name="imgUrl" id="imgUrl" type="text" value={this.state.imgUrl || ""} onChange={(event) => this.setState({ imgUrl: event.target.value })}></input>
            </div>

            <div className="form-group">
              <label htmlFor="date">date:</label>
              <input className="form-control" name="date" id="date" type="date" value={this.state.date || ""} onChange={(event) => this.setState({ date: event.target.value })}></input>
            </div>

            <div className="form-group">
              <label htmlFor="time">time:</label>
              <input className="form-control" name="time" id="time" type="time" value={this.state.time || ""} onChange={(event) => this.setState({ time: event.target.value })}></input>
            </div>

            <div className="form-group">

              <button type="button" className="btn btn-outline-primary" onClick={() => this.updateClassHandeller()}>Update!</button>

            </div>
          </form>
        </div>
      </div>

    )
  }
}


// No need for this mapping....
const mapStateToProps = (state) => {
  return {
    // class : state.class,
    class: state.clss.class
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onGetCLass:(id) => dispatch(getClassDetails(id)),
    onUpdateClass: (id, classUpdated) => dispatch(getUpdateClass(id, classUpdated))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateClass)