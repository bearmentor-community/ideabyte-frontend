const initialState = {
  latestResponse: null,
  latestError: null,
  isLoading: false,
  data: {}
  // the user will be retrieved from the backend API /users/:id
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    ////////////////////////////////////////////////////////////////////////////
    case 'GET_ONE_USER_BEGIN': {
      return {
        ...state,
        isLoading: true,
        latestResponse: null,
        latestError: null
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    case 'GET_ONE_USER_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        latestResponse: action.payload.response,
        data: action.payload.response.data.user
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    case 'GET_ONE_USER_ERROR': {
      return {
        ...state,
        isLoading: false,
        latestResponse: null,
        latestError: action.payload.error
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    default: {
      return state
    }
  }
}

export default userReducer
