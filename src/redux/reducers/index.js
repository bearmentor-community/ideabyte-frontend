import initialState from '../initialState'

// Reducers are pure functions
// They should not have any side effects nor mutate the state
// They have to return a copy
const reducer = (state = initialState, action) => {
  switch (action.type) {
    ////////////////////////////////////////////////////////////////////////////
    case 'GET_USER': {
      // remember, a reducer would not modify the data directly
      // instead, we return a copy
      return {
        // simpler to retrieve all other keys in state with spread operator
        // so we don't have to specify each keys on by one
        ...state,
        user: state.user
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    case 'GET_IDEAS': {
      return {
        ...state,
        ideas: state.ideas
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    case 'LOGIN_USER': {
      return {
        ...state,
        isAuthenticated: true
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    case 'LOGOUT_USER': {
      return {
        ...state,
        isAuthenticated: false
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    default: {
      return state
    }
  }
}

export default reducer
