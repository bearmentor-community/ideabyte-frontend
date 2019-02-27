const initialState = {
  //////////////////////////////////////////////////////////////////////////////
  // latest response object for debugging purpose
  latestResponse: null,
  // error object if request is failed
  latestError: null,

  //////////////////////////////////////////////////////////////////////////////
  // will be used if still loading
  isLoading: false,
  // will be used if data fetching to API is still ongoing
  isFetching: false,

  // before we're logged in, the auth/admin conditions are false
  isAuthenticated: false, // will be true after we're logged in
  isAdmin: false, // will be true after we're logged in as admin

  //////////////////////////////////////////////////////////////////////////////
  // after we're logged in, we have a JSON Web Token (JWT)
  token: null // a string of JWT
}

const initialReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      // ALWAYS have a default case in a reducer
      return state
    }
  }
}

export default initialReducer
