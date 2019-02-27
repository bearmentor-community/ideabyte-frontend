import { push } from 'connected-react-router'
import { toast } from 'react-toastify'

import request from '../request'

// We made all the actions separated to ease us to inspect the flow
// These are called action creators

// action creator
export const loginUserBegin = () => ({
  type: 'LOGIN_USER_BEGIN'
})

// action creator
export const loginUserSuccess = response => {
  return {
    type: 'LOGIN_USER_SUCCESS',
    payload: {
      response
    }
  }
}

// action creator
export const loginUserError = error => ({
  type: 'LOGIN_USER_ERROR',
  payload: {
    error
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
        console.info('response:', response)
        // LOGIN_USER_SUCCESS
        dispatch(loginUserSuccess(response))

        // https://github.com/supasate/connected-react-router/blob/master/FAQ.md#how-to-navigate-with-redux-action
        // Redirect to profile page after login is success
        dispatch(push('/profile'))

        // Notify visitor with toast
        toast.success(
          `${payload.email}, you are logged in! This is your profile`,
          {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false
          }
        )

        // to be used later
        return response
      })
      .catch(error => {
        console.error('error:', error)
        // LOGIN_USER_ERROR
        dispatch(loginUserError(error))

        // Notify visitor with toast
        toast.error(`Sorry ${payload.name}, there's something wrong`, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false
        })
      })
  }
}
