import { toast } from 'react-toastify'

import request from '../request'

export const getOneUserBegin = () => ({
  type: 'GET_ONE_USER_BEGIN'
})

export const getOneUserSuccess = response => {
  return {
    type: 'GET_ONE_USER_SUCCESS',
    payload: {
      response
    }
  }
}

export const getOneUserError = error => ({
  type: 'GET_ONE_USER_ERROR',
  payload: {
    error
  }
})

// getOneUser is a thunk
export const getOneUser = payload => {
  return dispatch => {
    dispatch(getOneUserBegin())

    // Get the response after requesting to backend API
    // Use Promise instead of async/await because it's tricky in thunk
    request({
      method: 'get',
      url: `/users/${payload.id}`
    })
      .then(response => {
        dispatch(getOneUserSuccess(response))
      })
      .catch(error => {
        dispatch(getOneUserError(error))

        toast.error(`Sorry, there's something wrong`, {
          position: 'top-left',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: false
        })
      })
  }
}
