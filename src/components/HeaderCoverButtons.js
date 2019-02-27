import React from 'react'

import Header from './Header'
import Navigation from './Navigation'
import Heading from './Heading'
import CoverButtons from './CoverButtons'
import SearchBar from './SearchBar'

const HeaderCoverButtons = () => {
  return (
    <Header>
      <Navigation />
      <Heading size={1} scheme="dark">
        Share and improve your ideas
        <br />
        with the world
      </Heading>
      <CoverButtons />
      <SearchBar />
    </Header>
  )
}

export default HeaderCoverButtons
