import { initialState } from './initialState'
import request from './request'

export const reducers = async (state = initialState, action) => {
  switch (action.type) {
    ////////////////////////////////////////////////////////////////////////////
    case 'GET_USER':
      return {
        // simpler to retrieve all other keys in state with spread operator
        // so we don't have to specify each keys on by one
        ...state,
        user: state.user
      }

    ////////////////////////////////////////////////////////////////////////////
    case 'REGISTER_USER':
      // Get the payload from the action
      const payload = action.payload

      // Get the response after requesting to backend API
      // It's a slow process
      const response = await request({
        method: 'post',
        url: '/users/register',
        data: payload
      })

      return {
        // simpler way to retrieve all other keys in state
        // with the spread operator ...
        ...state,
        latestResponse: response
      }

    ////////////////////////////////////////////////////////////////////////////
    case 'LOGIN_USER':
      return {
        ...state,
        isAuthenticated: true
      }

    ////////////////////////////////////////////////////////////////////////////
    case 'LOGOUT_USER':
      return {
        ...state,
        isAuthenticated: false
      }

    ////////////////////////////////////////////////////////////////////////////
    default:
      return state
  }
}
