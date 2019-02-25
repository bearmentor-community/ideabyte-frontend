import React from 'react'

import HeaderCTA from '../components/HeaderCTA'
import Footer from '../components/Footer'

const PageCTA = ({ children }) => {
  return (
    <main>
      <HeaderCTA />
      {children}
      <Footer />
    </main>
  )
}

export default PageCTA
