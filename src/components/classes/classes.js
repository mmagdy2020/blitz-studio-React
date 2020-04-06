import React, { Component } from "react";
import ShowClasses from "./showClasses/fetchClass";
import ClassDetails from "./showClassDetails/classDetails";
import { Route,Switch } from "react-router-dom";
// import AddClass from "./addClass"
class Classes extends Component {
  //first time use

  state = {
    postClickedId: ""
  };

  classClickedHandler = id => {
    this.setState({ postClickedId: id });
    console.log(id);
  };

  render() {
    return (
      <Switch>
        {/* <ShowClasses classClicked={this.classClickedHandler}/>
              <ClassDetails postID={this.state.postClicked}/> */}

        <Route path="/classes" Component={ShowClasses}></Route>
        <Route path="/classes/:id" Component={ClassDetails}></Route>
      </Switch>
    );
  }
}

export default Classes;
