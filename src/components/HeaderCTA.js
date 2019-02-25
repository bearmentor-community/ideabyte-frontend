import React from 'react'

import Header from './Header'
import Navigation from './Navigation'
import Heading from './Heading'
import CTA from './CTA'
import SearchBar from './SearchBar'

const HeaderCTA = () => {
  return (
    <Header>
      <Navigation />
      <Heading size={1}>
        Share and improve your ideas
        <br />
        with the world
      </Heading>
      <CTA />
      <SearchBar />
    </Header>
  )
}

export default HeaderCTA
