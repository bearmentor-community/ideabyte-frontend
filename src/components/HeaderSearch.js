import React from 'react'

import Header from './Header'
import Navigation from './Navigation'
import SearchBar from './SearchBar'

const HeaderSearch = () => {
  return (
    <Header>
      <Navigation />
      <SearchBar />
    </Header>
  )
}

export default HeaderSearch
