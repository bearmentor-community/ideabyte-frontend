// import ObjectID from 'bson-objectid'

import { decodeToken } from '../../helpers'
import browserStorage from '../browserStorage'

const token = browserStorage.getKey('token') || null
const user = token ? decodeToken(token) : null

// this specific user will be retrieved from the backend API /users/:id
const initialState = {
  //////////////////////////////////////////////////////////////////////////////
  // after we're logged in, we will have a JSON Web Token (JWT)
  token: token || null, // a string of JWT

  //////////////////////////////////////////////////////////////////////////////
  // only get user data if user is exist
  name: user ? user.name : null,
  email: user ? user.email : null,

  //////////////////////////////////////////////////////////////////////////////
  // before we're logged in, the auth/admin conditions are false
  // or we can check what's currently in the storage
  isAuthenticated: browserStorage.getKey('isAuthenticated') || false,
  isAdmin: browserStorage.getKey('isAdmin') || null

  //////////////////////////////////////////////////////////////////////////////
  // we can also interpolate the decoded token to plain object
  // _id: ObjectID(),
  // id: 1,
  // avatar: '/assets/images/avatar.jpg',
  // name: 'Joen Doe',
  // email: 'joendoe@example.com'
}

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    ////////////////////////////////////////////////////////////////////////////
    // SET USER STATE AFTER LOGIN
    case 'SET_USER_STATE': {
      return action.payload.user
      // will set token, name, email, isAuthenticated
      // dispatched in loginUser action creator
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
