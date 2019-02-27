export const registerUserBegin = () => ({
  type: 'REGISTER_USER_BEGIN'
})

export const registerUserSuccess = response => ({
  type: 'REGISTER_USER_SUCCESS',
  payload: { response }
})

export const registerUserFailure = error => ({
  type: 'REGISTER_USER_FAILED',
  payload: { error }
})
