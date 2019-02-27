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

const initialState = {
  // before we're logged in, the condition is false
  isAuthenticated: false, // will be true after we're logged in

  // this specific user will be retrieved from the backend /users/:id
  user: {
    _id: ObjectID(),
    id: 1,
    avatar: '/assets/images/avatar.jpg',
    name: 'Joen Doe',
    email: 'joendoe@example.com'
  },

  // these ideas will be retrieved from the backend /ideas
  ideas: [
    {
      _id: ObjectID(),
      id: 1,
      title: 'Tripvesto Trip Planner 1',
      short: "App to plan and gather your friends to travel. Let's join us!",
      author: 'Joen Doe',
      date: '2019/02/25',
      location: 'Jakarta, Indonesia',
      slug: 'tripvesto-trip-planner'
    },
    {
      _id: ObjectID(),
      id: 2,
      title: 'Tripvesto Trip Planner 2',
      short: "App to plan and gather your friends to travel. Let's join us!",
      author: 'Joen Doe',
      date: '2019/02/25',
      location: 'Jakarta, Indonesia',
      slug: 'tripvesto-trip-planner'
    },
    {
      _id: ObjectID(),
      id: 3,
      title: 'Tripvesto Trip Planner 3',
      short: "App to plan and gather your friends to travel. Let's join us!",
      author: 'Joen Doe',
      date: '2019/02/25',
      location: 'Jakarta, Indonesia',
      slug: 'tripvesto-trip-planner'
    }
  ]
}

// REDUX REDUCER
// Will be called when dispatch is called

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_IS_AUTHENTICATED':
      return {
        isAuthenticated: state.isAuthenticated
      }
    case 'GET_PROFILE':
      return {
        user: state.user
      }
    case 'GET_IDEAS':
      return {
        ideas: state.ideas
      }
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
