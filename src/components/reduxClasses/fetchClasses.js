import React, { Component } from "react";
import { connect } from 'react-redux'
import {fetchClasses}from '../store/classState/classAction'
import { Card, ListGroup, ListGroupItem, Button, Container, Row, Col } from "react-bootstrap";
// import DanceClass from './ClassDetails'

// import {Link} from 'react-router-dom'

class showReuxClass extends Component {

  componentDidMount() {
    this.props.onFetchClass()
    console.log(this.props)
  }

  showClassDetailsHandeller = (id) => {
    console.log(id)
    this.props.history.push(`/classes/${id}`);
  }

  render() {

    return (
      <Container>
        <Row>

          {this.props.classes ? this.props.classes.map(danceClass => {

            return (

              <center key={danceClass._id} >
                <Col xs>
                  <Card border="primary" style={{ width: "15rem" }} >
                    <Card.Img variant="top" src={danceClass.imgUrl} />
                    <Card.Header>{danceClass.title}</Card.Header>
                    <Card.Body>
                      {/* <Card.Title>{danceClass.date}</Card.Title> */}
                      <Card.Text>{danceClass.description}</Card.Text>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>{danceClass.instructor}</ListGroupItem>
                        <ListGroupItem>{danceClass.date}</ListGroupItem>
                        <ListGroupItem>{danceClass.time}</ListGroupItem>
                      </ListGroup>
                      {/* <button onClick={() => this.showClassDetailsHandeller(danceClass._id)} > clickMe</button> */}
                      <br />
                      <Button variant="info" onClick={() => { this.showClassDetailsHandeller(danceClass._id) }} size="lg">Details</Button>
                      {/* <Link to={{ pathname: `/edit-class/${danceClass._id}`, state: { class: danceClass } }} className='btn btn-info'>EditME..</Link> */}
                    </Card.Body>
                  </Card>
                </Col>
                <br />
              </center>
            )
          }) : null

          }

        </Row>

      </Container>)

  }
}

const mapStatToProps = (state) => {

  return {
    //CLSS REDUCER IN INDEX.JS
    classes: state.clss.classes
  }

}

const mapDispatchToProps = (dispatch) => {

  return {
    onFetchClass: () => dispatch(fetchClasses())

  }
}

export default connect(mapStatToProps, mapDispatchToProps)(showReuxClass)
