import { applyMiddleware, createStore } from 'redux' // a function, so it's camelCase
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
  applyMiddleware(logger), // Add Redux DevTools Extension
  // https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default reduxStore
