import { initialState } from './initialState'

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      return {
        // user: state.user,
        // ideas: state.ideas,
        // we can make is simpler with spread ... operator
        ...state,
        isAuthenticated: state.isAuthenticated
      }
    case 'LOGIN_USER':
      console.log(action.payload)
      return {
        ...state,
        isAuthenticated: true
      }
    case 'LOGOUT_USER':
      return {
        ...state,
        isAuthenticated: false
      }
    default:
      return state
  }
}
