import { combineReducers } from 'redux'

import initialReducer from './initial'
import userReducer from './user'
import registerReducer from './register'
import ideasReducer from './ideas'

export default combineReducers({
  initial: initialReducer,
  user: userReducer,
  ideas: ideasReducer,
  register: registerReducer
})
