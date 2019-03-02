import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './App'
import * as serviceWorker from './serviceWorker'

import './index.css'

// Wrap the rendering in a function
const render = () => {
  ReactDOM.render(
    // Wrap App inside HotLoaderContainer
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

// Render once
render()

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render()
  })
}

// https://github.com/supasate/connected-react-router/blob/master/FAQ.md#how-to-hot-reload-functional-components
if (module.hot) {
  module.hot.accept('./App', () => {
    render()
  })
}
