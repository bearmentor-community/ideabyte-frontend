////////////////////////////////////////////////////////////////////////////////
// REDUX INITIAL STATE
// Prepare dummy data when the app starts
// const initialState = {}

////////////////////////////////////////////////////////////////////////////////
// REDUX REDUCER
// Will be used to get data or modify data in the store's state
// This rootReducer is a combination of other reducers by combineReducers()
// import rootReducer from './reducers/index'

////////////////////////////////////////////////////////////////////////////////
// REDUX CREATE STORE
// Put rootReducer aka all of the reducers inside the store
// Then pass it into Redux's Provider component
// So we can call it later in any Components through connect function

// https://github.com/supasate/connected-react-router#step-2
// When creating a Redux store
// Create a history object.
// Provide the created history to the root reducer creator.
// Use routerMiddleware(history) if you want to dispatch history actions(e.g.to change URL with push('/path/to/somewhere')).

// After all this, we can see @@router/LOCATION_CHANGE action

import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'

import logger from 'redux-logger'
import thunk from 'redux-thunk'

import createRootReducer from './reducers'

// history will be used to navigate between pages programmatically
export const history = createBrowserHistory()

// a special configureStore() instead of regular createStore()
// we export this as default, to be used by Provider
export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        logger, // for logging when there's an action
        thunk // for handling asynchronous operation
      )
    )
  )

  return store
}
