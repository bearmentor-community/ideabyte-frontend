import { initialState } from './initialState'

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    ////////////////////////////////////////////////////////////////////////////
    case 'GET_USER': {
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
      console.log(payload)

      return {
        // simpler to retrieve all other keys in state with spread operator
        ...state,
        isAuthenticated: false
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    case 'LOGIN_USER': {
      console.log(action.payload)
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
