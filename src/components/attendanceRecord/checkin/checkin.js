import React, { Component } from 'react';
import './checkin.scss';
import axios from 'axios';

class Checkin extends Component {
  constructor(props) {
    super(props);
    this.state = { danceClasses: [] };

  }
  images =
    {
      salsa: "https://i.ya-webdesign.com/images/couple-dancing-salsa-png-7.png",
      bachata: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/78117221_2563932770327540_7118699424565428224_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=uQBZXGH_MaYAX-AU3Dz&_nc_ht=scontent-ort2-1.xx&oh=80486fe46b9dc2cedb275eeae25a9837&oe=5EAFAA3F",
      connection: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/75080120_2563932803660870_1666130574189789184_o.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=AmguxEjJSAYAX_MmCFb&_nc_ht=scontent-ort2-1.xx&oh=08393a362f34367b18d72efb3243609e&oe=5EB16557"
    };

  async componentDidMount() {
    let response = await axios.get(axios.defaults.baseURL + '/class');

    let danceClassesCopy = [...this.state.danceClasses];
    danceClassesCopy = response.data;
    this.setState({ danceClasses: danceClassesCopy });
  }


  render() {
    // console.log(this.state);
    let classes = this.state.danceClasses.map((c, index) => {
      if (/bachata/i.test(c.title)) {
        c.imgUrl = this.images.bachata;
      } else if (/salsa/i.test(c.title)) {
        c.imgUrl = this.images.salsa;
      } else {
        c.imgUrl = this.images.connection;
      }
      return c;
    });

    console.log(classes);
    let classesForTheDay;
    if (classes) {
      classesForTheDay = classes.map(c => <div key={c._id} className="dance-class">
        <div>
          <img src={c.imgUrl} alt="salsa dance" />
        </div>
        <div>
          <h3>{c.title}</h3>
          <p>{c.description.substr(0, 140)}...</p>
        </div>
        <div>
          <button className="btn btn-primary"> LEARN MORE >></button>
        </div>
      </div>
      );
    }



    return <React.Fragment>
      <div className="classes container">
        {classesForTheDay}
      </div>
      <div className="container">
        <button className="btn-checkin">CHEKIN</button>
      </div>
    </React.Fragment>
  }
}

export default Checkin;