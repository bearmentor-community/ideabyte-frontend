import { toast } from 'react-toastify'

import request from '../request'

export const getOneIdeaBegin = () => ({
  type: 'GET_ONE_IDEA_BEGIN'
})

export const getOneIdeaSuccess = response => {
  return {
    type: 'GET_ONE_IDEA_SUCCESS',
    payload: {
      response
    }
  }
}

export const getOneIdeaError = error => ({
  type: 'GET_ONE_IDEA_ERROR',
  payload: {
    error
  }
})

// getOneIdea is a thunk
export const getOneIdea = payload => {
  return dispatch => {
    dispatch(getOneIdeaBegin())

    // Get the response after requesting to backend API
    // Use Promise instead of async/await because it's tricky in thunk
    request({
      method: 'get',
      url: `/ideas/${payload.id}`
    })
      .then(response => {
        console.log(response)

        dispatch(getOneIdeaSuccess(response))
      })
      .catch(error => {
        dispatch(getOneIdeaError(error))

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
