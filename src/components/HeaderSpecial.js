import React from 'react'

import Header from './Header'
import Navigation from './Navigation'
import Heading from './Heading'

const HeaderSpecial = () => {
  return (
    <Header>
      <Navigation />
      <Heading size={1}>
        Share and improve your ideas
        <br />
        with the world
      </Heading>
    </Header>
  )
}

export default HeaderSpecial
