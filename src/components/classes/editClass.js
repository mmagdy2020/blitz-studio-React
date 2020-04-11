import React, { Component } from 'react'
import axios from 'axios';
// import {Card, ListGroup,ListGroupItem, Button} from "react-bootstrap"
import {Link} from "react-router-dom"

export class UpdateClass extends Component {



    state = {
        fetch:false,
        title: "",
        instructor: "",
        description: "",
        date: "",
        time: "",
        imgUrl: "",
        // isSeries:  "",
        // isDropInCLass: "",
        // isPartOfSeries: "",
      }; 

    componentDidMount() {
        axios.get("/classes/" + this.props.match.params.id).then(result => {
            console.log(result)
            this.setState({ title: result.data.title,description :result.data.description ,instructor : result.data.instructor,imgUrl :result.data.imgUrl, date: result.data.date, time: result.data.time })
        }).catch(err => console.log(err))
    }

    

    updateClassHandeller(){
console.log(this.props.match.params.id)
console.log(this.state.title)
        axios.patch("/classes/" + this.props.match.params.id, this.state).then(result =>{
            // this.props.history.push('/classes');
            console.log(result)

        }).catch()

    }


    render() {


        return (


            <div id="sign-up">
            <div className="container">
        <h1>update a  {} class</h1>
              <form>
                <div className="form-group">
                  <label htmlFor="title">Class title:</label>
                  <input className="form-control" name="title" id="title" type="text" value={this.state.title || ""}  onChange={(event)=>this.setState({title:event.target.value})}></input>
                </div>
    
                <div className="form-group">
                  <label htmlFor="instructor">instructor:</label>
                  <input className="form-control" name="instructor" id="instructor" type="text" value={this.state.instructor || ""} onChange={(event)=>this.setState({instructor:event.target.value})}></input>
    
                </div>

    
                <div className="form-group">
                  <label htmlFor="description">description:</label>
                  <input className="form-control" name="description" id="description" type="text" value={this.state.description || ""} onChange={(event)=>this.setState({description: event.target.value}) }></input>
                </div>
    
                <div className="form-group">
                  <label htmlFor="email">imgUrl:</label>
                  <input className="form-control" name="imgUrl" id="imgUrl" type="text" value={this.state.imgUrl || ""} onChange={(event)=>this.setState({imgUrl:event.target.value}) }></input>
                </div>
    
                <div className="form-group">
                  <label htmlFor="date">date:</label>
                  <input className="form-control" name="date" id="date" type="date" value={this.state.date || ""} onChange={(event)=> this.setState({date:event.target.value})}></input>
                </div>
    
                <div className="form-group">
                  <label htmlFor="time">time:</label>
                  <input className="form-control" name="time" id="time" type="time" value={this.state.time || ""} onChange={(event)=>this.setState({time:event.target.value}) }></input>
                </div>
    
                <div className="form-group">
                  
                  <Link to="/classes"><button type="button" className="btn btn-outline-primary" onClick={()=>this.updateClassHandeller()}>Update!</button></Link>
     
                 
                </div>
              </form>
            </div>
          </div>

        )

    }
}

export default UpdateClass

