const initialState = {
  //////////////////////////////////////////////////////////////////////////////
  // latest response object for debugging purpose
  latestResponse: null,
  // error object if request is failed
  latestError: null,

  //////////////////////////////////////////////////////////////////////////////
  // will be used if still loading somewhere
  isLoading: false,
  // will be used if data fetching to API is still ongoing
  isFetching: false,

  //////////////////////////////////////////////////////////////////////////////
  // before we're logged in, the auth/admin conditions are false
  isAuthenticated: false, // will be true after we're logged in
  isAdmin: false // will be true after we're logged in as admin
}

// Reducers are pure functions
// They should not have any side effects nor mutate the state
// They have to return a copy
const initialReducer = (state = initialState, action) => {
  switch (action.type) {
    ////////////////////////////////////////////////////////////////////////////
    // SAMPLE ACTION TYPE
    case 'GET_STATE': {
      // remember, a reducer would not modify the data directly
      // instead, we return a copy
      return {
        // simpler to retrieve all other keys in state with spread operator
        // so we don't have to specify each keys on by one
        ...state,
        state: state
      }
    }

    default: {
      // ALWAYS have a default case in a reducer
      return state
    }
  }
}

export default initialReducer
