import React from 'react';
import UserDetail from '../userDetail/userDetail';

export default class UserList extends React.Component {
  render() {
    return (
      <div >
        {this.props.users.map((user, index) => {
          return <UserDetail user={user} key={index}></UserDetail>
        })}
      </div>
    )
  }
}