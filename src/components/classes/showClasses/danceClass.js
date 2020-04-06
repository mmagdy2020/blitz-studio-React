import React, { Component } from "react";
import { Card} from "react-bootstrap";

class DanceClass extends Component {
  render() {

    return (
      <center>
    
              <Card border="primary" style={{ width: "25rem" }}>
                <Card.Header>{this.props.title}</Card.Header>
                <Card.Body>
                  <Card.Title>{this.props.date}</Card.Title>
                  <Card.Text>{this.props.desc}</Card.Text>
                  <button onClick={this.props.classInfo}> clickMe</button>
                </Card.Body>
              </Card>
              <br />
      </center>
    );
  }
}

export default DanceClass;
