import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import initialReducer from './initial'
import ideasReducer from './ideas'
import ideaReducer from './idea'
import profileReducer from './profile'
import registerReducer from './register'
import loginReducer from './login'
import logoutReducer from './logout'
import userReducer from './user'

// https://github.com/supasate/connected-react-router#usage
// Create a function that takes history as an argument and returns a root reducer.
// Add router reducer into root reducer by passing history to connectRouter.
// Note: The key MUST be router.

export default history =>
  combineReducers({
    router: connectRouter(history),
    initial: initialReducer,
    ideas: ideasReducer,
    idea: ideaReducer,
    profile: profileReducer,
    register: registerReducer,
    login: loginReducer,
    logout: logoutReducer,
    user: userReducer
  })
