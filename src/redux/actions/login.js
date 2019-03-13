import { push } from 'connected-react-router'
import { toast } from 'react-toastify'

import request from '../request'
import browserStorage from '../browserStorage'

// We made all the actions separated to ease us to inspect the flow
// These are called action creators

// action creator when begin
export const loginUserBegin = () => ({
  type: 'LOGIN_USER_BEGIN'
})

// action creator when success
export const loginUserSuccess = response => {
  return {
    type: 'LOGIN_USER_SUCCESS',
    payload: {
      response: response
    }
  }
}

// action creator when error
export const loginUserError = error => ({
  type: 'LOGIN_USER_ERROR',
  payload: {
    error: error
  }
})

export const setUserState = user => ({
  type: 'SET_USER_STATE',
  payload: {
    user: user
  }
})

// loginUser is a thunk, because it:
// - delay the process for the next operation
// - return another function to be processed again
export const loginUser = payload => {
  return dispatch => {
    // LOGIN_USER_BEGIN
    dispatch(loginUserBegin())

    // Get the response after requesting to backend API
    // Use Promise instead of async/await because it's tricky in thunk
    request({
      method: 'post',
      url: '/users/login',
      data: payload
    })
      .then(response => {
        // LOGIN_USER_SUCCESS
        dispatch(loginUserSuccess(response))

        // Set isAuthenticated to true in the storage
        browserStorage.setKey('isAuthenticated', true)
        // Set token in the storage
        browserStorage.setKey('token', response.data.token)

        return response
      })
      .then(response => {
        // Set state.user to contain user's data from response
        dispatch(
          setUserState({
            token: response.data.token,
            name: response.data.user.name,
            email: response.data.user.email,
            isAuthenticated: true
          })
        )
      })
      .then(finished => {
        // https://github.com/supasate/connected-react-router/blob/master/FAQ.md#how-to-navigate-with-redux-action
        // Redirect to profile page after login is success
        dispatch(push('/profile'))

        // Notify visitor with toast
        toast.success(
          `${payload.email}, you are logged in! This is your profile`,
          {
            position: 'top-left',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: false
          }
        )
      })
      .catch(error => {
        // LOGIN_USER_ERROR
        dispatch(loginUserError(error))

        // Set isAuthenticated to false in the storage
        browserStorage.setKey('isAuthenticated', false)
        //

        // Notify visitor with toast
        toast.error(`Sorry ${payload.name}, there's something wrong`, {
          position: 'top-left',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: false
        })
      })
  }
}
