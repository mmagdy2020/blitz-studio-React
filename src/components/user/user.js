import React from 'react';
import axios from 'axios';


class User extends React.Component {
  state = { data: null };

 async componentDidMount() {
   let response = await axios.get('/class');
   let newData = response.data;
   
   console.log(newData);
   this.setState({ data: newData });
  //  console.log(this.state.data.title);
  }
  
  render() {
    if (this.state.data) {
      return <div>

        <h1>{process.env.REACT_APP_TITLE}</h1>
        <h3>{this.state.data.title}</h3>

      </div>;
    } else {
      return <div>
        <h1>{process.env.REACT_APP_Title}</h1>

      </div>;
    }
 
  }
}

export default User;