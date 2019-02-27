import ObjectID from 'bson-objectid'

//////////////////////////////////////////////////////////////////////////////
// this specific user will be retrieved from the backend /users/:id
const initialState = {
  //////////////////////////////////////////////////////////////////////////////
  // after we're logged in, we have a JSON Web Token (JWT)
  token: null, // a string of JWT

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
    default: {
      return state
    }
  }
}
