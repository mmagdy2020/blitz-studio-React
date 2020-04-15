import React, { Component } from 'react'
import '../createClass.css'
import '../createClass.css'



export class ClassInfoSerie extends Component {
    render() {

        console.log(this.props)

        // let series = this.props.series.map((cSeries) =>{
        //    return <div>hi<div>
        // })
        return (



                <div class="card mb-3">
                  <h3 class="card-header">CLass title:  {this.props.classname}</h3>

                    {/* <img id="img" src={this.props.url} alt="Card image" /> */}

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Instrctor Name: {this.props.instructor}</li>
                        <li class="list-group-item">StartDate: {this.props.date}</li>
                        <li class="list-group-item">at: {this.props.time}</li>
                    </ul>


                </div>







        )
    }
}

export default ClassInfoSerie