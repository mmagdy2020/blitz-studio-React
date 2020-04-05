import React from 'react';

export default class Classes extends React.Component {
  // constructor(props){
  //   super(props)
  // }
  render() {
    return (
      <div id="classes" className="container">
        classes page for {this.props.classType}
      </div>

    )
  }
}
