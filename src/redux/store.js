import { createStore, applyMiddleware } from 'redux' // a function, so it's camelCase
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

// REDUX INITIAL STATE
// Prepare dummy data when the app starts
// import { initialState } from './initialState'
// This already called/moved in our reducer.js

// REDUX REDUCER
// Will be used to get data or modify data in the store's state
// Note: initialState is being used in the reducer function's parameter
import { reducer } from './reducer'

// REDUX CREATE STORE
// Put the reducer inside the store
// Then pass it into Redux's Provider component
// So we can call it later in any Components through connect function

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(logger)
    // other store enhancers if any
  )
)

export default store
