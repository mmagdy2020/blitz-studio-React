import React, { Component } from 'react'
import axios from 'axios';
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getClassDetails , deleteClassAsync} from '../store/classState/classAction'


export class classDetailsRedux extends Component {

  componentDidMount() {
    // console.log("hi2")
    this.props.onGetClass(this.props.match.params.id)
  }


  updateClassDetailsHandeller = () => {
    this.props.history.push(`/edit-class/${this.props.match.params.id}`);
  }


  // No need to create a dispatcher for delete a Class ..
  deleteClassDetailsHandeller = () => {
    const id = this.props.match.params.id
    this.props.onDeleteClass(id)
    setTimeout(() => {
      this.props.history.push('/classes')
    }, 500);
  }

  render() {



    let classDetails = <center><div>Loading...</div></center>
    if (this.props.class) {
      return classDetails = (<center >
        <Card style={{ width: '18rem' }} >
          <Card.Img variant="top" src={this.props.class.imgUrl} />
          <Card.Body>
            <Card.Title > {this.props.class.title} </Card.Title>
            <Card.Text > {this.props.class.desc} </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush" >
            <ListGroupItem > {this.props.class.instructor} </ListGroupItem>
            <ListGroupItem >  {this.props.class.date} </ListGroupItem>
            <ListGroupItem > {this.props.class.time} </ListGroupItem>
          </ListGroup>
          <Card.Body >

            {/* Passing the entire Object to the below Link */}
            <Link rel="manifest" to={{ pathname: `/edit-class/${this.props.class._id}`, state: { class: this.props.class } }} ><Button variant="primary">Update!</Button>{' '}</Link>

            <br />

            <Button variant="danger" onClick={() => this.deleteClassDetailsHandeller()}>Delete!</Button>
          </Card.Body>
        </Card>

      </center>)

    } else {
      return classDetails
    }
  }
}

const mapStatToProps = (state) => {
  return {
    class: state.clss.class,  // Fetching Only One Class
    classes: state.clss.classes  // get a copy of previous state...
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onFetchClass: () => dispatch(fetchClasses())
    onGetClass: (id) => dispatch(getClassDetails(id)),
    onDeleteClass: (id) =>dispatch(deleteClassAsync(id))
  }
}

export default connect(mapStatToProps, mapDispatchToProps)(classDetailsRedux)
