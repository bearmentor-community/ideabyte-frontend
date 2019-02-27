const initialState = {
  isLoading: null,
  latestResponse: null,
  latestError: null
}

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_USER_BEGIN': {
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        isLoading: true,
        latestError: null
      }
    }

    case 'REGISTER_USER_SUCCESS': {
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        isLoading: false,
        latestResponse: action.payload.response
      }
    }

    case 'REGISTER_USER_FAILED': {
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      //
      // This is all up to you and your app though:
      // maybe you want to keep the items around!
      // Do whatever seems right for your use case.
      return {
        ...state,
        isLoading: false,
        latestError: action.payload.error,
        latestResponse: {}
      }
    }

    default: {
      // ALWAYS have a default case in a reducer
      return state
    }
  }
}

export default registerReducer
