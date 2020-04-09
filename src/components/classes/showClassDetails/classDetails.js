import React, { Component } from 'react'
import axios from 'axios';
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap"
import { Link } from 'react-router-dom';

export class classDetails extends Component {



    state = {
        title: "",
        instructor: "",
        desc: "",
        date: "",
        time: "",
        imgUrl: "",
        // isSeries:  "",
        // isDropInCLass: "",
        // isPartOfSeries: ""
    };
    componentDidMount() {
        axios.get("/classes/" + this.props.match.params.id).then(result => {
            console.log(result)
            this.setState({ title: result.data.title, desc: result.data.description, instructor: result.data.instructor, imgUrl: result.data.imgUrl, date: result.data.date, time: result.data.time })
        }).catch(err => console.log(err))
    }


    updateClassDetailsHandeller = () => {
        this.props.history.push(`/edit-class/${this.props.match.params.id}`);
    }
    deleteClassDetailsHandeller = () => {

        axios.delete("/classes/" + this.props.match.params.id).then(result => {
            console.log(result)

            // redirect .... 
        }).catch(err => console.log(err))
    }




    render() {


        return ( 
            <center >
            <Card style = {{ width: '18rem' } } >
            <Card.Img variant = "top" src = {this.state.imgUrl} /> 
            <Card.Body>
            <Card.Title > { this.state.title } </Card.Title> 
            <Card.Text > { this.state.desc } </Card.Text> 
            </Card.Body> 
            <ListGroup className = "list-group-flush" >
            <ListGroupItem > { this.state.instructor } </ListGroupItem> 
            <ListGroupItem > D { this.state.date } </ListGroupItem> 
            <ListGroupItem > { this.state.time } </ListGroupItem> 
            </ListGroup> 
            <Card.Body >

            <Button onClick = {() => this.updateClassDetailsHandeller() } > Update! </Button>

            { /* <Link to="/classes" ><Button onClick={()=>this.deleteClassDetailsHandeller()}>Delete!</Button></Link>  */ }

            <Link to = "/classes"> <Button onClick = {() => this.deleteClassDetailsHandeller() } > Delete! </Button></Link>

            </Card.Body>
             </Card>

            </center>

        )

    }
}

export default classDetails
