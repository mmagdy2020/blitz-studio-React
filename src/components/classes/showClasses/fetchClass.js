import React, { Component } from "react";
import axios from "axios";
import DanceClass from './danceClass'
// import {Link} from 'react-router-dom'

class ShowClasses extends Component {
  //first time use
  state = {
    classes: []
  };

  //remove the static URL..
  componentDidMount() {
    axios
      .get("/classes")
      .then(response => {
        console.log(response.data)
        this.setState({ classes: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const danceClass = this.state.classes.map(c => {
      return (
       <DanceClass
          key={c._id}
          title={c.title}
          desc={c.description}
          date={c.date}
          id={c._id}
        ></DanceClass>
      );
    });
    return danceClass;
  }
}

export default ShowClasses;
