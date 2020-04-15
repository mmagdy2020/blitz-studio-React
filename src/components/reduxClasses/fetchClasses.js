import React, { Component } from "react";
import { connect } from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import { fetchClasses } from '../store/classState/classAction'
import { Card, ListGroup, ListGroupItem, Button, Container, Row, Col } from "react-bootstrap";
import './fetchclasses.css'
// import DanceClass from './ClassDetails'



class showReuxClass extends Component {

  componentDidMount() {
    this.props.onFetchClass()
    console.log(this.props)
  }

  showClassDetailsHandeller = (id) => {
    console.log('------------------')
    this.props.history.push(`/classes/${id}`);
  }


  // createSeries=()=>{
  //   this.props.history.push('/')
  // }

  render() {

console.log(this.props.isAuth)

    return (
      <div>

{this.props.isAuth === 'admin' ? <Link to ="/add-class"  ><Button variant="primary" style={{ marginTop: '1rem' }} size="lg">Create new Class!</Button></Link>:<div/>
}


      <Container id="Container">

        <Row>

          {this.props.classes ? this.props.classes.map(danceClass => {

            return (

              <center key={danceClass._id} >
                <Col xs>
                  <Card border="secondary" id="cardID" >
                    <Card.Header>{danceClass.title}</Card.Header>

                    <Card.Img variant="top" src={danceClass.imgUrl} id="img" className="zoom" />
                    <Card.Body>
                      {/* <Card.Title>{danceClass.date}</Card.Title> */}
                      {/* <Card.Text>{danceClass.description}</Card.Text> */}
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>{danceClass.instructor}</ListGroupItem>
                        <ListGroupItem>{danceClass.date}</ListGroupItem>
                        <ListGroupItem>{danceClass.time}</ListGroupItem>
                      </ListGroup>

                      <div>
                      <Link to={{pathname:`/classes/${danceClass._id}`,isAuth:this.props.isAuth}} ><Button onClick={() => { this.showClassDetailsHandeller(danceClass._id) }}variant="info" style={{ marginTop: '1rem' }} size="sm">details!</Button></Link> {' '}
                        {/* <Button  style={{ marginTop: '1rem' }} variant="info" onClick={() => { this.showClassDetailsHandeller(danceClass._id) }} size="sm">Details</Button>{' '} */}
                        {danceClass.isSeries && this.props.isAuth=== 'admin' ? <Link to={`/create-serie/${danceClass._id}`} ><Button variant="primary" style={{ marginTop: '1rem' }} size="sm">createSeries!</Button></Link> : <div />}
                      </div>


                    </Card.Body>
                  </Card>
                </Col>
                <br />
              </center>
            )
          }) : null

          }

        </Row>
      </Container>

      </div>


    )
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

export default withRouter(connect(mapStatToProps, mapDispatchToProps)(showReuxClass))
