import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getClassDetails,createClassSerie} from '../store/classState/classAction'
import './createClass.css'

class CreateSerie extends Component {
//   state = this.props.location.state.class

  updateClassHandeller() {
    //Dispatch updateClass 
    this.props.onCreateSerie(this.state._id, this.state)
    setTimeout(() => {
      this.props.history.push('/classes')}, 500); // To aviod loading the page without refreshing it...
  } 



  componentDidMount() {
    console.log(this.props.match.params.id)
 
    this.props.onGetClass(this.props.match.params.id)  // Props.class (The Entire Object)...
  }

onChangeHandeler =(event)=>{

    if(this.props.class){
        this.set
    }
}

  render() {

    console.log(this.props)
    return (

        <div>
    //     <div id="createS">
    //     <div className="form-group">

    //       <div className="form-group">
    //         <label htmlFor="WeekNumber">Week#: </label>
    //         <select className="form-control" id="WeekNumber" value={this.props.class} onChange={(event) => this.setState({ weekNumber: event.target.option })}>
    //           <option>Week 1</option>
    //           <option>Week 2</option>
    //           <option>Week 3</option>
    //           <option>Week 4</option>
    //         </select>
    //       </div>

    //       <div>
    //         <label htmlFor="desc">description: </label>
    //         {/* <input type="desc" class="form-control" id="desc" placeholder="Short description..." /> */}
    //         <textarea className="form-control" id="desc" rows="3" value='' onChange={(event) => this.setState({ desc: event.target.value })} ></textarea>
    //       </div>

    //       <div className="form-group">
    //         <label htmlFor="Day">day: </label>
    //         <input type="Day" className="form-control" id="day" placeholder=" day.." value='' onChange={(event) => this.setState({ day: event.target.value })}/>
    //         </div>
        

    //     <div className="form-group">
    //         <label htmlFor="timeWeekly">time: </label>
    //         <input type="timeWeekly" className="form-control" id="timeWeekly" placeholder=" time.." value='' onChange={event => this.setState({timeWeekly: event.target.value})} />
    //       </div>

    //       <button onChange={()=>{this.onCreateNextWeekClass()}}>next</button>
    //       <br/>
    //     </div>
    //   </div>
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