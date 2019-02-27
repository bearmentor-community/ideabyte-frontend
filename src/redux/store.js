import { createStore, applyMiddleware } from 'redux' // a function, so it's camelCase
import { composeWithDevTools } from 'redux-devtools-extension'

import logger from 'redux-logger'
import thunk from 'redux-thunk'

// REDUX INITIAL STATE
// Prepare dummy data when the app starts
// import { initialState } from './initialState'

// REDUX REDUCER
// Will be used to get data or modify data in the store's state
// import { combineReducers } from 'redux'
import reducer from './reducers/index'
// import authReducer from './reducers/auth'
// const allReducers = combineReducers({})

// REDUX CREATE STORE
// Put all of the reducers inside the store
// Then pass it into Redux's Provider component
// So we can call it later in any Components through connect function

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk, logger)
    // other store enhancers if any
  )
)

export default store
