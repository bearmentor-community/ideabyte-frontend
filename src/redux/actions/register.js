import request from '../request'

// We made all the actions separated to ease us to inspect the flow
// These are called action creators

// action creator
export const registerUserBegin = () => ({
  type: 'REGISTER_USER_BEGIN'
})

// action creator
export const registerUserSuccess = response => {
  return {
    type: 'REGISTER_USER_SUCCESS',
    payload: {
      response
    }
  }
}

// action creator
export const registerUserError = error => ({
  type: 'REGISTER_USER_ERROR',
  payload: {
    error
  }
})

// registerUser is a thunk, because it:
// - delay the process
// - return another function to be processed again
export const registerUser = payload => {
  return dispatch => {
    // REGISTER_USER_BEGIN
    dispatch(registerUserBegin())

    // Get the response after requesting to backend API
    // Use Promise instead of async/await because it's tricky in thunk
    request({
      method: 'post',
      url: '/users/register',
      data: payload
    })
      .then(response => {
        console.info('response:', response)
        // REGISTER_USER_SUCCESS
        dispatch(registerUserSuccess(response))
        return response
      })
      .catch(error => {
        console.error('error:', error)
        // REGISTER_USER_ERROR
        dispatch(registerUserError(error))
      })
  }
}
