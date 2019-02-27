import request from '../request'

export const registerUserBegin = () => ({
  type: 'REGISTER_USER_BEGIN'
})

export const registerUserSuccess = response => {
  return {
    type: 'REGISTER_USER_SUCCESS',
    payload: {
      ...state,
      latestResponse: response
    }
  }
}

export const registerUserFailure = error => ({
  type: 'REGISTER_USER_FAILED',
  payload: {
    ...state,
    latestError: error
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
        console.warn('response:', response)
        dispatch(registerUserSuccess(response))
        return response
      })
      .catch(error => {
        dispatch(registerUserFailure(error))
      })
  }
}
