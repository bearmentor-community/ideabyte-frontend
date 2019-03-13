import { toast } from 'react-toastify'

import request from '../request'

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
        console.log(response)

        dispatch(getIdeasSuccess(response))
      })
      .catch(error => {
        dispatch(getIdeasError(error))

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
