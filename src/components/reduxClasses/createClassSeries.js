import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getClassDetails, createClassSerie } from '../store/classState/classAction'
import './createClass.css'

class CreateSerie extends Component {
  constructor(props){
    super(props)

    console.log(this.props)

     this.state = {
        weekNumber: "",
        desc: "",
        day: "",
        timeWeekly: ""
      }
    }

  onCreateNextWeekClass() {
    const id = this.props.match.params.id
    const classSeries = this.state
    this.props.onCreateSerie(id,classSeries)
    setTimeout(() => {
      this.props.history.push('/classes')}, 500)
    
  }
  
// Handle event using handleFunction instead of using this.setState on the dom.
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.id;

    this.setState({[name] : value})
    // console.log(this.state)
  }



  render() {

    return (
      <center>
        {this.props.class ?
          <div id="createS">
            <div className="form-group">

              <div className="form-group">
                <label htmlFor="WeekNumber">Week#: </label>
                <select className="form-control" id="weekNumber" value={this.state.weekNumber || ''} onChange={(event) => this.handleInputChange(event)}>
                 <option>Choose One</option>
                  <option>Week 1</option>
                  <option>Week 2</option>
                  <option>Week 3</option>
                  <option>Week 4</option>
                </select>
              </div>

              <div>
                <label htmlFor="desc">description: </label>
                {/* <input type="desc" class="form-control" id="desc" placeholder="Short description..." /> */}
                <textarea className="form-control" id="desc" rows="3" value={this.state.desc || ''} onChange={(event) => this.handleInputChange(event)} ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="Day">day: </label>
                <input type="Day" className="form-control" id="day" placeholder=" day.." value={this.state.day || ''} onChange={(event) => this.handleInputChange(event)} />
              </div>


              <div className="form-group">
                <label htmlFor="timeWeekly">time: </label>
                <input type="timeWeekly" className="form-control" id="timeWeekly" placeholder=" time.." value={this.state.timeWeekly || ''} onChange={(event) => this.handleInputChange(event)} />
              </div>

              <button onClick={() => { this.onCreateNextWeekClass() }}>Save/create another</button>
              <button onClick={() => { this.onCreateNextWeekClass() }}>Save</button>

              <br />
            </div>
          </div> : <div> hi </div>

        }

      </center>
    )
  }
}

// No need for this mapping....
const mapStateToProps = (state) => {
  return {
    class: state.clss.class,
    classes: state.clss.classes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetClass: (id) => dispatch(getClassDetails(id)),
    onCreateSerie: (id, classUpdated) => dispatch(createClassSerie(id, classUpdated))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateSerie)