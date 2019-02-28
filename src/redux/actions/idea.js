import { push } from 'connected-react-router'

import request from '../request'
import browserStorage from '../browserStorage'

export const getIdeasBegin = () => ({
  type: 'GET_IDEAS_BEGIN'
})

export const getIdeasSuccess = response => {
  return {
    type: 'GET_IDEAS_SUCCESS',
    payload: {
      response
    }
  }
}

export const getIdeasError = error => ({
  type: 'GET_IDEAS_ERROR',
  payload: {
    error
  }
})

export const removeUserState = () => ({
  type: 'REMOVE_USER_STATE'
})

// getIdeas is a thunk
export const getIdeas = payload => {
  return dispatch => {
    dispatch(getIdeasBegin())

    // Get the response after requesting to backend API
    // Use Promise instead of async/await because it's tricky in thunk
    request({
      method: 'get',
      url: '/ideas'
    })
      .then(response => {
        dispatch(getIdeasSuccess(response))
      })
      .catch(error => {
        dispatch(getIdeasError(error))
        toast.error(`Sorry ${payload.name}, there's something wrong`, {
          position: 'top-left',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: false
        })
      })
  }
}
