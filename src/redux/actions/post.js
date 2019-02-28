import { push } from 'connected-react-router'

import request from '../request'
import browserStorage from '../browserStorage'

export const postNewIdeaBegin = () => ({
  type: 'POST_NEW_IDEA_BEGIN'
})

export const postNewIdeaSuccess = response => {
  return {
    type: 'POST_NEW_IDEA_SUCCESS',
    payload: {
      response
    }
  }
}

export const postNewIdeaError = error => ({
  type: 'POST_NEW_IDEA_ERROR',
  payload: {
    error
  }
})

// postNewIdea is a thunk
export const postNewIdea = payload => {
  return dispatch => {
    dispatch(postNewIdeaBegin())

    request({
      method: 'post',
      url: '/ideas'
    })
      .then(response => {
        dispatch(postNewIdeaSuccess(response))
      })
      .catch(error => {
        dispatch(postNewIdeaError(error))
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
