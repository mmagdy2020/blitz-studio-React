import React from 'react';
import UserDetail from '../userDetail/userDetail';


// has props: users, onClickEdit(user), onClickDelete(user)
export default class UserList extends React.Component {
  onClickEdit(user){
    this.props.onClickEdit(user);
  }
  onClickDelete(user) {
    this.props.onClickDelete(user);
  }
  render() {
    return (
      <div >
        {this.props.users.map((user, index) => {
          return <UserDetail user={user} key={index} onClickDelete={user => this.onClickDelete(user)} onClickEdit={user => this.onClickEdit(user)}></UserDetail>
        })}
      </div>
    )
  }
}