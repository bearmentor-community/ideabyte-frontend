import request from '../request'

// We made all the actions separated to ease us to inspect the flow

export const registerUserBegin = () => ({
  type: 'REGISTER_USER_BEGIN'
})

export const registerUserSuccess = response => {
  return {
    type: 'REGISTER_USER_SUCCESS',
    payload: {
      response
    }
  }
}

export const registerUserFailure = error => ({
  type: 'REGISTER_USER_FAILED',
  payload: {
    error
  }
})

export const registerUser = payload => {
  return dispatch => {
    dispatch(registerUserBegin())

    // Get the response after requesting to backend API
    // Use Promise instead of async/await because it's tricky in reducer
    // It's a slow process so we use await
    request({
      method: 'post',
      url: '/users/register',
      data: payload
    })
      .then(response => {
        console.info('response:', response)
        dispatch(registerUserSuccess(response))
        return response
      })
      .catch(error => {
        console.error('error:', error)
        dispatch(registerUserFailure(error))
      })
  }
}
