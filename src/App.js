import React from 'react' // a component, so it's TitleCase
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' // a component, so it's TitleCase
import { createStore } from 'redux' // a function, so it's camelCase
import { Provider } from 'react-redux' // a component, so it's TitleCase
import ObjectID from 'bson-objectid' // create fake ObjectID

import Home from './pages/Home'
import About from './pages/About'
import Explore from './pages/Explore'
import Idea from './pages/Idea'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Post from './pages/Post'

// REDUX INITIAL STATE
// Prepare dummy data when the app starts

import { initialState } from './redux/initialState'

// REDUX REDUCER
// Will be called when dispatch is called

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      return {
        // user: state.user,
        // ideas: state.ideas,
        // we can make is simpler with spread ... operator
        ...state,
        isAuthenticated: state.isAuthenticated
      }
    case 'LOGIN_USER':
      console.log(action.payload)
      return {
        ...state,
        isAuthenticated: true
      }
    case 'LOGOUT_USER':
      return {
        ...state,
        isAuthenticated: false
      }
    default:
      return state
  }
}

// REDUX CREATE STORE

const reduxStore = createStore(
  reducer,
  // Add Redux DevTools Extension
  // https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// REACT APP COMPONENT

class App extends React.Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <Router>
          <Switch>
            <Route exact path={`/`} component={Home} />
            <Route path={`/about`} component={About} />
            <Route path={`/explore`} component={Explore} />
            <Route path={`/ideas/:id`} component={Idea} />
            <Route path={`/register`} component={Register} />
            <Route path={`/login`} component={Login} />
            <Route path={`/profile`} component={Profile} />
            <Route path={`/post`} component={Post} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
