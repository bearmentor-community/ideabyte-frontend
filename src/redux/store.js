import { createStore, applyMiddleware } from 'redux' // a function, so it's camelCase
import { composeWithDevTools } from 'redux-devtools-extension'

import logger from 'redux-logger'
import thunk from 'redux-thunk'

////////////////////////////////////////////////////////////////////////////////
// REDUX INITIAL STATE
// Prepare dummy data when the app starts
// const initialState = {}

////////////////////////////////////////////////////////////////////////////////
// REDUX REDUCER
// Will be used to get data or modify data in the store's state
// This rootReducer is a combination of other reducers by combineReducers()
import rootReducer from './reducers/index'

////////////////////////////////////////////////////////////////////////////////
// REDUX CREATE STORE
// Put rootReducer aka all of the reducers inside the store
// Then pass it into Redux's Provider component
// So we can call it later in any Components through connect function

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store
