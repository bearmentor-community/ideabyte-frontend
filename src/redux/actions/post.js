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
  return dispatch => {
    dispatch(postNewIdeaBegin())

    console.log('postNewIdea() request:', request)

    request({
      method: 'post',
      url: '/ideas',
      data: {
        author: payload.author,
        title: payload.title,
        description: payload.description,
        date: payload.date,
        location: payload.location,
        slug: payload.slug,
        images: payload.images,
        details: payload.details
      }
    })
      .then(response => {
        dispatch(postNewIdeaSuccess(response))

        // Redirect to the newly posted idea
        dispatch(push('/profile'))
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
