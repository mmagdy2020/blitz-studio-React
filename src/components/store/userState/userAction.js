import User from '../../../models/user';
import axios from 'axios';
export const LOG_IN_USER = "LOG_IN_USER";
export const LOG_OUT_USER = "LOG_OUT_USER";
export const UPDATE_ACTIVE_USER = "UPDATE_ACTIVE_USER";
export const NAVIGATE_TO_PAGE = "NAVIGATE_TO_PAGE";

export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_USER = "GET_USER";
export const CREATE_USER = "CREATE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";
export const SELECT_USER = "SELECT_USER";
export const DESELECT_USER = "DESELECT_USER";

export const REQUEST_ALL_USERS = "REQUEST_ALL_USERS";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

export const REQUEST_ACTIVE_USER = "REQUEST_ACTIVE_USER";
export const RECEIVE_ACTICE_USER = "RECEIVE_ACTIVE_USER";


export const requestAllUsers = () => { return { type: REQUEST_ALL_USERS } }
export const receiveAllUsers = (users) => { return { type: RECEIVE_ALL_USERS, users } }

export const getAllUsers = () => {
  console.log("action getAllUsers")
  return dispatch => {
    dispatch(requestAllUsers());
    // TODO: consider adding a return before the axios call to return a promise
    axios.get('/users').then(
      response => {
        console.log("get all users response:", response);
        const allUsers = Array.from(response.data) || [];
        dispatch(receiveAllUsers, allUsers);
      },
      err => { console.log("error in userAction.js getAllUsers(): ", err) }
    )
  }
}

export const requestUser = (id) => { return { type: REQUEST_ACTIVE_USER, id } }
export const receiveUser = (user) => { return { type: RECEIVE_ACTICE_USER, user } }

export const getUser = (id) => {
  console.log("action getUser")
  return dispatch => {
    dispatch(requestUser());
    // TODO: consider adding a return before the axios call to return a promise
    axios.get('/users/' + id).then(
      response => {
        console.log("get user response:", response);
        dispatch(receiveUser(response.data))
      },
      err => { console.log("error in userAction.js getUser():", err) }
    )
  }

}

export const createUser = (user) => {
  console.log("action createUser")
  return {
    type: CREATE_USER,
    user
  }
}

export const updateUser = (user) => {
  console.log("action updateUser")
  return {
    type: UPDATE_USER,
    user: user
  }
}

export const deleteUser = (id) => {
  console.log("action deleteUser")
  return {
    type: DELETE_USER,
    id
  }
}

/**
 * actions that don't require server calls
 */
export const selectUser = (user) => {
  console.log("action selectUser")
  return {
    type: SELECT_USER,
    user
  }
}

export const deselectUser = () => {
  console.log("action deselectUser")
  return {
    type: DESELECT_USER
  }
}
