import React from 'react'

import Content from './components/Content'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App
