import React, { Component } from "react";
// import axios from 'axios'
// import { ThemeProvider } from "react-bootstrap";
import {withRouter} from 'react-router-dom';

class classDetails extends Component {

    state = {
        classInfo:null,
        classID:this.props.postID

    }

componentDidMount(){
  console.log(this.props.match.params)
  // console.log(this.props.match.params)
    // axios.get("http://localhost:4000/class/" + this.props.postID).then(result =>{
    //   console.log(result)
    //   this.setState({classInfo: result})
    // }).catch(err=>console.log(err))
}


  render() {

    console.log(this.state.classID)


    if(this.state.classInfo){
      console.log(this.state.classInfo)

    }

    return (
    <div>
    </div>                                                                 
    )
  }
}

export default withRouter(classDetails);
