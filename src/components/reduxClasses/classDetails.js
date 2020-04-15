import React, { Component } from 'react'
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap"
import { Link,withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { getClassDetails , deleteClassAsync} from '../store/classState/classAction'
import './fetchclasses.css'


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
      this.props.history.push('/dashboard')
    }, 500);
  }

  render() {

console.log(this.props)



    let classDetails = <center><div>Loading...</div></center>
    if (this.props.class) {
      return classDetails = (<center >
        <Card style={{ width: '30rem', marginTop:'20px' }} id="cardID" >
          <Card.Img variant="top" src={this.props.class.imgUrl} />
          <Card.Body>
            <Card.Title > {this.props.class.title} </Card.Title>
            <Card.Text > {this.props.class.description} </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush" >
            <ListGroupItem > {this.props.class.instructor} </ListGroupItem>
            <ListGroupItem >  {this.props.class.date} </ListGroupItem>
            <ListGroupItem > {this.props.class.time} </ListGroupItem>
          </ListGroup>

         

            {/* Passing the entire Object to the below Link */}
            {/* using Link to pass another params for Authentication.... */}
        {this.props.location.isAuth === 'admin' ?
         <Card.Body >
        <Link rel="manifest" to={{ pathname: `/edit-class/${this.props.class._id}`, state: { class: this.props.class } }} ><Button  style={{ marginTop: '1rem' }} variant="primary">Update!</Button>{' '}</Link>
        <Button  style={{ marginTop: '1rem' }} variant="danger" onClick={() => this.deleteClassDetailsHandeller()}>Delete!</Button>
        </Card.Body>
     :<div></div> }

          
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

export default withRouter(connect(mapStatToProps, mapDispatchToProps)(classDetailsRedux))
