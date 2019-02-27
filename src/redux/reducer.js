import { initialState } from './initialState'
import request from './request'

// Reducers are pure functions
// They should not have any side effects nor mutate the state
// They have to return a copy
export const reducer = (state = initialState, action) => {
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
    case 'REGISTER_USER': {
      // Get the payload from the action
      const payload = action.payload

      // Get the response after requesting to backend API
      // It's a slow process
      // Use Promise instead of async/await because it's tricky in reducer
      const result = request({
        method: 'post',
        url: '/users/register',
        data: payload
      })
        .then(response => {
          return {
            ...state,
            latestResponse: response
          }
        })
        .catch(error => {
          return {
            ...state,
            latestError: error
          }
        })

      return {
        ...state,
        latestResponse: result.then(result => result)
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
