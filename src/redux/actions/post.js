import { push } from 'connected-react-router'

import { toast } from 'react-toastify'

import request from '../request'

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
  return async dispatch => {
    dispatch(postNewIdeaBegin())

    // try catch on request
    try {
      const response = await request({
        method: 'post',
        url: '/ideas',
        data: payload
      })
      dispatch(postNewIdeaSuccess(response))
      // Redirect to the newly posted idea
      dispatch(push(`/ideas/${response.data.result.id}`))
    } catch (error) {
      dispatch(postNewIdeaError(error))
      toast.error(`Sorry ${payload.name}, there's something wrong`, {
        position: 'top-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: false
      })
    }
  }
}
