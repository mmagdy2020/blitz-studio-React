import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getClassDetails, createClassSerie } from '../store/classState/classAction'
import './createClass.css'
import ClassInfoSerie from './domClasses/classinfo.series'
class CreateSerie extends Component {
  constructor(props) {
    super(props)

    console.log(this.props)

    this.state = {
      weekNumber: "",
      desc: "",
      day: "",
      timeWeekly: ""
    }
  }

  onSubmit=() =>{
    const id = this.props.match.params.id
    const classSeries = this.state
    this.props.onCreateSerie(id, classSeries)
      this.props.history.push('/dashboard')   // not working 

  }

  onCreateAnother() {
    const id = this.props.match.params.id
    const classSeries = this.state
    this.props.onCreateSerie(id, classSeries)

    this.resetForm()

  }
  //RestForm...
  resetForm = () => {
    document.getElementById("formID").reset();
  }


  // Handle event using handleFunction instead of using this.setState on the dom.
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.id;

    this.setState({ [name]: value })
  }


  //For retriving the data From the Store...
  componentDidMount() {
    const id = this.props.match.params.id
    console.log(id)
    this.props.onGetClass(id)
  }



  render() {


    let classInfo = <div>No information</div>
    let series = <div> Series available</div>
    if (this.props.class._id) {

      classInfo =
        <ClassInfoSerie series={this.props.class.seriesClass} classname={this.props.class.title} date={this.props.class.date} instructor={this.props.class.instructor} url={this.props.class.imgUrl} time={this.props.class.time} />

      series = this.props.class.seriesClass.map(CS => {
        return (<div className="card border-primary mb-3 " id="cardSeries" >
          <div className="card-header">{CS.weekNumber}</div>
          <div className="card-body">
            <p className="card-text">{CS.desc}</p>
      <h4 className="card-title">On {CS.timeWeekly} at {CS.time}</h4>

          </div>

        </div>)
      })

      // return <SeriesInfo key={cs._id} desc={cs.desc} weekNumber={cs.weekNumber} day={cs.day} timeWeekly={cs.timeWeekly}/>



    }

    return (
      <div className="row" id="page">
        <div className="col-sm" id="classInfoSerie">
          {classInfo}

          <div className="row">

            {series}



          </div>

        </div>



        {this.props.class ?

          <div className="col-sm">
            <div id="createSeries">
              <form id="formID">
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
                    <textarea className="form-control" id="desc" rows="3" placeholder='Short description...' value={this.state.desc || ''} onChange={(event) => this.handleInputChange(event)} ></textarea>
                  </div>

                  <div className="form-group">
                    <label htmlFor="Day">day: </label>
                    <input type="Day" className="form-control" id="day" placeholder=" day.." value={this.state.day || ''} onChange={(event) => this.handleInputChange(event)} />
                  </div>


                  <div className="form-group">
                    <label htmlFor="timeWeekly">time: </label>
                    <input type="timeWeekly" className="form-control" id="timeWeekly" placeholder=" time.." value={this.state.timeWeekly || ''} onChange={(event) => this.handleInputChange(event)} />
                  </div>
                  <center>
                    <button onClick={() => { this.onCreateAnother() }} className="btn btn-outline-primary">Save, Create another</button>
                    <br />
                    <button onClick={() => { this.onSubmit() }} className="btn btn-outline-success">Save, Exit</button>
                  </center>
                  <br />
                </div>
              </form>
            </div>
          </div> : <div> hi </div>

        }
      </div>

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