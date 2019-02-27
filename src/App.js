import React from 'react' // a component, so it's TitleCase
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' // a component, so it's TitleCase
import { createStore } from 'redux' // a function, so it's camelCase
import { Provider } from 'react-redux' // a component, so it's TitleCase

import Home from './pages/Home'
import About from './pages/About'
import Explore from './pages/Explore'
import Idea from './pages/Idea'
import Register from './pages/Register'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import Profile from './pages/Profile'
import Post from './pages/Post'

// REDUX INITIAL STATE
// Prepare dummy data when the app starts
// import { initialState } from './redux/initialState'

// REDUX REDUCER
// Will be used to get data or modify data in the store's state
// Note: initialState is being used in reducer
import { reducer } from './redux/reducers'

// REDUX CREATE STORE
// Put the reducer inside the store
// Then pass it into Redux's Provider component
// So we can call it later in any Components through connect function
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
            <Route path={`/reset-password`} component={ResetPassword} />
            <Route path={`/profile`} component={Profile} />
            <Route path={`/post`} component={Post} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
