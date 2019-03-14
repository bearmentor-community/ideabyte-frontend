import { push } from 'connected-react-router'
import { toast } from 'react-toastify'

import browserStorage from '../browserStorage'
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

    const token = browserStorage.getKey('token')

    request({
      method: 'post',
      url: '/ideas',
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: payload
    })
      .then(response => {
        // POST_NEW_IDEA_SUCCESS
        dispatch(postNewIdeaSuccess(response))
        return response
      })
      .then(response => {
        // Redirect to the newly posted idea
        dispatch(push(`/ideas/${response.data.resultIdea.id}`))

        // Notify visitor with toast
        toast.success(`Your idea is posted!`, {
          position: 'top-left',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: false
        })
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
