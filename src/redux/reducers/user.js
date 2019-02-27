import ObjectID from 'bson-objectid'
import browserStorage from '../browserStorage'

//////////////////////////////////////////////////////////////////////////////
// this specific user will be retrieved from the backend /users/:id
const initialState = {
  //////////////////////////////////////////////////////////////////////////////
  // after we're logged in, we have a JSON Web Token (JWT)
  token: null, // a string of JWT

  //////////////////////////////////////////////////////////////////////////////
  // before we're logged in, the auth/admin conditions are false
  // or we can check what's in the storage
  isAuthenticated: browserStorage.getKey('isAuthenticated') || false, // will be true after we're logged in
  isAdmin: false, // will be true after we're logged in as admin

  //////////////////////////////////////////////////////////////////////////////
  // we can also interpolate the decoded token to plain object
  _id: ObjectID(),
  id: 1,
  avatar: '/assets/images/avatar.jpg',
  name: 'Joen Doe',
  email: 'joendoe@example.com'
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    ////////////////////////////////////////////////////////////////////////////
    case 'SET_IS_AUTHENTICATED': {
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    case 'SET_USER_STATE': {
      return {
        ...state,
        user: action.payload.user
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    default: {
      return state
    }
  }
}
