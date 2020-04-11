import React, { Component } from "react";
import { Card} from "react-bootstrap";
import { withRouter } from "react-router";


class DanceClass extends Component {


  // MO - ShowClassId Handeller..
  showClassDetailsHandeller = ()=>{
   this.props.history.push(`/classes/${this.props.id}`);
  }

  
  render() {

    return (
      <center>
              <Card border="primary" style={{ width: "25rem" }}>
                <Card.Header>{this.props.title}</Card.Header>
                <Card.Body>
                  <Card.Title>{this.props.date}</Card.Title>
                  <Card.Text>{this.props.desc}</Card.Text>
                  <button onClick={()=>this.showClassDetailsHandeller()}> clickMe</button>
                </Card.Body>
              </Card>
              <br />

      </center>
    );
  }
}

export default withRouter(DanceClass)
