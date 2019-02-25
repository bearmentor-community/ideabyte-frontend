import React from 'react'

import HeaderSimple from '../components/HeaderSimple'
import Footer from '../components/Footer'

const PageSimple = ({ children }) => {
  return (
    <main>
      <HeaderSimple />
      {children}
      <Footer />
    </main>
  )
}

export default PageSimple
