import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import initialReducer from './initial'
import userReducer from './user'
import registerReducer from './register'
import ideasReducer from './ideas'

// https://github.com/supasate/connected-react-router#usage
// Create a function that takes history as an argument and returns a root reducer.
// Add router reducer into root reducer by passing history to connectRouter.
// Note: The key MUST be router.

export default history =>
  combineReducers({
    router: connectRouter(history),
    initial: initialReducer,
    user: userReducer,
    ideas: ideasReducer,
    register: registerReducer
  })
