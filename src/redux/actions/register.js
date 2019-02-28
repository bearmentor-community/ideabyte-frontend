import { push } from 'connected-react-router'
import { toast } from 'react-toastify'

import request from '../request'

// We made all the actions separated to ease us to inspect the flow
// These are called action creators

// action creator
export const registerUserBegin = () => ({
  type: 'REGISTER_USER_BEGIN'
})

// action creator
export const registerUserSuccess = response => {
  return {
    type: 'REGISTER_USER_SUCCESS',
    payload: {
      response
    }
  }
}

// action creator
export const registerUserError = error => ({
  type: 'REGISTER_USER_ERROR',
  payload: {
    error
  }
})

// registerUser is a thunk, because it:
// - delay the process
// - return another function to be processed again
export const registerUser = payload => {
  return dispatch => {
    // REGISTER_USER_BEGIN
    dispatch(registerUserBegin())

    // Get the response after requesting to backend API
    // Use Promise instead of async/await because it's tricky in thunk
    request({
      method: 'post',
      url: '/users/register',
      data: payload
    })
      .then(response => {
        console.info('response:', response)
        // REGISTER_USER_SUCCESS
        dispatch(registerUserSuccess(response))

        // https://github.com/supasate/connected-react-router/blob/master/FAQ.md#how-to-navigate-with-redux-action
        // Redirect to login page after register is success
        dispatch(push('/login'))

        // Notify visitor with toast
        toast.success(
          `Hello ${payload.name}, you are registered! Let's login`,
          {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: false
          }
        )

        // to be used later
        return response
      })
      .catch(error => {
        console.error('error:', error)
        // REGISTER_USER_ERROR
        dispatch(registerUserError(error))

        // Notify visitor with toast
        toast.error(`Sorry ${payload.name}, there's something wrong`, {
          position: 'top-center',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: false
        })
      })
  }
}
