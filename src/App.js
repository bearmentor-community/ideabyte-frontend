import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Container from './components/Container'
import Home from './pages/Home'
import Register from './pages/Home'
import About from './pages/Home'
import Login from './pages/Home'

import styled from 'styled-components'

const ContainerStyle = styled.div`
  width: 1024px;
  text-align: center;
  margin: 0 auto;
`

class App extends React.Component {
  render() {
    return (
      <Router>
        <ContainerStyle>
          <Container />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Register" component={Register} />
            <Route path="/Login" component={Login} />
          </Switch>
        </ContainerStyle>
      </Router>
    )
  }
}

export default App
