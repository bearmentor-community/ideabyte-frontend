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
  // or we can check what's currently in the storage
  isAuthenticated: browserStorage.getKey('isAuthenticated') || false,
  isAdmin: browserStorage.getKey('isAdmin') || false,

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
    // SET IS AUTHENTICATED AFTER LOGIN
    case 'SET_IS_AUTHENTICATED': {
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    // SET USER STATE AFTER LOGIN
    case 'SET_USER_STATE': {
      return {
        ...state,
        user: action.payload.user
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    // REMOVE USER STATE AFTER LOGOUT
    case 'REMOVE_USER_STATE': {
      return {}
    }

    ////////////////////////////////////////////////////////////////////////////
    default: {
      return state
    }
  }
}
