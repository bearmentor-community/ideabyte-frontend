import ObjectID from 'bson-objectid'

//////////////////////////////////////////////////////////////////////////////
// this specific user will be retrieved from the backend /users/:id
const initialState = {
  _id: ObjectID(),
  id: 1,
  avatar: '/assets/images/avatar.jpg',
  name: 'Joen Doe',
  email: 'joendoe@example.com'
}

// Reducers are pure functions
// They should not have any side effects nor mutate the state
// They have to return a copy
export default function otherReducer(state = initialState, action) {
  switch (action.type) {
    ////////////////////////////////////////////////////////////////////////////
    case 'GET_USER': {
      // remember, a reducer would not modify the data directly
      // instead, we return a copy
      return {
        // simpler to retrieve all other keys in state with spread operator
        // so we don't have to specify each keys on by one
        ...state,
        user: state
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    default: {
      return state
    }
  }
}
