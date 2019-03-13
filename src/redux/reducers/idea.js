const initialState = {
  latestResponse: null,
  latestError: null,
  isLoading: false,
  data: []
  // the ideas will be retrieved from the backend API /ideas/:id
}

const ideaReducer = (state = initialState, action) => {
  switch (action.type) {
    ////////////////////////////////////////////////////////////////////////////
    case 'GET_IDEAS_BEGIN': {
      return {
        ...state,
        isLoading: true,
        latestResponse: null,
        latestError: null
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    case 'GET_IDEAS_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        latestResponse: action.payload.response,
        data: action.payload.response.data.idea
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    case 'GET_IDEAS_ERROR': {
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

export default ideaReducer
