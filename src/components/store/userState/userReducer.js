import * as UserActions from './userAction';
const initState = {
  items: [],
  didInvalidate: false,
  isFetching: false
}
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case UserActions.INVALIDATE_USER:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case UserActions.REQUEST_ALL_USERS:
      return Object.assign(
        {},
        state,
        { isFetching: true, didInvalidate: false }
      );
    case UserActions.RECEIVE_ALL_USERS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.users,
        lastUpdated: action.receivedAt
      })


  }
}