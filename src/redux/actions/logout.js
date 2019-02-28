import { push } from 'connected-react-router'
import { toast } from 'react-toastify'

import request from '../request'
import browserStorage from '../browserStorage'

export const logoutUserBegin = () => ({
  type: 'LOGOUT_USER_BEGIN'
})

export const logoutUserSuccess = response => {
  return {
    type: 'LOGOUT_USER_SUCCESS',
    payload: {
      response
    }
  }
}

export const logoutUserError = error => ({
  type: 'LOGOUT_USER_ERROR',
  payload: {
    error
  }
})

export const removeUserState = () => ({
  type: 'REMOVE_USER_STATE'
})

// logoutUser is a thunk
export const logoutUser = payload => {
  return dispatch => {
    dispatch(logoutUserBegin())

    // Get the response after requesting to backend API
    // Use Promise instead of async/await because it's tricky in thunk
    request({
      method: 'get',
      url: '/users/logout'
    })
      .then(response => {
        dispatch(logoutUserSuccess(response))

        // Remove user state
        dispatch(removeUserState())
        // Remove isAuthenticated in the storage
        browserStorage.removeKey('isAuthenticated')
        // Remove token in the storage
        browserStorage.removeKey('token')
      })
      .then(finished => {
        // Redirect to login page after logout is success
        dispatch(push('/'))

        // Notify visitor with toast
        toast.info(`You are logged out! See you later`, {
          position: 'top-center',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: false
        })
      })
      .catch(error => {
        // LOGOUT_USER_ERROR
        dispatch(logoutUserError(error))

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
