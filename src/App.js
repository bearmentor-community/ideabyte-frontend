import React from 'react' // a component, so it's TitleCase
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' // a component, so it's TitleCase
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

import store from './redux/store'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
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
