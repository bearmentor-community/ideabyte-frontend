import { push } from 'connected-react-router'
import { toast } from 'react-toastify'

import request from '../request'

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

export const logoutUser = payload => {
  return dispatch => {
    dispatch(logoutUserBegin())

    // Get the response after requesting to backend API
    // Use Promise instead of async/await because it's tricky in thunk
    request({
      method: 'get',
      url: '/users/logout',
      data: payload
    })
      .then(response => {
        dispatch(logoutUserSuccess(response))

        // Redirect to login page after logout is success
        dispatch(push('/'))

        // Notify visitor with toast
        toast.success(`You are logged out! See you later`, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false
        })

        // to be used later
        return response
      })
      .catch(error => {
        // LOGOUT_USER_ERROR
        dispatch(logoutUserError(error))

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
