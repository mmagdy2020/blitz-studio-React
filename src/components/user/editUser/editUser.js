import React from 'react';
import UserForm from '../userForm/userForm';
import {
  withRouter
} from 'react-router-dom'

// has props: user, hasAdminAccess, onCancel(), onUserChange(user)
class EditUser extends React.Component {
  onClickSaveChanges(formUser) {
    this.props.onUserChange(formUser);
  }
  onClickCancel(){
    this.props.onCancel();

  }
  render() {
    return (

      <div id="edit-user">
        <UserForm hasAdminAccess={this.props.hasAdminAccess} onSubmit={user => this.onClickSaveChanges(user)} onCancel={_=>this.onClickCancel()} titleText="Edit Account" buttonText="Save Changes" userToEdit={this.props.user}/>
      </div>
    )
  }
}
export default withRouter(EditUser);