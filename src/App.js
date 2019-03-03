import React from 'react' // a component, so it's TitleCase
import { Switch, Route } from 'react-router-dom' // a component, so it's TitleCase
// we use ConnectedRouter instead of BrowserRouter as Router
import { Provider } from 'react-redux' // a component, so it's TitleCase
import { ConnectedRouter } from 'connected-react-router'

////////////////////////////////////////////////////////////////////////////////
// PAGES
import Home from './pages/Home'
import About from './pages/About'
import Explore from './pages/Explore'
import Idea from './pages/Idea'
import Register from './pages/Register'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import Profile from './pages/Profile'
import Post from './pages/Post'
import NotFound from './pages/NotFound'

////////////////////////////////////////////////////////////////////////////////
// REDUX STORE
// We replace the regular store with enhanced configureStore()
import configureStore, { history } from './redux/configureStore'
import rootReducer from './redux/reducers'
// import store from './redux/store'
const store = configureStore(/* provide initial state if any */)

// https://github.com/supasate/connected-react-router#step-3
// Wrap your react-router v4 routing with ConnectedRouter
// and pass the history object as a prop.
// Place ConnectedRouter as a child of react-redux's Provider.

////////////////////////////////////////////////////////////////////////////////
// REACT COMPONENT
class App extends React.Component {
  render() {
    // Check if BACKEND_API_URL is exist
    if (!process.env.REACT_APP_BACKEND_API_URL) {
      return (
        <div>
          <h1>Idea Byte Backend REST API is not detected</h1>
        </div>
      )
    } else {
      return (
        // Regular Redux Provider
        <Provider store={store}>
          {/* place ConnectedRouter under Provider */}
          <ConnectedRouter history={history}>
            {/* our usual react-router v4 routing */}
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
              <Route component={NotFound} />
            </Switch>
          </ConnectedRouter>
        </Provider>
      )
    }
  }
}

// https://github.com/supasate/connected-react-router/blob/master/FAQ.md#how-to-hot-reload-reducers
if (module.hot) {
  module.hot.accept('./redux/reducers', () => {
    store.replaceReducer(rootReducer(history))
  })
}

export default App
