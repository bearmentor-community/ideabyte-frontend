import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Explore from './pages/Explore'
import Idea from './pages/Idea'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Post from './pages/Post'

class App extends React.Component {
  render() {
    return (
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
    )
  }
}

export default App
