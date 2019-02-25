import React from 'react'

import Navigation from './Navigation'
import SearchBar from './SearchBar'

const HeaderCTA = () => {
  return (
    <header>
      <Navigation />
      <h1>Share and improve your ideas with the world</h1>
      <div>
        <button>Get Started</button>
        <button>Explore Ideas</button>
      </div>
      <SearchBar />
    </header>
  )
}

export default HeaderCTA
